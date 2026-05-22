"use client";
import ServiceDetailHero from "@/components/sections/services/detail/ServiceDetailHero";
import ServiceOverview from "@/components/sections/services/detail/ServiceOverview";
import WhatIsIncluded from "@/components/sections/services/detail/WhatIsIncluded";
import HowWeWork from "@/components/sections/services/detail/HowWeWork";
import WhyQTerraService from "@/components/sections/services/detail/WhyQTerraService";
import RelatedServices from "@/components/sections/services/detail/RelatedServices";
import CTABanner from "@/components/sections/CTABanner";
import {
  ClipboardList,
  Target,
  Shield,
  BarChart2,
  UserCheck,
  TrendingUp,
  Laptop,
} from "lucide-react";

export default function ProjectManagementPage() {
  return (
    <>
      <ServiceDetailHero
        breadcrumb="Project Management"
        eyebrow="DELIVERY & IMPLEMENTATION"
        title="Project Management & Implementation Support"
        description="Supporting organizations in the planning, coordination, and delivery of complex initiatives and strategic programs."
      />
      <ServiceOverview
        eyebrow="WHAT WE DO"
        headline="From Strategy to Execution -- We Stay the Course"
        paragraphs={[
          "QTerra supports organizations in the planning, coordination, and delivery of complex initiatives and strategic programs, providing the structure, oversight, and expertise needed to deliver on time and on budget.",
          "We bring disciplined project governance, experienced program managers, and data-driven decision support to every engagement, keeping complex programs on track even when conditions change.",
        ]}
        imageSrc="/images/services/project-management.jpg"
        imageAlt="Project management team in planning session"
      />
      <WhatIsIncluded
        eyebrow="WHAT'S INCLUDED"
        headline="Our Project Management Services"
        subtext="End-to-end delivery support from planning through to completion and performance monitoring."
        services={[
          { icon: ClipboardList, title: "Project Planning & Coordination", description: "Developing detailed project plans, work breakdown structures, and coordination frameworks that keep teams aligned and on schedule." },
          { icon: Target, title: "Program Management & Strategic Delivery", description: "Managing complex, multi-workstream programs with structured governance and clear accountability at every level." },
          { icon: Shield, title: "Project Governance & Performance Monitoring", description: "Establishing governance structures, KPIs, and reporting systems that provide leadership with real-time visibility into program performance." },
          { icon: BarChart2, title: "Data Analytics & Decision-Support", description: "Deploying data analytics tools and dashboards that support evidence-based decision-making throughout the program lifecycle." },
          { icon: UserCheck, title: "Stakeholder Engagement & Management", description: "Managing stakeholder relationships, communications, and expectations across all levels of complex programs." },
          { icon: ClipboardList, title: "Risk Management & Issue Resolution", description: "Proactively identifying, assessing, and managing risks before they become issues that derail program delivery." },
        ]}
      />
      <HowWeWork
        eyebrow="OUR PROCESS"
        headline="How We Deliver"
        subtext="A structured four-phase delivery approach that keeps programs on track from kickoff to completion."
        steps={[
          { number: "01", title: "Plan", description: "We develop a comprehensive project plan covering scope, timeline, resources, risks, and governance structures." },
          { number: "02", title: "Mobilize", description: "We stand up the project team, establish governance, and align all stakeholders before execution begins." },
          { number: "03", title: "Execute", description: "We manage day-to-day delivery, tracking progress against the plan and resolving issues before they become blockers." },
          { number: "04", title: "Close & Review", description: "We ensure clean project closure, document lessons learned, and confirm that all deliverables meet the agreed standards." },
        ]}
        imageSrc="/images/services/project-process.jpg"
        imageAlt="Project team in execution phase"
      />
      <WhyQTerraService
        eyebrow="WHY QTERRA"
        headline="Why Choose QTerra for Project Management"
        points={[
          { icon: UserCheck, title: "Experienced Program Managers", description: "Our project managers have delivered complex programs across government, corporate, and development sectors." },
          { icon: BarChart2, title: "Data-Driven Oversight", description: "We use analytics and performance dashboards to give leadership real visibility into program health at all times." },
          { icon: Shield, title: "Governance First", description: "We build strong governance structures into every program from day one, preventing the issues that derail most complex initiatives." },
        ]}
      />
      <RelatedServices
        services={[
          { icon: BarChart2, number: "01", title: "Management Consulting", description: "Strategy development and organizational transformation.", href: "/services/management-consulting" },
          { icon: TrendingUp, number: "02", title: "Financial Advisory", description: "Capital mobilization and investment structuring.", href: "/services/financial-advisory" },
          { icon: Laptop, number: "04", title: "Digital Solutions", description: "Data analytics platforms and performance monitoring systems.", href: "/services/digital-solutions" },
        ]}
      />
      <CTABanner />
    </>
  );
}
