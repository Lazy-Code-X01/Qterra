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
  Shield,
  BarChart2,
  Target,
  Layers,
  CheckSquare,
  Users,
  Laptop,
} from "lucide-react";

export default function ProjectDeliveryPage() {
  return (
    <>
      <ServiceDetailHero
        breadcrumb="Project Delivery & Implementation"
        eyebrow="PROJECT DELIVERY"
        title="Project Delivery & Implementation"
        description="Project and program management, governance, controls, performance monitoring, and strategic initiative execution that ensures initiatives deliver their intended value."
      />
      <ServiceOverview
        eyebrow="WHAT WE DO"
        headline="Disciplined Execution From Initiation to Closure"
        paragraphs={[
          "Many organizations have the right strategies but struggle to execute them. QTerra provides structured project and program management support that keeps initiatives on time, within scope, and focused on delivering the business value they were designed to create.",
          "We bring governance frameworks, delivery discipline, and performance monitoring tools that give leadership real-time visibility — enabling faster decisions, early risk identification, and stronger accountability across the delivery lifecycle.",
        ]}
        imageSrc="/images/services/project-management.jpg"
        imageAlt="Project delivery and implementation team"
      />
      <WhatIsIncluded
        eyebrow="WHAT'S INCLUDED"
        headline="Our Project Delivery Services"
        subtext="End-to-end delivery support for complex projects and programs across public and private sector organizations."
        services={[
          { icon: ClipboardList, title: "Project & Program Management", description: "Full lifecycle management of complex initiatives — from initiation through delivery and closure — with structured governance and clear accountability." },
          { icon: Shield, title: "Governance & Controls", description: "Establishing project governance structures, risk frameworks, and control mechanisms that ensure initiatives stay aligned to strategic objectives." },
          { icon: BarChart2, title: "Performance Monitoring & Reporting", description: "Building performance dashboards and reporting systems that provide leadership with real-time visibility into delivery progress." },
          { icon: Target, title: "Strategic Initiative Execution", description: "Supporting the execution of priority strategic initiatives with dedicated delivery expertise and structured program management." },
          { icon: CheckSquare, title: "Delivery Assurance", description: "Independent reviews and quality assurance processes that validate delivery quality and identify corrective actions before issues escalate." },
          { icon: Layers, title: "PMO Setup & Strengthening", description: "Designing and operationalizing Project Management Offices that build internal delivery capability and institutional discipline." },
        ]}
      />
      <HowWeWork
        eyebrow="OUR PROCESS"
        headline="How We Deliver"
        subtext="A structured delivery approach that combines rigor with adaptability to keep your initiatives on track."
        steps={[
          { number: "01", title: "Mobilize", description: "We establish the delivery structure — governance, roles, tools, and baselines — to set the project up for success from day one." },
          { number: "02", title: "Execute", description: "We manage delivery with disciplined project management, proactive risk management, and regular stakeholder communication." },
          { number: "03", title: "Monitor", description: "We track performance against plan, identify variances early, and implement corrective actions to keep delivery on track." },
          { number: "04", title: "Close & Transfer", description: "We close projects with structured handovers, lessons learned, and capability transfer to ensure sustained value realization." },
        ]}
        imageSrc="/images/services/project-process.jpg"
        imageAlt="Project delivery process"
      />
      <WhyQTerraService
        eyebrow="WHY QTERRA"
        headline="Why Choose QTerra for Project Delivery"
        points={[
          { icon: Target, title: "Value-Focused Delivery", description: "We manage projects with the end business outcome in mind — not just the delivery of outputs. Every milestone is tied to measurable value." },
          { icon: Shield, title: "Governance Expertise", description: "We bring structured governance frameworks and controls that reduce delivery risk and strengthen organizational accountability." },
          { icon: Layers, title: "Integrated Execution", description: "We combine project management with strategic advisory, digital tools, and capability building for comprehensive delivery support." },
        ]}
      />
      <RelatedServices
        services={[
          { icon: BarChart2, number: "01", title: "Strategy & Transformation", description: "Strategic clarity and execution roadmaps to guide your delivery agenda.", href: "/services/strategy-transformation" },
          { icon: Laptop, number: "03", title: "Digital Solutions & Analytics", description: "Performance dashboards and digital tools to support project monitoring.", href: "/services/digital-solutions" },
          { icon: Users, number: "04", title: "Human Capital & Talent Management", description: "Workforce solutions to staff and support complex delivery programs.", href: "/services/human-capital" },
        ]}
      />
      <CTABanner />
    </>
  );
}
