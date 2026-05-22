import Hero from "@/components/sections/Hero";
import LogosStrip from "@/components/sections/LogosStrip";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyQTerra from "@/components/sections/WhyQTerra";
import StatsBand from "@/components/sections/StatsBand";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <LogosStrip />
      <ServicesSection />
      <AboutSection />
      <WhyQTerra />
      <StatsBand />
      <Testimonials />
      <CTABanner />
    </>
  );
}
