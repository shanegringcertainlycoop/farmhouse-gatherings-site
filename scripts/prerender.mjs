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

// The regional lakes guide. FAQPage mirrors the questions rendered on the page —
// keep the two in sync, or the markup misrepresents the content.
const lakesGuideFaqs = [
  [
    "How many lakes are in northern Indiana?",
    "The Natural Resources Commission's official listing of public freshwater lakes records 239 across the four core lake counties alone — 76 in Steuben, 64 in Kosciusko, 52 in LaGrange and 47 in Noble.",
  ],
  [
    "Why does northeast Indiana have so many lakes?",
    "They are glacial. The Indiana DNR notes that eighteen counties in northern Indiana contain natural lakes, but Kosciusko, LaGrange, Noble and Steuben hold nearly 70% of the total surface acreage between them.",
  ],
  [
    "What is the largest lake in Indiana?",
    "Lake Wawasee in Kosciusko County, at 3,006 acres, is the largest natural lake wholly within the state.",
  ],
  [
    "What is the deepest lake in Indiana?",
    "Lake Tippecanoe in Kosciusko County, with a maximum depth of 122 feet and an average depth of 37 feet.",
  ],
  [
    "When is the best time to visit the northern Indiana lakes?",
    "Late June through August is peak season. September is the quiet favourite — still swimmable, with far less boat traffic.",
  ],
  [
    "Can you swim in the northern Indiana lakes?",
    "Yes. Public beaches include Pokagon State Park on Lake James, Chain O'Lakes State Park, Bixler Lake in Kendallville and Webster Lake.",
  ],
];

const lakesGuideJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Northern Indiana Lakes",
        item: `${SITE}/northern-indiana-lakes`,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE}/northern-indiana-lakes#article`,
    headline: "Northern Indiana Lakes: A Complete Guide to Indiana's Lake Country",
    description:
      "A guide to the 239 public lakes of LaGrange, Steuben, Noble and Kosciusko counties — Indiana's lake country — with acreage, depth and fishing detail sourced from the Indiana DNR.",
    about: { "@id": `${SITE}/northern-indiana-lakes#region` },
    isPartOf: { "@id": `${SITE}/#website` },
    author: { "@type": "Organization", name: "The Farmhouse at Big Long Lake" },
    publisher: { "@id": `${SITE}/#vacation-rental` },
    image: `${SITE}/images/houses-from-lake.webp`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${SITE}/northern-indiana-lakes#region`,
    name: "Northern Indiana Lake Country",
    description:
      "The lake district of northeastern Indiana, covering LaGrange, Steuben, Noble and Kosciusko counties, which together hold nearly 70% of Indiana's natural lake surface acreage.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "IN",
      addressCountry: "US",
    },
    containsPlace: [
      { "@type": "LakeBodyOfWater", name: "Lake Wawasee" },
      { "@type": "LakeBodyOfWater", name: "Lake Tippecanoe" },
      { "@type": "LakeBodyOfWater", name: "Lake James" },
      { "@type": "LakeBodyOfWater", name: "Big Long Lake" },
      { "@type": "LakeBodyOfWater", name: "Clear Lake" },
      { "@type": "LakeBodyOfWater", name: "Sylvan Lake" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE}/northern-indiana-lakes#faq`,
    mainEntity: lakesGuideFaqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
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
    // Keep in sync with index.html — these values overwrite the ones in the
    // shell for the built homepage.
    title: "Big Long Lake Vacation Rental, Indiana | Sleeps 12, Private Dock",
    description:
      "Lakefront vacation rental on Big Long Lake in Wolcottville, Indiana. Sleeps 12 in 4 bedrooms and 2 baths, with a full kitchen and a private dock.",
    home: true,
  },
  {
    // Flat `about.html`, not `about/index.html`. With Netlify's pretty_urls a
    // directory index makes /about 301 to /about/, so every internal link, the
    // sitemap entry and the canonical (all slash-less) cost a redirect hop.
    // A flat file is served at /about directly, 200.
    path: "/about",
    out: "about.html",
    title: "Our Family | The Farmhouse at Big Long Lake",
    description:
      "Meet the Gring family, owners of The Farmhouse at Big Long Lake in Wolcottville, Indiana — one of the oldest homes on the lake, kept in the family since 2018.",
    jsonLd: aboutJsonLd,
  },
  {
    path: "/big-long-lake",
    out: "big-long-lake.html",
    title: "Big Long Lake Guide | Things to Do, Fishing & Events, Wolcottville IN",
    description:
      "A guide to Big Long Lake in Wolcottville, Indiana — swimming, boating, fishing, kayaking, seasonal events, and staying lakefront at The Farmhouse.",
    jsonLd: guideJsonLd,
  },
  {
    path: "/northern-indiana-lakes",
    out: "northern-indiana-lakes.html",
    title: "Northern Indiana Lakes: Complete Guide to Indiana's Lake Country",
    description:
      "A complete guide to the lakes of northern Indiana — 239 public lakes across LaGrange, Steuben, Noble and Kosciusko counties, which hold nearly 70% of the state's natural lake acreage. Acreage, depth and fishing detail from the Indiana DNR.",
    jsonLd: lakesGuideJsonLd,
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
