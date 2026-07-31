import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/siteConfig";
import BookNowButton from "./BookNowButton";

const pageLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function PageHeader() {
  return (
    <header className="sticky top-0 z-50 bg-silk/90 backdrop-blur-xl border-b border-peony/40 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={siteConfig.logoUrl}
            alt="Wildflower Hair Co. By Kyia"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-terra/30"
          />
          <div className="flex flex-col items-start">
            <span className="font-script text-2xl text-umber leading-none">
              Wildflower Hair Co.
            </span>
            <span className="font-label text-[8px] tracking-[0.2em] uppercase text-terra mt-0.5">
              By Kyia
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {pageLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-label text-[11px] tracking-[0.15em] uppercase text-umber/70 hover:text-terra transition-colors duration-300 font-semibold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <BookNowButton className="hidden md:inline-flex" />
      </div>
    </header>
  );
}