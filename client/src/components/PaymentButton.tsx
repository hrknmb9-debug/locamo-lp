import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { TRPCClientError } from "@trpc/client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface PaymentButtonProps {
  priceId: string;
  planName: string;
  isSubscription?: boolean;
  children?: React.ReactNode;
}

export function PaymentButton({
  priceId,
  planName,
  isSubscription = false,
  children,
}: PaymentButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const createOneTimeCheckout = trpc.payment.createOneTimeCheckout.useMutation();
  const createSubscriptionCheckout = trpc.payment.createSubscriptionCheckout.useMutation();

  const handleClick = async () => {
    setIsLoading(true);
    try {
      let result;
      if (isSubscription) {
        result = await createSubscriptionCheckout.mutateAsync({
          priceId,
          planName,
        });
      } else {
        result = await createOneTimeCheckout.mutateAsync({
          priceId,
          planName,
        });
      }

      if (result.url) {
        // Open checkout in new tab
        window.open(result.url, "_blank");
        toast.success(`${planName} の決済ページを開きました`);
      }
    } catch (error) {
      if (error instanceof TRPCClientError && error.data?.code === "UNAUTHORIZED") {
        toast.message("ログインが必要です。ログインページへ移動します。");
        window.location.href = getLoginUrl();
        return;
      }
      console.error("Checkout error:", error);
      toast.error("決済ページの作成に失敗しました");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      type="button"
      onClick={handleClick}
      disabled={isLoading}
      className="w-full"
      size="lg"
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children || "今すぐ申し込む"}
    </Button>
  );
}
