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
    <footer className="bg-umber py-14 border-t border-silk/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <img
                src={siteConfig.logoUrl}
                alt="Wildflower Hair Co. By Kyia"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-terra/40"
              />
              <div className="flex flex-col">
                <span className="font-display text-xl italic text-silk leading-none">
                  Wildflower Hair Co.
                </span>
                <span className="font-label text-[9px] tracking-[0.2em] uppercase text-terra mt-1">
                  By Kyia
                </span>
              </div>
            </div>
            <p className="font-body text-sm text-silk/50 mt-3">
              The Art of Growth
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-label text-[11px] tracking-[0.15em] uppercase text-silk/60 hover:text-terra transition-colors cursor-pointer font-semibold"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <a
            href={siteConfig.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-silk/20 flex items-center justify-center text-silk/60 hover:text-silk hover:bg-terra hover:border-terra transition-all"
          >
            <Facebook size={18} />
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-silk/10 text-center">
          <p className="font-body text-xs text-silk/40">
            © {new Date().getFullYear()} Wildflower Hair Co. By Kyia. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}