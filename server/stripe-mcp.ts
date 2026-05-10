/**
 * Stripe MCP Helper Functions
 * 
 * Uses Manus Stripe MCP server to bypass local Secret Key injection issues.
 * The MCP server is authenticated with the correct live mode account.
 */

import { execSync } from "child_process";
import { getDb } from "./db";
import { stripeCustomers, stripePayments, stripeSubscriptions } from "../drizzle/schema";
import { eq } from "drizzle-orm";

/**
 * Execute a Stripe MCP tool call
 */
async function executeMcpTool(toolName: string, input: Record<string, any>): Promise<any> {
  try {
    const cmd = `manus-mcp-cli tool call ${toolName} --server stripe --input '${JSON.stringify(input)}'`;
    console.log(`[Stripe MCP] Executing: ${cmd}`);
    
    const result = execSync(cmd, { encoding: "utf-8" });
    console.log(`[Stripe MCP] Raw output:\n${result}`);
    
    // Extract JSON from output - look for lines that start with { or [
    const lines = result.split('\n');
    console.log(`[Stripe MCP] Output has ${lines.length} lines`);
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      console.log(`[Stripe MCP] Line ${i}: ${JSON.stringify(trimmed.substring(0, 100))}...`);
      
      // Skip empty lines and info lines
      if (!trimmed || trimmed.includes('Tool execution result') || trimmed.includes('saved to:')) {
        console.log(`[Stripe MCP] Line ${i} skipped (info line)`);
        continue;
      }
      // Look for JSON
      if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
        console.log(`[Stripe MCP] Line ${i} looks like JSON, attempting parse...`);
        try {
          const parsed = JSON.parse(trimmed);
          console.log(`[Stripe MCP] Successfully parsed JSON:`, parsed);
          return parsed;
        } catch (e) {
          console.error("[Stripe MCP] Failed to parse JSON line:", trimmed, e);
          // Continue to next line
        }
      }
    }
    
    // If no JSON line found, throw error
    console.error("[Stripe MCP] No JSON found in output:", result);
    throw new Error(`Failed to parse MCP tool result for ${toolName}`);
  } catch (error) {
    console.error(`[Stripe MCP] Tool call failed for ${toolName}:`, error);
    throw error;
  }
}

/**
 * Create a customer via Stripe MCP
 */
export async function createCustomerViaMcp(email?: string, name?: string): Promise<string> {
  const input: Record<string, any> = {};
  if (name) input.name = name;
  if (email) input.email = email;
  
  const result = await executeMcpTool("create_customer", input);
  return result.id || result.customer_id;
}

/**
 * Create a payment link via Stripe MCP (for one-time payment)
 */
export async function createPaymentLinkViaMcp(
  priceId: string,
  quantity: number = 1
): Promise<string> {
  const result = await executeMcpTool("create_payment_link", {
    price: priceId,
    quantity,
  });
  return result.url || result.payment_link_url;
}

/**
 * Get or create a Stripe customer for a user (via MCP)
 */
export async function getOrCreateStripeCustomerViaMcp(
  userId: number,
  email?: string,
  name?: string
): Promise<string> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Check if customer already exists
  const existing = await db
    .select()
    .from(stripeCustomers)
    .where(eq(stripeCustomers.userId, userId))
    .limit(1);

  if (existing.length > 0) {
    return existing[0].stripeCustomerId;
  }

  // Create new Stripe customer via MCP
  const customerId = await createCustomerViaMcp(email, name);

  // Save to database
  await db.insert(stripeCustomers).values({
    userId,
    stripeCustomerId: customerId,
  });

  return customerId;
}

/**
 * Create a checkout session for one-time payment via MCP
 * 
 * Note: Stripe MCP's create_payment_link returns a simple payment link,
 * not a full checkout session. For full checkout session control, we'd need
 * to use the Stripe API directly, but this demonstrates the MCP approach.
 */
export async function createCheckoutSessionViaMcp(
  userId: number,
  priceId: string,
  successUrl: string,
  cancelUrl: string,
  email?: string,
  name?: string,
): Promise<{ url: string; sessionId?: string }> {
  // Get or create customer
  await getOrCreateStripeCustomerViaMcp(userId, email, name);

  // Create payment link via MCP
  const url = await createPaymentLinkViaMcp(priceId);

  return {
    url,
    sessionId: url.split("/").pop() || "",
  };
}

/**
 * Create a subscription checkout session via MCP
 * 
 * Note: MCP's create_payment_link doesn't support subscriptions directly.
 * For subscriptions, we need to use the native Stripe client with the correct key.
 */
export async function createSubscriptionCheckoutSessionViaMcp(
  userId: number,
  priceId: string,
  successUrl: string,
  cancelUrl: string,
  email?: string,
  name?: string,
): Promise<{ url: string; sessionId?: string }> {
  // For subscriptions, fall back to the native Stripe client
  // This is a limitation of the MCP server's create_payment_link tool
  throw new Error(
    "Subscription checkout via MCP is not yet supported. Use native Stripe client instead."
  );
}

/**
 * Handle payment webhook via MCP (retrieve payment intent details)
 */
export async function retrievePaymentIntentViaMcp(paymentIntentId: string): Promise<any> {
  const result = await executeMcpTool("fetch_stripe_resources", {
    resource_id: paymentIntentId,
  });
  return result;
}

/**
 * List payment intents for a customer via MCP
 */
export async function listPaymentIntentsViaMcp(customerId: string, limit: number = 10): Promise<any[]> {
  const result = await executeMcpTool("list_payment_intents", {
    customer: customerId,
    limit,
  });
  return result.data || result || [];
}

/**
 * List subscriptions for a customer via MCP
 */
export async function listSubscriptionsViaMcp(customerId: string, limit: number = 10): Promise<any[]> {
  const result = await executeMcpTool("list_subscriptions", {
    customer: customerId,
    limit,
  });
  return result.data || result || [];
}
