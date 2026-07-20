import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import BigLongLake from "./pages/BigLongLake";
import Welcome from "./pages/Welcome";
import NotFound from "./pages/NotFound";

// Router-agnostic app tree. The router itself is supplied by the caller:
// - BrowserRouter on the client (App.tsx)
// - StaticRouter during static prerendering (entry-server.tsx)
const AppRoutes = () => (
  <TooltipProvider>
    <Toaster />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/big-long-lake" element={<BigLongLake />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </TooltipProvider>
);

export default AppRoutes;
