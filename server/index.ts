import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { ingestHearingSubmission } from "../shared/hearingIngest";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json({ limit: "320kb" }));

  app.post("/api/hearing", async (req, res) => {
    try {
      const result = await ingestHearingSubmission(req.body ?? {});
      if (!result.ok) {
        res.status(400).json(result);
        return;
      }
      res.json({ ok: true });
    } catch (e) {
      console.error("[api/hearing]", e);
      res.status(500).json({ ok: false });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
