import { MapPin, Phone, Facebook } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import BookNowButton from "./BookNowButton";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-40 bg-umber scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-label text-[11px] tracking-[0.3em] uppercase text-peony">
            Visit Us
          </span>
          <h2 className="font-display text-4xl md:text-6xl italic text-silk mt-4">
            Begin Your Transformation
          </h2>
          <p className="font-body text-silk/60 mt-6 max-w-xl mx-auto text-lg">
            Book your appointment with Kyia at {siteConfig.salonName} and let
            your hair tell its story.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Location */}
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-silk/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-peony" size={20} strokeWidth={1.5} />
            </div>
            <p className="font-display text-lg italic text-silk mb-1">
              {siteConfig.salonName}
            </p>
            <p className="font-body text-sm text-silk/50">
              {siteConfig.salonAddress}
            </p>
            <p className="font-body text-sm text-silk/50">
              {siteConfig.salonCity}
            </p>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-silk/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="text-peony" size={20} strokeWidth={1.5} />
            </div>
            <p className="font-body text-sm text-silk/50 mb-1">Call or text</p>
            <p className="font-display text-lg italic text-silk">
              {siteConfig.phone}
            </p>
          </div>

          {/* Facebook */}
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-silk/10 flex items-center justify-center mx-auto mb-4">
              <Facebook className="text-peony" size={20} strokeWidth={1.5} />
            </div>
            <p className="font-body text-sm text-silk/50 mb-1">Follow along</p>
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-lg italic text-silk hover:text-peony transition-colors cursor-pointer"
            >
              Wildflower on Facebook
            </a>
          </div>
        </div>

        <div className="text-center">
          <BookNowButton variant="light" className="px-10 py-5">
            Secure Your Transformation
          </BookNowButton>
          <p className="font-body text-xs text-silk/40 mt-4">
            Booking powered by Square
          </p>
        </div>
      </div>
    </section>
  );
}