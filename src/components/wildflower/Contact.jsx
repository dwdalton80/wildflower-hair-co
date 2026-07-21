import { MapPin, Phone, Facebook, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import BookNowButton from "./BookNowButton";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-umber scroll-mt-20 overflow-hidden relative"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4 justify-center">
            <span className="w-10 h-px bg-terra/60" />
            <span className="font-label text-[11px] tracking-[0.25em] uppercase text-terra font-semibold">
              Book Now
            </span>
            <span className="w-10 h-px bg-terra/60" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-silk leading-tight">
            Your hair,
            <br />
            <span className="italic text-terra">but wilder.</span>
          </h2>
          <p className="font-body text-silk/80 mt-6 max-w-xl mx-auto text-lg">
            Book your appointment with Kyia and let your hair bloom.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Location */}
          <div className="text-center">
            <div className="w-14 h-14 rounded-2xl bg-terra/15 flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-terra" size={22} strokeWidth={1.5} />
            </div>
            <p className="font-display text-xl italic text-silk mb-1">
              {siteConfig.salonName}
            </p>
            <p className="font-body text-sm text-silk/70">
              {siteConfig.salonAddress}
            </p>
            <p className="font-body text-sm text-silk/70">
              {siteConfig.salonCity}
            </p>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="w-14 h-14 rounded-2xl bg-terra/15 flex items-center justify-center mx-auto mb-4">
              <Phone className="text-terra" size={22} strokeWidth={1.5} />
            </div>
            <p className="font-body text-sm text-silk/70 mb-1">Call or text</p>
            <div className="space-y-1">
              <div className="font-body text-sm text-silk/70">
                <span className="text-silk/50">Mobile: </span>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                  className="text-silk hover:text-silk/80 transition-colors cursor-pointer"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div className="font-body text-sm text-silk/70">
                <span className="text-silk/50">Salon: </span>
                <a
                  href={`tel:${siteConfig.salonPhone.replace(/[^0-9]/g, "")}`}
                  className="text-silk hover:text-silk/80 transition-colors cursor-pointer"
                >
                  {siteConfig.salonPhone}
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mx-auto mb-4">
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-terra/15 flex items-center justify-center hover:bg-terra transition-all"
              >
                <Facebook className="text-terra" size={22} strokeWidth={1.5} />
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-terra/15 flex items-center justify-center hover:bg-terra transition-all"
              >
                <Instagram className="text-terra" size={22} strokeWidth={1.5} />
              </a>
            </div>
            <p className="font-body text-sm text-silk/70 mb-1">Follow along</p>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xl italic text-silk hover:text-silk/80 transition-colors cursor-pointer"
            >
              @wildflower.hair.co
            </a>
          </div>
        </div>

        <div className="text-center">
          <BookNowButton variant="light" className="px-10 py-5">
            Book Your Spot
          </BookNowButton>
          <p className="font-body text-xs text-silk/60 mt-4">
            Booking powered by GlossGenius
          </p>
        </div>

        {/* Booking Policy */}
        <div className="max-w-2xl mx-auto mt-14 bg-silk/5 border border-silk/10 rounded-2xl p-6 md:p-8 text-left">
          <h3 className="font-label text-[11px] tracking-[0.25em] uppercase text-terra font-semibold mb-4 text-center">
            Booking Policy
          </h3>
          <p className="font-body text-sm text-silk/70 mb-6 text-center">
            To ensure every client receives the time and attention they deserve, please review the following appointment policies:
          </p>
          <div className="space-y-6 font-body text-sm text-silk/70">
            <div>
              <p className="font-display text-lg italic text-silk mb-2">Running Late?</p>
              <p>
                Please text or call, the grace period is <span className="text-silk font-medium">15 minutes</span> before your appointment is forfeited.
              </p>
            </div>
            <div>
              <p className="font-display text-lg italic text-silk mb-2">New Client Booking Policy</p>
              <p>
                All new clients are required to have a <span className="text-silk font-medium">valid credit or debit card on file</span> when booking an appointment. Your appointment will not be confirmed until a card has been provided.
              </p>
            </div>
            <div>
              <p className="font-display text-lg italic text-silk mb-2">No-Shows &amp; Late Cancellations</p>
              <p>
                If you fail to show up for your appointment or cancel without providing the required notice, a <span className="text-silk font-medium">25% service fee</span> will be charged to the card on file. This fee helps cover the reserved appointment time that could have been made available to another client.
              </p>
            </div>
          </div>
          <p className="font-body text-sm text-silk/60 mt-6 text-center italic">
            Thank you for respecting my time and supporting my small business. I appreciate your understanding and look forward to seeing you!
          </p>
          <p className="font-body text-xs text-silk/50 mt-4 text-center italic">
            By booking, you agree to these policies.
          </p>
        </div>
      </div>
    </section>
  );
}