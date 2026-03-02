/**
 * IndexNow — notify search engines of updated URLs after deploy.
 *
 * Usage:
 *   node scripts/indexnow.mjs                  # submit all URLs
 *   node scripts/indexnow.mjs https://...url   # submit a single URL
 *
 * Supported engines: Bing (shared with Yandex, Seznam, Naver, etc.)
 * https://www.indexnow.org/documentation
 */

const KEY = "23d2babfa9405fc1c81bfe3df9c0081e";
const HOST = "thefarmhouseatbiglonglake.com";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// All public URLs on the site
const ALL_URLS = [`https://${HOST}/`];

const urls = process.argv[2] ? [process.argv[2]] : ALL_URLS;

const body = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urls,
});

const engines = ["api.indexnow.org", "www.bing.com"];

for (const engine of engines) {
  try {
    const res = await fetch(`https://${engine}/indexnow`, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body,
    });
    console.log(`${engine}: ${res.status} ${res.statusText}`);
  } catch (err) {
    console.error(`${engine}: ${err.message}`);
  }
}
