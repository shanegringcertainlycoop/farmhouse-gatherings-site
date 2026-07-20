// Browser-free static prerender.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
// For each public route it renders the React tree to static HTML with
// react-dom/server, injects it into the built index.html shell, rewrites the
// per-route <head> (title/description/canonical/OG) and JSON-LD, and writes a
// static file so crawlers get real content + correct metadata on first request.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

// Minimal browser globals so modules that touch them at import time
// (e.g. the Supabase client's `storage: localStorage`) don't throw in Node.
const noopStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
  key: () => null,
  length: 0,
};
globalThis.localStorage = globalThis.localStorage || noopStorage;
globalThis.sessionStorage = globalThis.sessionStorage || noopStorage;

const SITE = "https://biglongfarmhouse.com";

// Route-specific JSON-LD. The homepage keeps the VacationRental / FAQPage /
// WebSite blocks that live in index.html. Sub-pages strip the homepage-only
// blocks (VacationRental, FAQPage) and get their own schema instead.
const guideJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Big Long Lake Guide", item: `${SITE}/big-long-lake` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE}/big-long-lake#webpage`,
    url: `${SITE}/big-long-lake`,
    name: "Big Long Lake Guide",
    description:
      "A guide to Big Long Lake in Wolcottville, Indiana — swimming, boating, fishing, kayaking, seasonal events, and staying lakefront at The Farmhouse.",
    isPartOf: { "@id": `${SITE}/#website` },
    about: { "@id": `${SITE}/big-long-lake#lake` },
    primaryImageOfPage: `${SITE}/images/houses-from-lake.webp`,
  },
  {
    "@context": "https://schema.org",
    "@type": "LakeBodyOfWater",
    "@id": `${SITE}/big-long-lake#lake`,
    name: "Big Long Lake",
    description:
      "An all-sports, roughly 300-acre lake in LaGrange County, Indiana near Wolcottville. Popular for swimming, boating, water skiing, fishing, kayaking, and paddleboarding.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wolcottville",
      addressRegion: "IN",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 41.5339, longitude: -85.3564 },
  },
];

const aboutJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Our Family", item: `${SITE}/about` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE}/about#webpage`,
    url: `${SITE}/about`,
    name: "Our Family | The Farmhouse at Big Long Lake",
    description:
      "Meet the Gring family, owners of The Farmhouse at Big Long Lake in Wolcottville, Indiana.",
    isPartOf: { "@id": `${SITE}/#website` },
    about: { "@id": `${SITE}/#vacation-rental` },
  },
];

// Routes to prerender. The private /welcome page and unknown routes keep the
// SPA fallback (index.html) — they are intentionally not prerendered.
const routes = [
  {
    path: "/",
    out: "index.html",
    title: "Big Long Lake Vacation Rental | The Farmhouse, Wolcottville IN",
    description:
      "Big Long Lake vacation rental in Wolcottville, Indiana. This lakefront farmhouse sleeps 12 with 4 bedrooms, 2 baths, a full kitchen, and a private dock on Big Long Lake.",
    home: true,
  },
  {
    path: "/about",
    out: "about/index.html",
    title: "Our Family | The Farmhouse at Big Long Lake",
    description:
      "Meet the Gring family, owners of The Farmhouse at Big Long Lake in Wolcottville, Indiana — one of the oldest homes on the lake, kept in the family since 2018.",
    jsonLd: aboutJsonLd,
  },
  {
    path: "/big-long-lake",
    out: "big-long-lake/index.html",
    title: "Big Long Lake Guide | Things to Do, Fishing & Events, Wolcottville IN",
    description:
      "A guide to Big Long Lake in Wolcottville, Indiana — swimming, boating, fishing, kayaking, seasonal events, and staying lakefront at The Farmhouse.",
    jsonLd: guideJsonLd,
  },
];

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Remove a homepage-only JSON-LD block (identified by its HTML comment label).
const stripBlock = (html, label) =>
  html.replace(
    new RegExp(`\\s*<!-- Structured Data: ${label} -->\\s*<script type="application/ld\\+json">[\\s\\S]*?</script>`),
    ""
  );

const templatePath = path.join(distDir, "index.html");
if (!fs.existsSync(templatePath)) {
  console.error("prerender: dist/index.html not found — run `vite build` first.");
  process.exit(1);
}
const template = fs.readFileSync(templatePath, "utf-8");

const { render } = await import(path.join(distDir, "server", "entry-server.js"));

const applyHead = (html, route) => {
  const canonical = route.path === "/" ? `${SITE}/` : `${SITE}${route.path}`;
  const title = esc(route.title);
  const desc = esc(route.description);
  html = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[\s\S]*?("\s*\/?>)/, `$1${desc}$2`)
    .replace(/(<link rel="canonical" href=")[\s\S]*?("\s*\/?>)/, `$1${canonical}$2`)
    .replace(/(<meta property="og:url" content=")[\s\S]*?(")/, `$1${canonical}$2`)
    .replace(/(<meta property="og:title" content=")[\s\S]*?(")/, `$1${title}$2`)
    .replace(/(<meta property="og:description" content=")[\s\S]*?(")/, `$1${desc}$2`)
    .replace(/(<meta name="twitter:title" content=")[\s\S]*?(")/, `$1${title}$2`)
    .replace(/(<meta name="twitter:description" content=")[\s\S]*?(")/, `$1${desc}$2`);

  if (!route.home) {
    // Homepage-specific schema shouldn't appear on sub-pages.
    html = stripBlock(html, "VacationRental");
    html = stripBlock(html, "FAQPage");
  }

  if (route.jsonLd && route.jsonLd.length) {
    const scripts = route.jsonLd
      .map((obj) => `\n    <script type="application/ld+json">\n${JSON.stringify(obj, null, 2)}\n    </script>`)
      .join("");
    html = html.replace("</head>", `${scripts}\n  </head>`);
  }

  return html;
};

let count = 0;
for (const route of routes) {
  const appHtml = render(route.path);
  let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  html = applyHead(html, route);

  const outPath = path.join(distDir, route.out);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  count++;
  console.log(`prerendered ${route.path} -> dist/${route.out} (${appHtml.length} bytes of HTML)`);
}

// The SSR bundle is only needed at build time.
fs.rmSync(path.join(distDir, "server"), { recursive: true, force: true });

console.log(`prerender: wrote ${count} route(s).`);
