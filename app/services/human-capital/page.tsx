"use client";
import ServiceDetailHero from "@/components/sections/services/detail/ServiceDetailHero";
import ServiceOverview from "@/components/sections/services/detail/ServiceOverview";
import WhatIsIncluded from "@/components/sections/services/detail/WhatIsIncluded";
import HowWeWork from "@/components/sections/services/detail/HowWeWork";
import WhyQTerraService from "@/components/sections/services/detail/WhyQTerraService";
import RelatedServices from "@/components/sections/services/detail/RelatedServices";
import CTABanner from "@/components/sections/CTABanner";
import {
  Users,
  Target,
  TrendingUp,
  ClipboardList,
  Shield,
  UserCheck,
  BarChart2,
  GraduationCap,
  Laptop,
} from "lucide-react";

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
          "Sustainable organizational performance requires more than strategy and technology — it requires the right people, in the right roles, with the right capabilities. QTerra partners with organizations to design and implement human capital strategies that align workforce capability with strategic objectives.",
          "From strategic workforce planning to talent acquisition, leadership development, and performance management systems, we provide comprehensive human capital solutions that strengthen organizations from the inside out.",
        ]}
        imageSrc="/images/services/hr-management.jpg"
        imageAlt="Human capital and talent team"
      />
      <WhatIsIncluded
        eyebrow="WHAT'S INCLUDED"
        headline="Our Human Capital Services"
        subtext="Comprehensive human capital solutions that align people strategy with organizational objectives."
        services={[
          { icon: ClipboardList, title: "Strategic Workforce Planning", description: "Analyzing workforce needs, identifying capability gaps, and developing plans that ensure the right talent is available to execute strategy." },
          { icon: UserCheck, title: "Talent Acquisition", description: "Designing and managing recruitment processes that attract and secure high-quality talent aligned to organizational values and objectives." },
          { icon: TrendingUp, title: "Leadership Development", description: "Designing and delivering leadership development programs that build the capability of senior and mid-level leaders to drive organizational performance." },
          { icon: Target, title: "Performance Management Systems", description: "Building performance frameworks, KPI systems, and review processes that create clear accountability and drive individual and team performance." },
          { icon: Shield, title: "HR Operations Support", description: "Providing operational HR support including policy development, process design, and HR system implementation." },
          { icon: Users, title: "Organizational Design", description: "Reviewing and redesigning organizational structures, roles, and governance to improve clarity, accountability, and operational effectiveness." },
        ]}
      />
      <HowWeWork
        eyebrow="OUR PROCESS"
        headline="How We Deliver"
        subtext="A structured approach to human capital that aligns people strategy with organizational objectives."
        steps={[
          { number: "01", title: "Assess", description: "We conduct a structured assessment of your current workforce, capability gaps, and people management practices." },
          { number: "02", title: "Design", description: "We develop a tailored human capital strategy and implementation roadmap aligned to your organizational objectives." },
          { number: "03", title: "Implement", description: "We support the execution of talent, performance, and leadership initiatives with hands-on delivery expertise." },
          { number: "04", title: "Sustain", description: "We build internal HR capability and systems that sustain people performance long after our engagement concludes." },
        ]}
        imageSrc="/images/services/hr-process.jpg"
        imageAlt="Human capital process"
      />
      <WhyQTerraService
        eyebrow="WHY QTERRA"
        headline="Why Choose QTerra for Human Capital"
        points={[
          { icon: Target, title: "Strategy-Aligned People Solutions", description: "We design human capital strategies that are explicitly aligned to your organizational strategy — not generic HR programs." },
          { icon: Users, title: "End-to-End Capability", description: "From workforce planning to performance management, we provide comprehensive human capital support across the full employee lifecycle." },
          { icon: Shield, title: "Organizational Strengthening", description: "We build internal HR capability and systems that outlast our engagement — strengthening your organization for the long term." },
        ]}
      />
      <RelatedServices
        services={[
          { icon: BarChart2, number: "01", title: "Strategy & Transformation", description: "Strategic alignment to ensure your people strategy supports your transformation agenda.", href: "/services/strategy-transformation" },
          { icon: GraduationCap, number: "05", title: "Training & Capability Building", description: "Structured learning programs to build the skills your workforce needs.", href: "/services/training-capability" },
          { icon: Laptop, number: "03", title: "Digital Solutions & Analytics", description: "HR analytics and digital tools to strengthen workforce decision-making.", href: "/services/digital-solutions" },
        ]}
      />
      <CTABanner />
    </>
  );
}
