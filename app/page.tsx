import Hero from "@/components/sections/Hero";
import LogosStrip from "@/components/sections/LogosStrip";
import DeliveryModel from "@/components/sections/DeliveryModel";
import ServicesCTA from "@/components/sections/ServicesCTA";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ClientImpact from "@/components/sections/ClientImpact";
import StatsBand from "@/components/sections/StatsBand";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <LogosStrip />
      <DeliveryModel />
      <ServicesCTA />
      <ServicesSection />
      <AboutSection />
      <ClientImpact />
      <StatsBand />
      <Testimonials />
      <CTABanner />
    </>
  );
}
