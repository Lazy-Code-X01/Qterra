"use client";
import ServiceDetailHero from "@/components/sections/services/detail/ServiceDetailHero";
import ServiceOverview from "@/components/sections/services/detail/ServiceOverview";
import WhatIsIncluded from "@/components/sections/services/detail/WhatIsIncluded";
import HowWeWork from "@/components/sections/services/detail/HowWeWork";
import WhyQTerraService from "@/components/sections/services/detail/WhyQTerraService";
import RelatedServices from "@/components/sections/services/detail/RelatedServices";
import CTABanner from "@/components/sections/CTABanner";
import {
  Target,
  ShoppingCart,
  Users,
  TrendingDown,
  BarChart2,
  FileSearch,
  UserCheck,
  Globe2,
  Shield,
  TrendingUp,
  ClipboardList,
} from "lucide-react";

export default function ManagementConsultingPage() {
  return (
    <>
      <ServiceDetailHero
        breadcrumb="Management Consulting"
        eyebrow="STRATEGIC ADVISORY"
        title="Management Consulting & Business Advisory"
        description="Helping organizations strengthen governance, improve operational performance, and implement effective transformation initiatives."
      />
      <ServiceOverview
        eyebrow="WHAT WE DO"
        headline="Strategic Advisory Built for Complex Organizations"
        paragraphs={[
          "QTerra provides strategic advisory and management consulting services that help organizations strengthen governance, improve operational performance, and implement effective transformation initiatives.",
          "We work across the public and private sectors, partnering with leadership teams to develop strategies that are grounded in evidence, shaped by context, and built to be executed, not just presented."
        ]}
        imageSrc="/images/services/management-consulting.jpg"
        imageAlt="Management consulting team in session"
      />
      <WhatIsIncluded
        eyebrow="WHAT'S INCLUDED"
        headline="Our Management Consulting Services"
        subtext="A comprehensive suite of advisory services designed to strengthen governance and drive operational excellence."
        services={[
          { icon: Target, title: "Strategy Development & Organizational Transformation", description: "Developing clear, actionable strategies that align leadership, resources, and operations toward defined organizational goals." },
          { icon: ShoppingCart, title: "Procurement & Sourcing Strategy Advisory", description: "Designing procurement frameworks and sourcing strategies that optimize spend, manage risk, and strengthen supplier relationships." },
          { icon: Users, title: "Vendor & Supplier Management Frameworks", description: "Building robust vendor management systems that ensure performance, accountability, and value across the supply chain." },
          { icon: TrendingDown, title: "Cost Optimization & Operational Efficiency", description: "Identifying and implementing cost reduction opportunities without compromising service quality or strategic capability." },
          { icon: BarChart2, title: "Business Process Improvement", description: "Mapping, redesigning, and optimizing core business processes to improve speed, quality, and performance outcomes." },
          { icon: FileSearch, title: "Policy & Governance Advisory", description: "Reviewing and strengthening organizational policies, governance structures, and compliance frameworks to reduce risk and improve accountability." },
        ]}
      />
      <HowWeWork
        eyebrow="OUR PROCESS"
        headline="How We Deliver"
        subtext="A structured, four-phase approach that ensures every engagement delivers measurable results."
        steps={[
          { number: "01", title: "Assess", description: "We conduct a thorough diagnostic of your organization's current state, identifying gaps, opportunities, and priorities." },
          { number: "02", title: "Design", description: "We develop a tailored strategy or solution built around your specific context, goals, and constraints." },
          { number: "03", title: "Implement", description: "We work alongside your team to execute the plan, managing complexity, tracking progress, and adapting as needed." },
          { number: "04", title: "Monitor", description: "We establish performance frameworks to track outcomes and ensure the results are sustained beyond the engagement." },
        ]}
        imageSrc="/images/services/process-placeholder.jpg"
        imageAlt="QTerra team working through strategy"
      />
      <WhyQTerraService
        eyebrow="WHY QTERRA"
        headline="Why Choose QTerra for Management Consulting"
        points={[
          { icon: UserCheck, title: "Senior-Led Engagements", description: "Every management consulting engagement is led by a senior practitioner with direct sector experience, not delegated to junior staff." },
          { icon: Globe2, title: "Pan-African Context", description: "We understand the regulatory, political, and operational realities of doing business across Africa and we design our solutions accordingly." },
          { icon: Shield, title: "Accountable to Outcomes", description: "We don't measure success by deliverables submitted. We measure it by the results our clients achieve." },
        ]}
      />
      <RelatedServices
        services={[
          { icon: TrendingUp, number: "02", title: "Financial Advisory", description: "Capital mobilization, investment structuring, and funding optimization.", href: "/services/financial-advisory" },
          { icon: ClipboardList, number: "03", title: "Project Management", description: "End-to-end program delivery, governance, and implementation support.", href: "/services/project-management" },
          { icon: Users, number: "05", title: "HR & Talent Management", description: "Talent acquisition, workforce strategy, and performance management.", href: "/services/hr-talent-management" },
        ]}
      />
      <CTABanner />
    </>
  );
}
