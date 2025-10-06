import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/Services";
import TestimonialsShowcase from "./components/Testimonial";
import LogoMarquee, { Marquee } from "./components/LogoMarquee";
import Statics from "./components/Statics";
import BlogGroup from "./components/BlogGroup";
import { AnimatedSection } from "./components/FullServices";
import FAQs from "./components/FAQSection";

export default function Home() {
  return <main className="bg-white">
    <HeroSection />

    <section className="md:px-4 my-4">

    <div id="services">
    <ServicesSection />
    </div>
    <TestimonialsShowcase />
    <Marquee />
    </section>
    <BlogGroup />
  </main>;
}
