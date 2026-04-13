import fs from "fs/promises";
import path from "path";

const distDir = path.resolve(process.cwd(), "dist");
const indexFile = path.join(distDir, "index.html");
const fallbackFile = path.join(distDir, "404.html");

try {
  const content = await fs.readFile(indexFile);
  await fs.writeFile(fallbackFile, content);
  console.log("Copied dist/index.html to dist/404.html");
} catch (error) {
  console.error("Failed to create 404 fallback:", error);
  process.exit(1);
}
