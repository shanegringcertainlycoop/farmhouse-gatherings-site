import { TreePine } from "lucide-react";

const PineDivider = () => (
  <div className="flex items-center justify-center gap-3 py-2">
    <div className="h-px w-12 bg-border" />
    <TreePine size={16} strokeWidth={1.5} className="text-secondary/40" />
    <div className="h-px w-12 bg-border" />
  </div>
);

export default PineDivider;
