import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

// Deliberately three items and one button — the nav had grown to ten flat items
// and was wrapping onto two lines by 820px.
//
// This is a single-property rental: the homepage is a scroller, so the nav's
// real job is "what's the lake like", "what does the house have", and "let me
// book". Our Family and the contact address still live only in the footer.
//
// "Guides" is the one exception to the flat list. It was a bare link to
// /big-long-lake, which quietly hid the other two guides from anyone not
// scrolling to the footer — so it is now a dropdown over all three. That keeps
// the bar at three items while making the whole set reachable in one hover.
//
// The same set renders on every page, so there is no context switching. Hash
// links resolve to /#section off the homepage; see hrefFor below.
const GUIDES = [
  { label: "Big Long Lake", href: "/big-long-lake" },
  { label: "Northern Indiana Lakes", href: "/northern-indiana-lakes" },
  { label: "Ice Cream", href: "/northern-indiana-ice-cream" },
];

const links = [
  { label: "The Lake", href: "#lake" },
  { label: "Details", href: "#details" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const guidesRef = useRef<HTMLDivElement>(null);

  // The #section targets all live on the homepage. On /about and
  // /big-long-lake they don't exist, so a bare "#inquire" href pointed at
  // nothing and the click handler swallowed the event — the link was simply
  // dead. Off the homepage we emit "/#inquire" instead and let the browser
  // navigate. useLocation (not window) so this is correct during prerender too.
  const location = useLocation();
  const isHome = location.pathname === "/";
  const onGuide = GUIDES.some((g) => g.href === location.pathname);

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

  // Close the dropdown on outside click and on Escape. Both listeners are set
  // up in an effect, so neither runs during prerender.
  useEffect(() => {
    if (!guidesOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!guidesRef.current?.contains(e.target as Node)) setGuidesOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setGuidesOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [guidesOpen]);

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

        {/* Three items and a button fit comfortably from ~700px, so md is safe
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

          {/* Guides dropdown. Opens on hover for mice and on click/keyboard for
              everyone else. The panel is always in the DOM and hidden with
              `invisible` rather than unmounted: visibility:hidden drops it from
              the tab order and the a11y tree, but the three links still ship in
              the prerendered HTML for crawlers. */}
          <div
            ref={guidesRef}
            className="relative"
            onMouseEnter={() => setGuidesOpen(true)}
            onMouseLeave={() => setGuidesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setGuidesOpen((v) => !v)}
              aria-expanded={guidesOpen}
              aria-haspopup="true"
              className={`${linkClass} flex items-center gap-1.5 ${
                onGuide ? "text-secondary" : ""
              }`}
            >
              Guides
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${
                  guidesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute top-full right-0 pt-3 transition-opacity duration-150 ${
                guidesOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <ul className="min-w-[15rem] bg-background/95 backdrop-blur-md border border-border/50 rounded-sm shadow-lg py-2">
                {GUIDES.map((g) => (
                  <li key={g.href}>
                    <a
                      href={g.href}
                      onClick={() => setGuidesOpen(false)}
                      className={`block px-4 py-2.5 font-body text-sm transition-colors hover:bg-secondary/10 hover:text-secondary ${
                        location.pathname === g.href
                          ? "text-secondary"
                          : "text-foreground/60"
                      }`}
                    >
                      {g.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

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

      {/* Mobile menu. The guides are listed inline rather than behind an
          accordion — there are only three, and a second tap to reach them is
          the friction this change set out to remove. */}
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

          <p className="pt-4 pb-1 text-[10px] font-body uppercase tracking-[0.2em] text-foreground/30">
            Guides
          </p>
          {GUIDES.map((g) => (
            <a
              key={g.href}
              href={g.href}
              onClick={() => setOpen(false)}
              className={`block w-full text-left py-3 pl-3 text-sm font-body border-b border-border/30 hover:text-secondary ${
                location.pathname === g.href
                  ? "text-secondary"
                  : "text-foreground/60"
              }`}
            >
              {g.label}
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
