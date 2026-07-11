import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import BookNowButton from "./BookNowButton";
import { siteConfig } from "@/lib/siteConfig";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-silk/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <img
              src={siteConfig.logoUrl}
              alt="Wildflower Hair Co. By Kyia"
              className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover ring-1 ring-peony/40"
            />
            <span className="font-display text-xl md:text-2xl italic text-umber leading-none">
              Wildflower Hair Co.
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-label text-[11px] tracking-[0.15em] uppercase text-umber/70 hover:text-terra transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile menu button */}
          <div className="flex items-center gap-4">
            <BookNowButton className="hidden md:inline-flex" />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-umber p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-40 bg-silk/95 backdrop-blur-md md:hidden overflow-hidden"
          >
            <div className="pt-24 px-6 pb-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="font-display text-2xl italic text-umber text-left"
                >
                  {link.label}
                </button>
              ))}
              <BookNowButton className="mt-4 w-full">Book Now</BookNowButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}