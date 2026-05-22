import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import ServicesTiers from "@/components/sections/services/ServicesTiers";
import CaseStudies from "@/components/sections/services/CaseStudies";
import CTABanner from "@/components/sections/CTABanner";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesTiers />
      <CaseStudies />
      <CTABanner />
    </>
  );
}
