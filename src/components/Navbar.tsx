import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

// Deliberately three links and one button — the nav had grown to ten flat items
// and was wrapping onto two lines by 820px.
//
// This is a single-property rental: the homepage is a scroller, so the nav's
// real job is "what's the lake like", "what does the house have", and "let me
// book". Everything else — both guides, Our Family, the contact address — lives
// in the footer, which keeps it reachable and crawlable without competing with
// the one action that matters.
//
// The same set renders on every page, so there is no context switching. Hash
// links resolve to /#section off the homepage; see hrefFor below.
const links = [
  { label: "The Lake", href: "#lake" },
  { label: "Details", href: "#details" },
  { label: "Guides", href: "/big-long-lake" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // The #section targets all live on the homepage. On /about and
  // /big-long-lake they don't exist, so a bare "#inquire" href pointed at
  // nothing and the click handler swallowed the event — the link was simply
  // dead. Off the homepage we emit "/#inquire" instead and let the browser
  // navigate. useLocation (not window) so this is correct during prerender too.
  const isHome = useLocation().pathname === "/";

  const hrefFor = (href: string) =>
    href.startsWith("#") && !isHome ? `/${href}` : href;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only intercept for smooth scrolling when the target is on this page.
    if (!href.startsWith("#") || !isHome) return; // let normal links navigate
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const linkClass =
    "text-xs font-body font-medium uppercase tracking-[0.15em] text-foreground/60 hover:text-secondary transition-colors whitespace-nowrap";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 gap-4">
        <a
          href="/"
          onClick={(e) => handleClick(e, "#hero")}
          className="font-display text-lg sm:text-xl italic text-foreground tracking-tight whitespace-nowrap shrink-0"
        >
          The Farmhouse
        </a>

        {/* Three links and a button fit comfortably from ~700px, so md is safe
            again — the earlier lg breakpoint existed only to hide seven. */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={hrefFor(l.href)}
              onClick={(e) => handleClick(e, l.href)}
              className={linkClass}
            >
              {l.label}
            </a>
          ))}
          <a
            href={hrefFor("#inquire")}
            onClick={(e) => handleClick(e, "#inquire")}
            className="text-xs font-body font-semibold uppercase tracking-[0.15em] bg-secondary text-secondary-foreground px-5 py-2.5 rounded-sm hover:bg-secondary/90 transition-colors whitespace-nowrap"
          >
            Inquire
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-3 min-w-[48px] min-h-[48px] flex items-center justify-center text-foreground shrink-0"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50 px-4 pb-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={hrefFor(l.href)}
              onClick={(e) => handleClick(e, l.href)}
              className="block w-full text-left py-3 text-sm font-body uppercase tracking-[0.15em] text-foreground/60 hover:text-secondary border-b border-border/30"
            >
              {l.label}
            </a>
          ))}
          <a
            href={hrefFor("#inquire")}
            onClick={(e) => handleClick(e, "#inquire")}
            className="block w-full text-center mt-4 py-3 text-sm font-body font-semibold uppercase tracking-[0.15em] bg-secondary text-secondary-foreground rounded-sm"
          >
            Inquire
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
