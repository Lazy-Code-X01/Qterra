"use client";
import ServiceDetailHero from "@/components/sections/services/detail/ServiceDetailHero";
import ServiceOverview from "@/components/sections/services/detail/ServiceOverview";
import WhatIsIncluded from "@/components/sections/services/detail/WhatIsIncluded";
import HowWeWork from "@/components/sections/services/detail/HowWeWork";
import WhyQTerraService from "@/components/sections/services/detail/WhyQTerraService";
import RelatedServices from "@/components/sections/services/detail/RelatedServices";
import CTABanner from "@/components/sections/CTABanner";
import {
  BarChart2,
  Target,
  RefreshCw,
  TrendingUp,
  ClipboardList,
  Layers,
  Users,
  Laptop,
} from "lucide-react";

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
          "QTerra works with leadership teams to design strategies that are executable — not just aspirational. We combine rigorous analysis with a deep understanding of organizational realities to develop roadmaps that translate vision into clear priorities, actions, and measurable results.",
          "Whether you are designing an enterprise-wide transformation, restructuring procurement, optimizing costs, or improving business processes, QTerra provides the strategic clarity and execution discipline needed to achieve sustained impact.",
        ]}
        imageSrc="/images/services/management-consulting.jpg"
        imageAlt="Strategy and transformation team"
      />
      <WhatIsIncluded
        eyebrow="WHAT'S INCLUDED"
        headline="Our Strategy & Transformation Services"
        subtext="Integrated strategy and transformation services designed to improve organizational performance and deliver measurable outcomes."
        services={[
          { icon: BarChart2, title: "Enterprise Strategy Design", description: "Developing clear, executable strategies aligned to organizational priorities, market realities, and long-term performance goals." },
          { icon: RefreshCw, title: "Business Transformation Programs", description: "Designing and managing large-scale transformation initiatives that restructure operations, culture, and capability." },
          { icon: Layers, title: "Procurement & Sourcing Frameworks", description: "Building procurement strategies, vendor management frameworks, and sourcing models that reduce cost and improve value." },
          { icon: TrendingUp, title: "Cost Optimization Programs", description: "Identifying and implementing cost reduction opportunities without compromising service quality or organizational capability." },
          { icon: Target, title: "Business Process Improvement", description: "Mapping, redesigning, and optimizing core business processes to improve efficiency, reduce waste, and strengthen performance." },
          { icon: ClipboardList, title: "Performance Management Systems", description: "Designing balanced scorecard frameworks and performance systems that align individual, team, and organizational objectives." },
        ]}
      />
      <HowWeWork
        eyebrow="OUR PROCESS"
        headline="How We Deliver"
        subtext="A structured, evidence-based approach that moves from diagnosis to strategy to sustained execution."
        steps={[
          { number: "01", title: "Diagnose", description: "We assess your current state — strategy, operations, processes, and performance — to identify root causes and strategic opportunities." },
          { number: "02", title: "Design", description: "We co-develop a clear strategic roadmap with prioritized initiatives, defined outcomes, and an executable implementation plan." },
          { number: "03", title: "Execute", description: "We support implementation with structured program management, governance, and decision-support to keep initiatives on track." },
          { number: "04", title: "Embed", description: "We build the internal systems, capability, and discipline needed to sustain strategic performance beyond the engagement." },
        ]}
        imageSrc="/images/services/process-placeholder.jpg"
        imageAlt="Strategy execution team"
      />
      <WhyQTerraService
        eyebrow="WHY QTERRA"
        headline="Why Choose QTerra for Strategy & Transformation"
        points={[
          { icon: Target, title: "Execution-Focused Strategy", description: "We don't stop at recommendations. Every strategy we design is built with execution in mind — clear priorities, defined owners, and measurable milestones." },
          { icon: Layers, title: "Integrated Delivery", description: "We combine strategy, project delivery, digital enablement, and capability building to ensure transformation is comprehensive and sustained." },
          { icon: Users, title: "Sector Experience", description: "Our teams bring deep experience across public sector, private enterprises, and development organizations across Africa." },
        ]}
      />
      <RelatedServices
        services={[
          { icon: ClipboardList, number: "02", title: "Project Delivery & Implementation", description: "Disciplined execution support to implement your strategic priorities.", href: "/services/project-delivery" },
          { icon: Laptop, number: "03", title: "Digital Solutions & Analytics", description: "Digital tools and AI-enabled support to accelerate strategy execution.", href: "/services/digital-solutions" },
          { icon: Users, number: "04", title: "Human Capital & Talent Management", description: "Building the workforce capability to sustain strategic transformation.", href: "/services/human-capital" },
        ]}
      />
      <CTABanner />
    </>
  );
}
