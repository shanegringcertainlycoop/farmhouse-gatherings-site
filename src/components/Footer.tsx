import { CONTACT_EMAIL, trackContactClick } from "@/lib/analytics";

// The nav is deliberately down to three links and a button, so the footer does
// the navigating: both guides and Our Family live here, sitewide. That keeps
// them one click away and gives every page internal links to them for crawling.
const footerLinks = [
  { label: "Big Long Lake Guide", href: "/big-long-lake" },
  { label: "Northern Indiana Lakes", href: "/northern-indiana-lakes" },
  { label: "Our Family", href: "/about" },
];

const Footer = () => (
  <footer className="py-16 px-6 border-t border-border/30 text-center">
    <p className="font-display text-lg italic text-foreground/70 mb-2">
      The Farmhouse at Big Long Lake
    </p>
    <p className="font-body text-xs uppercase tracking-[0.2em] text-foreground/30 mb-8">
      Wolcottville, Indiana
    </p>

    <nav
      aria-label="Footer"
      className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-8"
    >
      {footerLinks.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="font-body text-xs uppercase tracking-[0.15em] text-foreground/40 hover:text-secondary transition-colors"
        >
          {l.label}
        </a>
      ))}
    </nav>

    <a
      href={`mailto:${CONTACT_EMAIL}`}
      onClick={() => trackContactClick("email", "footer")}
      className="font-body text-sm text-foreground/50 hover:text-secondary transition-colors"
    >
      {CONTACT_EMAIL}
    </a>
  </footer>
);

export default Footer;
