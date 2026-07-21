import Navbar from "@/components/wildflower/Navbar";
import Hero from "@/components/wildflower/Hero";
import Services from "@/components/wildflower/Services";
import Portfolio from "@/components/wildflower/Portfolio";
import About from "@/components/wildflower/About";
// import Testimonials from "@/components/wildflower/Testimonials";
import Contact from "@/components/wildflower/Contact";
import Footer from "@/components/wildflower/Footer";
import StickyBookBar from "@/components/wildflower/StickyBookBar";

const HERO_IMAGE =
  "https://media.base44.com/images/public/6a5255ae151d27a36fddeb7b/9c7f7b38f_f1c67202-fac4-4a38-bb25-fdbfa9aebcfa.jpg";
const ABOUT_IMAGE =
  "https://media.base44.com/images/public/6a5255ae151d27a36fddeb7b/3ee757879_7E1F3E9C-F62B-41C3-8824-7CE095C65277.png";

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