import { Facebook } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-umber py-12 border-t border-silk/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-baseline gap-1.5 justify-center md:justify-start">
              <span className="font-display text-xl italic text-silk">
                Wildflower
              </span>
              <span className="font-label text-[9px] tracking-[0.2em] uppercase text-peony">
                Hair Co.
              </span>
            </div>
            <p className="font-body text-xs text-silk/40 mt-2">
              The Art of Growth
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-label text-[10px] tracking-[0.15em] uppercase text-silk/50 hover:text-peony transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <a
            href={siteConfig.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-silk/20 flex items-center justify-center text-silk/60 hover:text-peony hover:border-peony/40 transition-colors"
          >
            <Facebook size={16} />
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-silk/5 text-center">
          <p className="font-body text-xs text-silk/30">
            © {new Date().getFullYear()} Wildflower Hair Co. — Kyia. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}