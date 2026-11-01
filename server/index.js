
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.resolve(__dirname, "../public");

app.use(express.static(publicPath));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/{*path}", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
});
