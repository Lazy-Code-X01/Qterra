"use client";
import ServiceDetailHero from "@/components/sections/services/detail/ServiceDetailHero";
import ServiceOverview from "@/components/sections/services/detail/ServiceOverview";
import WhatIsIncluded from "@/components/sections/services/detail/WhatIsIncluded";
import HowWeWork from "@/components/sections/services/detail/HowWeWork";
import BackToServices from "@/components/sections/services/detail/BackToServices";
import CTABanner from "@/components/sections/CTABanner";
import { BarChart2, Layers, TrendingUp, RefreshCw } from "lucide-react";

export default function StrategyTransformationPage() {
  return (
    <>
      <ServiceDetailHero
        breadcrumb="Strategy & Transformation"
        eyebrow="STRATEGY & TRANSFORMATION"
        title="Strategy & Transformation"
        description="Enterprise strategy design, procurement frameworks, cost optimization, and business process improvement programs that move organizations from intent to measurable outcomes."
      />
      <ServiceOverview
        eyebrow="WHAT WE DO"
        headline="Turning Strategic Intent Into Operational Reality"
        paragraphs={[
          "Enterprise strategy design, procurement frameworks, cost optimization, and business process improvement are at the core of what QTerra delivers under this service area. We work with leadership teams to design strategies that are executable — not just aspirational.",
          "Whether you are designing an enterprise-wide transformation, restructuring procurement, optimizing costs, or improving business processes, QTerra combines rigorous analysis with a deep understanding of organizational realities to develop roadmaps that translate vision into clear priorities, actions, and measurable results.",
        ]}
        imageSrc="/images/services/management-consulting.jpg"
        imageAlt="Strategy and transformation team"
      />
      <WhatIsIncluded
        eyebrow="WHAT'S INCLUDED"
        headline="Our Strategy & Transformation Services"
        subtext="Integrated strategy and transformation services designed to improve organizational performance and deliver measurable outcomes."
        services={[
          { icon: BarChart2, title: "Enterprise Strategy & Transformation Design", description: "Developing clear, executable enterprise strategies and managing large-scale transformation programs that restructure operations, governance, and organizational capability." },
          { icon: Layers, title: "Procurement, Sourcing & Vendor Management", description: "Building procurement strategies, sourcing frameworks, and vendor management systems that reduce cost, manage risk, and improve supply chain value." },
          { icon: TrendingUp, title: "Cost Optimization & Operational Efficiency", description: "Identifying and implementing cost reduction opportunities and operational efficiency programs without compromising service quality or strategic capability." },
          { icon: RefreshCw, title: "Business Process Improvement & Performance Systems", description: "Mapping, redesigning, and optimizing core business processes and building performance management systems that align teams to measurable organizational objectives." },
        ]}
      />
      <HowWeWork
        eyebrow="OUR PROCESS"
        headline="How We Deliver"
        subtext="A structured, evidence-based approach that moves from diagnosis to strategy to sustained execution."
        steps={[
          { number: "01", title: "Define", description: "We assess your current state and co-develop a clear strategic roadmap with prioritized initiatives, defined outcomes, and measurable success metrics." },
          { number: "02", title: "Deliver", description: "We support implementation with structured program management, governance, and decision-support to keep strategic initiatives on track." },
          { number: "03", title: "Enable", description: "We deploy digital tools and AI-enabled decision support to strengthen leadership visibility and accelerate strategy execution." },
          { number: "04", title: "Embed", description: "We build the internal systems, capability, and discipline needed to sustain strategic performance beyond the engagement." },
        ]}
        imageSrc="/images/services/process-placeholder.jpg"
        imageAlt="Strategy execution team"
      />
      <BackToServices />
      <CTABanner minimal />
    </>
  );
}
