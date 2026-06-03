"use client";
import ServiceDetailHero from "@/components/sections/services/detail/ServiceDetailHero";
import ServiceOverview from "@/components/sections/services/detail/ServiceOverview";
import WhatIsIncluded from "@/components/sections/services/detail/WhatIsIncluded";
import HowWeWork from "@/components/sections/services/detail/HowWeWork";
import BackToServices from "@/components/sections/services/detail/BackToServices";
import CTABanner from "@/components/sections/CTABanner";
import { Settings, BarChart2, Cpu } from "lucide-react";

export default function DigitalSolutionsPage() {
  return (
    <>
      <ServiceDetailHero
        breadcrumb="Digital Solutions & Analytics"
        eyebrow="DIGITAL SOLUTIONS & ANALYTICS"
        title="Digital Solutions & Analytics"
        description="Process automation, data analytics platforms, AI-enabled decision support, and operational performance tools that strengthen how organizations operate and decide."
      />
      <ServiceOverview
        eyebrow="WHAT WE DO"
        headline="Technology and Analytics That Drive Operational Excellence"
        paragraphs={[
          "Process automation, data analytics platforms, AI-enabled decision support, and operational performance tools are what QTerra delivers under this service area. We develop and deploy digital solutions tailored to the specific operational needs of public and private sector organizations.",
          "Every solution we build is designed to solve a specific operational problem, improve a measurable outcome, and be sustainable within your organization's capacity — not technology for its own sake.",
        ]}
        imageSrc="/images/services/digital-solutions.jpg"
        imageAlt="Digital solutions and analytics team"
      />
      <WhatIsIncluded
        eyebrow="WHAT'S INCLUDED"
        headline="Our Digital Solutions & Analytics Services"
        subtext="Purpose-built digital tools and analytics solutions designed to improve efficiency, decision-making, and organizational performance."
        services={[
          { icon: Settings, title: "Process Automation & Operational Tools", description: "Identifying and automating manual, repetitive processes and deploying operational tools that free up capacity and improve execution speed across the organization." },
          { icon: BarChart2, title: "Data Analytics, Dashboards & Performance Platforms", description: "Building custom analytics platforms, performance dashboards, and reporting systems that give leadership real-time visibility and data-driven insight." },
          { icon: Cpu, title: "AI-Enabled Decision Support & Reporting Solutions", description: "Developing and deploying AI-enabled decision-support tools and intelligent reporting solutions that strengthen leadership decision-making and organizational agility." },
        ]}
      />
      <HowWeWork
        eyebrow="OUR PROCESS"
        headline="How We Deliver"
        subtext="A practical, outcome-focused approach to digital implementation that minimizes disruption and maximizes adoption."
        steps={[
          { number: "01", title: "Define", description: "We map your current processes, systems, and pain points to clarify priorities and define measurable success metrics for each solution." },
          { number: "02", title: "Deliver", description: "We design, build, and rigorously test digital solutions tailored to your operational context, capacity, and technical environment." },
          { number: "03", title: "Enable", description: "We deploy AI-enabled tools, dashboards, and analytics platforms that strengthen leadership decision-making and operational performance." },
          { number: "04", title: "Embed", description: "We train your team, manage adoption, and build internal capability to sustain and scale every solution we deliver." },
        ]}
        imageSrc="/images/services/digital-process.jpg"
        imageAlt="Digital implementation team"
      />
      <BackToServices />
      <CTABanner minimal />
    </>
  );
}
