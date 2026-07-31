import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import PageHeader from "@/components/wildflower/PageHeader";
import Footer from "@/components/wildflower/Footer";
import BookNowButton from "@/components/wildflower/BookNowButton";
import { siteConfig } from "@/lib/siteConfig";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-silk overflow-x-hidden">
      <PageHeader />
      <main className="py-20 md:py-28">
        <section className="max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-terra" />
            <span className="font-label text-[11px] tracking-[0.25em] uppercase text-terra font-semibold">
              Contact
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-umber leading-tight mb-6">
            Contact{" "}
            <span className="italic text-terra">Wildflower Hair Co.</span>
          </h1>
          <p className="font-body text-umber/70 text-lg leading-relaxed mb-10 max-w-xl">
            Ready to book your appointment with Kyia? Reach out using any of the
            methods below, or book instantly online through GlossGenius.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {/* Address */}
            <div className="bg-white rounded-2xl border border-peony/40 p-6">
              <div className="w-12 h-12 rounded-xl bg-terra/15 flex items-center justify-center mb-4">
                <MapPin className="text-terra" size={20} strokeWidth={1.5} />
              </div>
              <p className="font-display text-xl italic text-umber mb-1">
                {siteConfig.salonName}
              </p>
              <p className="font-body text-sm text-umber/70">
                {siteConfig.salonAddress}
              </p>
              <p className="font-body text-sm text-umber/70">
                {siteConfig.salonCity}
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl border border-peony/40 p-6">
              <div className="w-12 h-12 rounded-xl bg-terra/15 flex items-center justify-center mb-4">
                <Phone className="text-terra" size={20} strokeWidth={1.5} />
              </div>
              <p className="font-body text-sm text-umber/60 mb-2">Call or text</p>
              <p className="font-body text-sm text-umber/80">
                Mobile:{" "}
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                  className="text-terra hover:underline"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p className="font-body text-sm text-umber/80">
                Salon:{" "}
                <a
                  href={`tel:${siteConfig.salonPhone.replace(/[^0-9]/g, "")}`}
                  className="text-terra hover:underline"
                >
                  {siteConfig.salonPhone}
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl border border-peony/40 p-6">
              <div className="w-12 h-12 rounded-xl bg-terra/15 flex items-center justify-center mb-4">
                <Mail className="text-terra" size={20} strokeWidth={1.5} />
              </div>
              <p className="font-body text-sm text-umber/60 mb-1">Email</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-body text-sm text-terra hover:underline break-all"
              >
                {siteConfig.email}
              </a>
            </div>

            {/* Social */}
            <div className="bg-white rounded-2xl border border-peony/40 p-6">
              <div className="flex items-center gap-3 mb-4">
                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-terra/15 flex items-center justify-center hover:bg-terra transition-all"
                >
                  <Facebook className="text-terra" size={20} strokeWidth={1.5} />
                </a>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-terra/15 flex items-center justify-center hover:bg-terra transition-all"
                >
                  <Instagram className="text-terra" size={20} strokeWidth={1.5} />
                </a>
              </div>
              <p className="font-body text-sm text-umber/60 mb-1">Follow along</p>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-lg italic text-terra hover:underline"
              >
                @_wildflower.hair.co
              </a>
            </div>
          </div>

          <div className="bg-umber rounded-2xl p-8 text-center">
            <p className="font-display text-2xl italic text-silk mb-4">
              Prefer to book online?
            </p>
            <BookNowButton variant="light">Book Your Appointment</BookNowButton>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}