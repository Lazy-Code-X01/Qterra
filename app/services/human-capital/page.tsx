"use client";
import ServiceDetailHero from "@/components/sections/services/detail/ServiceDetailHero";
import ServiceOverview from "@/components/sections/services/detail/ServiceOverview";
import WhatIsIncluded from "@/components/sections/services/detail/WhatIsIncluded";
import HowWeWork from "@/components/sections/services/detail/HowWeWork";
import BackToServices from "@/components/sections/services/detail/BackToServices";
import CTABanner from "@/components/sections/CTABanner";
import { Users, TrendingUp, ClipboardList } from "lucide-react";

export default function HumanCapitalPage() {
  return (
    <>
      <ServiceDetailHero
        breadcrumb="Human Capital & Talent Management"
        eyebrow="HUMAN CAPITAL"
        title="Human Capital & Talent Management"
        description="Strategic workforce planning, talent acquisition, leadership development, performance management, and HR operations support to build high-performing organizations."
      />
      <ServiceOverview
        eyebrow="WHAT WE DO"
        headline="Building the Human Capability Behind Organizational Performance"
        paragraphs={[
          "Strategic workforce planning, talent acquisition, leadership development, performance management, and HR operations support are what QTerra delivers under this service area. Sustainable organizational performance requires the right people, in the right roles, with the right capabilities.",
          "QTerra partners with organizations to design and implement human capital strategies that align workforce capability with strategic objectives — strengthening organizations from the inside out.",
        ]}
        imageSrc="/images/services/hr-management.jpg"
        imageAlt="Human capital and talent team"
      />
      <WhatIsIncluded
        eyebrow="WHAT'S INCLUDED"
        headline="Our Human Capital Services"
        subtext="Comprehensive human capital solutions that align people strategy with organizational objectives."
        services={[
          { icon: ClipboardList, title: "Strategic Workforce Planning & Talent Acquisition", description: "Analyzing workforce needs, identifying capability gaps, and designing talent acquisition strategies that ensure the right people are in the right roles to execute organizational strategy." },
          { icon: TrendingUp, title: "Leadership Development & Capability Building", description: "Designing and delivering leadership development programs and capability-building initiatives that prepare current and future leaders to drive organizational performance." },
          { icon: Users, title: "Performance Management Systems & HR Operations Support", description: "Building performance frameworks, KPI systems, and review processes that create accountability — alongside operational HR support including policy development and HR system implementation." },
        ]}
      />
      <HowWeWork
        eyebrow="OUR PROCESS"
        headline="How We Deliver"
        subtext="A structured approach to human capital that aligns people strategy with organizational objectives."
        steps={[
          { number: "01", title: "Define", description: "We assess your workforce, identify capability gaps, and define the people priorities and success metrics aligned to your strategy." },
          { number: "02", title: "Deliver", description: "We execute talent acquisition, leadership development, and performance management initiatives with hands-on delivery expertise." },
          { number: "03", title: "Enable", description: "We deploy HR analytics tools and digital systems that give leadership data-driven visibility into workforce performance." },
          { number: "04", title: "Embed", description: "We build internal HR capability and systems that sustain people performance long after our engagement concludes." },
        ]}
        imageSrc="/images/services/hr-process.jpg"
        imageAlt="Human capital process"
      />
      <BackToServices />
      <CTABanner minimal />
    </>
  );
}
