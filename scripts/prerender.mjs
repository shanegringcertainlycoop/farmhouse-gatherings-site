import { chromium } from "playwright";
import { preview } from "vite";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve } from "path";

const DIST = resolve(process.cwd(), "dist");
const routes = ["/", "/about"];

async function prerender() {
  // Serve the built files using Vite preview
  const server = await preview({
    preview: { port: 4173, strictPort: true },
  });
  console.log("Preview server running on http://localhost:4173");

  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const route of routes) {
    const url = `http://localhost:4173${route}`;
    console.log(`Pre-rendering: ${url}`);

    await page.goto(url, { waitUntil: "networkidle" });

    // Wait for the main heading to render (proves React has mounted)
    await page.waitForSelector("h1", { timeout: 15000 });

    // Get the full HTML
    const html = await page.content();

    // Write back to dist
    const filePath = resolve(DIST, route === "/" ? "index.html" : `${route.slice(1)}/index.html`);
    if (route !== "/") {
      mkdirSync(resolve(DIST, route.slice(1)), { recursive: true });
    }
    writeFileSync(filePath, html, "utf-8");
    console.log(`Wrote: ${filePath}`);
  }

  await browser.close();
  server.httpServer.close();

  // Verify the output has content
  const output = readFileSync(resolve(DIST, "index.html"), "utf-8");
  const hasContent = output.includes("The Farmhouse at");
  const hasNav = output.includes('href="#about"');
  const hasSchema = output.includes("application/ld+json");

  if (hasContent && hasNav) {
    const bodySize = output.length;
    console.log(`\nPre-rendering complete!`);
    console.log(`  HTML size: ${(bodySize / 1024).toFixed(1)} KB`);
    console.log(`  Has content: ${hasContent}`);
    console.log(`  Has nav links: ${hasNav}`);
    console.log(`  Has schema: ${hasSchema}`);
  } else {
    console.error("\nWARNING: Pre-rendered HTML may be empty!");
    process.exit(1);
  }
}

prerender().catch((err) => {
  console.error("Pre-render failed:", err);
  process.exit(1);
});
