import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppRoutes from "./AppRoutes";

// Called by scripts/prerender.mjs at build time to produce static HTML
// for each route. No browser is required, so it runs anywhere Netlify builds.
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );
}
