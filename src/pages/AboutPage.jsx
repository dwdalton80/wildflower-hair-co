import PageHeader from "@/components/wildflower/PageHeader";
import Footer from "@/components/wildflower/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-silk overflow-x-hidden">
      <PageHeader />
      <main className="py-20 md:py-28">
        <article className="max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-terra" />
            <span className="font-label text-[11px] tracking-[0.25em] uppercase text-terra font-semibold">
              About
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-umber leading-tight mb-8">
            About <span className="italic text-terra">Wildflower Hair Co.</span>
          </h1>
          <div className="font-body text-umber/75 text-lg leading-relaxed space-y-6">
            <p>
              Wildflower Hair Co. is the personal beauty studio of Kyia, a
              licensed cosmetologist and hair stylist based in Durant, Oklahoma.
              This website is her online portfolio and booking hub — a place
              where new and returning clients can explore her work, browse a
              full menu of hair services, and book an appointment directly
              through GlossGenius.
            </p>
            <p>
              Kyia built Wildflower Hair Co. for anyone who wants their hair
              cared for with intention: women and men seeking precision cuts,
              parents booking their children's first salon visit, and clients
              chasing dimensional color, balayage-style highlights, lowlights,
              root touch-ups, and full blonding transformations. From a simple
              wash and style to a complete color correction, every service is
              tailored to your hair's texture, tone, and lifestyle.
            </p>
            <p>
              What sets Kyia apart is her belief that the best transformations
              grow naturally — never forced. She specializes in blondes,
              brunettes, and dimensional color, and treats each appointment less
              like a transaction and more like a ritual. She operates inside Hair
              Designs by Charlotte at 203 N 7th Ave in Durant, OK, serving the
              local community and the surrounding Texoma region.
            </p>
            <p>
              Whether you are refreshing your current look or starting something
              entirely new, Wildflower Hair Co. exists to help you feel rooted
              in grace and blooming in beauty — your hair, but wilder.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}