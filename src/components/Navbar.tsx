import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

// The nav had grown to ten flat items because it was doing two different jobs
// at once: scrolling the homepage AND navigating the site. At 820px the logo
// and half the labels wrapped onto second lines.
//
// Split by job. Section links only make sense on the homepage — everywhere else
// they just throw you back to it — so off the homepage they drop away and the
// bar reduces to real pages. Inquire is a button, not a seventh grey label.

// In-page anchors. Homepage only.
const sectionLinks = [
  { label: "Experience", href: "#experience" },
  { label: "The Lake", href: "#lake" },
  { label: "Details", href: "#details" },
  { label: "FAQ", href: "#faq" },
];

// Real pages. Shown everywhere.
const pageLinks = [
  { label: "Big Long Lake", href: "/big-long-lake" },
  { label: "Indiana Lakes", href: "/northern-indiana-lakes" },
  { label: "Our Family", href: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // The #section targets all live on the homepage. On /about and
  // /big-long-lake they don't exist, so a bare "#inquire" href pointed at
  // nothing and the click handler swallowed the event — the link was simply
  // dead. Off the homepage we emit "/#inquire" instead and let the browser
  // navigate. useLocation (not window) so this is correct during prerender too.
  const isHome = useLocation().pathname === "/";

  const links = isHome ? [...sectionLinks, ...pageLinks] : pageLinks;

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

        {/* Desktop — lg, not md: at 768–1023px seven labels plus a button
            wrapped, so the hamburger covers that range instead. */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
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
          className="lg:hidden p-3 min-w-[48px] min-h-[48px] flex items-center justify-center text-foreground shrink-0"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border/50 px-4 pb-5">
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
