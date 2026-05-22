"use client";
import ServiceDetailHero from "@/components/sections/services/detail/ServiceDetailHero";
import ServiceOverview from "@/components/sections/services/detail/ServiceOverview";
import WhatIsIncluded from "@/components/sections/services/detail/WhatIsIncluded";
import HowWeWork from "@/components/sections/services/detail/HowWeWork";
import WhyQTerraService from "@/components/sections/services/detail/WhyQTerraService";
import RelatedServices from "@/components/sections/services/detail/RelatedServices";
import CTABanner from "@/components/sections/CTABanner";
import {
  UserCheck,
  GraduationCap,
  FileText,
  BarChart2,
  Globe2,
  Target,
  Shield,
  Laptop,
} from "lucide-react";

export default function HRTalentManagementPage() {
  return (
    <>
      <ServiceDetailHero
        breadcrumb="HR & Talent Management"
        eyebrow="HUMAN CAPITAL"
        title="HR & Talent Management Services"
        description="Helping organizations build and manage effective workforces through strategic human capital advisory and operational HR support."
      />
      <ServiceOverview
        eyebrow="WHAT WE DO"
        headline="Building the Human Foundation for Organizational Success"
        paragraphs={[
          "QTerra provides human capital advisory and operational support services that help organizations attract, develop, and retain the talent they need to achieve their strategic goals.",
          "From talent acquisition and leadership development to payroll administration and performance management, we cover the full spectrum of HR, giving our clients a single, accountable partner for their human capital needs.",
        ]}
        imageSrc="/images/services/hr-management.jpg"
        imageAlt="HR team in a talent discussion"
      />
      <WhatIsIncluded
        eyebrow="WHAT'S INCLUDED"
        headline="Our HR & Talent Management Services"
        subtext="End-to-end human capital support covering acquisition, development, operations, and performance management."
        services={[
          { icon: UserCheck, title: "Talent Acquisition & Recruitment Support", description: "Designing and managing recruitment processes that attract the right candidates and reduce time-to-hire." },
          { icon: GraduationCap, title: "Employee Development & Leadership Programs", description: "Developing and delivering programs that build employee capability and prepare the next generation of organizational leaders." },
          { icon: FileText, title: "Payroll Administration & HR Operations", description: "Managing payroll, HR administration, and operational processes with accuracy, compliance, and efficiency." },
          { icon: BarChart2, title: "Performance Management Frameworks", description: "Designing and implementing performance management systems that align individual contribution to organizational goals." },
          { icon: Shield, title: "HR Policy & Compliance", description: "Reviewing, developing, and implementing HR policies that ensure regulatory compliance and protect the organization." },
          { icon: Target, title: "Workforce Planning & Organizational Design", description: "Developing workforce plans and organizational structures aligned to your strategic direction and growth objectives." },
        ]}
      />
      <HowWeWork
        eyebrow="OUR PROCESS"
        headline="How We Deliver"
        subtext="A structured approach to building and managing human capital that drives organizational performance."
        steps={[
          { number: "01", title: "Assess", description: "We evaluate your current HR capability, workforce composition, and talent gaps against your strategic objectives." },
          { number: "02", title: "Design", description: "We design tailored HR frameworks, programs, and processes aligned to your organizational culture and goals." },
          { number: "03", title: "Implement", description: "We deploy and manage HR programs and processes, working alongside your team to embed new ways of working." },
          { number: "04", title: "Sustain", description: "We build internal capability and establish systems that sustain HR performance long after our engagement ends." },
        ]}
        imageSrc="/images/services/hr-process.jpg"
        imageAlt="HR and talent management session"
      />
      <WhyQTerraService
        eyebrow="WHY QTERRA"
        headline="Why Choose QTerra for HR & Talent Management"
        points={[
          { icon: Globe2, title: "African Market Knowledge", description: "We understand the talent landscape, labour regulations, and workforce dynamics across African markets." },
          { icon: Target, title: "Strategic & Operational", description: "We operate at both the strategic and operational level, from workforce strategy to day-to-day HR administration." },
          { icon: Shield, title: "Compliant & Reliable", description: "We ensure your HR operations are fully compliant with local regulations and consistently delivered to a high standard." },
        ]}
      />
      <RelatedServices
        services={[
          { icon: BarChart2, number: "01", title: "Management Consulting", description: "Organizational strategy and transformation programs.", href: "/services/management-consulting" },
          { icon: GraduationCap, number: "06", title: "Training & Capability", description: "Professional development and capacity building programs.", href: "/services/training-capability" },
          { icon: Laptop, number: "04", title: "Digital Solutions", description: "HR technology and performance monitoring systems.", href: "/services/digital-solutions" },
        ]}
      />
      <CTABanner />
    </>
  );
}
