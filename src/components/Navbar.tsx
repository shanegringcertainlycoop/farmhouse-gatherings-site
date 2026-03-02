import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "The Lake", href: "#lake" },
  { label: "The Area", href: "#area" },
  { label: "Details", href: "#details" },
  { label: "FAQ", href: "#faq" },
  { label: "Our Family", href: "/about" },
  { label: "Inquire", href: "#inquire" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return; // let normal links navigate
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a
          href="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              handleClick(e, "#hero");
            }
          }}
          className="font-display text-lg sm:text-xl italic text-foreground tracking-tight"
        >
          The Farmhouse
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              className="text-xs font-body font-medium uppercase tracking-[0.15em] text-foreground/60 hover:text-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-3 min-w-[48px] min-h-[48px] flex items-center justify-center text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              className="block w-full text-left py-3 text-sm font-body uppercase tracking-[0.15em] text-foreground/60 hover:text-secondary border-b border-border/30 last:border-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
