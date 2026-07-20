import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// The prerender step writes static HTML into #root for crawlers and fast
// first paint. We client-render (rather than hydrate) so there is never a
// hydration mismatch — React clears the prerendered markup and renders fresh.
const rootElement = document.getElementById("root")!;
createRoot(rootElement).render(<App />);
