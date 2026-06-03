"use client";
import ServiceDetailHero from "@/components/sections/services/detail/ServiceDetailHero";
import ServiceOverview from "@/components/sections/services/detail/ServiceOverview";
import WhatIsIncluded from "@/components/sections/services/detail/WhatIsIncluded";
import HowWeWork from "@/components/sections/services/detail/HowWeWork";
import BackToServices from "@/components/sections/services/detail/BackToServices";
import CTABanner from "@/components/sections/CTABanner";
import { ClipboardList, Shield, BarChart2 } from "lucide-react";

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
          "Project and program management, governance, controls, performance monitoring, and strategic initiative execution are the foundations of QTerra's delivery support. We provide structured delivery management that keeps initiatives on time, within scope, and focused on business value.",
          "We bring governance frameworks, delivery discipline, and performance monitoring tools that give leadership real-time visibility — enabling faster decisions, early risk identification, and stronger accountability across the full delivery lifecycle.",
        ]}
        imageSrc="/images/services/project-management.jpg"
        imageAlt="Project delivery and implementation team"
      />
      <WhatIsIncluded
        eyebrow="WHAT'S INCLUDED"
        headline="Our Project Delivery Services"
        subtext="End-to-end delivery support for complex projects and programs across public and private sector organizations."
        services={[
          { icon: ClipboardList, title: "Project & Program Management for Complex Initiatives", description: "Full lifecycle management of complex, multi-workstream initiatives — from initiation through delivery and closure — with structured governance and clear accountability at every level." },
          { icon: Shield, title: "Governance, Controls & Performance Monitoring", description: "Establishing project governance structures, risk frameworks, control mechanisms, and performance monitoring systems that ensure delivery stays aligned to strategic objectives." },
          { icon: BarChart2, title: "Strategic Initiative Execution & Delivery Assurance", description: "Supporting the execution of priority strategic initiatives with dedicated delivery expertise, structured program management, and independent quality assurance." },
        ]}
      />
      <HowWeWork
        eyebrow="OUR PROCESS"
        headline="How We Deliver"
        subtext="A structured delivery approach that combines rigor with adaptability to keep your initiatives on track."
        steps={[
          { number: "01", title: "Define", description: "We establish the delivery structure — governance, roles, baselines, and success metrics — to set the project up for success from day one." },
          { number: "02", title: "Deliver", description: "We manage delivery with disciplined project management, proactive risk management, and regular stakeholder communication." },
          { number: "03", title: "Enable", description: "We deploy performance dashboards and reporting tools that give leadership real-time visibility to support faster, better decisions." },
          { number: "04", title: "Embed", description: "We close engagements with structured handovers, lessons learned, and capability transfer to ensure sustained value realization." },
        ]}
        imageSrc="/images/services/project-process.jpg"
        imageAlt="Project delivery process"
      />
      <BackToServices />
      <CTABanner minimal />
    </>
  );
}
