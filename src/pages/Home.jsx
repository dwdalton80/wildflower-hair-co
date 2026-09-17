import Navbar from "@/components/wildflower/Navbar";
import Hero from "@/components/wildflower/Hero";
import Services from "@/components/wildflower/Services";
import Portfolio from "@/components/wildflower/Portfolio";
import About from "@/components/wildflower/About";
// import Testimonials from "@/components/wildflower/Testimonials";
import Contact from "@/components/wildflower/Contact";
import Footer from "@/components/wildflower/Footer";
import StickyBookBar from "@/components/wildflower/StickyBookBar";

const HERO_IMAGE = "/images/hero.jpg";
const ABOUT_IMAGE = "/images/about.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-silk overflow-x-hidden pb-16 md:pb-0">
      <Navbar />
      <Hero heroImage={HERO_IMAGE} />
      <Services />
      <Portfolio />
      <About aboutImage={ABOUT_IMAGE} />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <StickyBookBar />
    </div>
  );
}