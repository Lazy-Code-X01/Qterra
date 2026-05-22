"use client";
import ServiceDetailHero from "@/components/sections/services/detail/ServiceDetailHero";
import ServiceOverview from "@/components/sections/services/detail/ServiceOverview";
import WhatIsIncluded from "@/components/sections/services/detail/WhatIsIncluded";
import HowWeWork from "@/components/sections/services/detail/HowWeWork";
import WhyQTerraService from "@/components/sections/services/detail/WhyQTerraService";
import RelatedServices from "@/components/sections/services/detail/RelatedServices";
import CTABanner from "@/components/sections/CTABanner";
import {
  Settings,
  BarChart2,
  Monitor,
  FileText,
  Target,
  UserCheck,
  Shield,
  ClipboardList,
  Users,
} from "lucide-react";

export default function DigitalSolutionsPage() {
  return (
    <>
      <ServiceDetailHero
        breadcrumb="Digital Solutions"
        eyebrow="DIGITAL & TECHNOLOGY"
        title="Digital Solutions & Business Tools"
        description="Developing and deploying digital tools, methodologies, and operational systems that enable organizations to improve efficiency and make data-driven decisions."
      />
      <ServiceOverview
        eyebrow="WHAT WE DO"
        headline="Technology That Drives Operational Excellence"
        paragraphs={[
          "QTerra develops and deploys digital tools, methodologies, and operational systems tailored to the specific needs of public and private sector organizations across Africa.",
          "We don't implement technology for its own sake. Every digital solution we build is designed to solve a specific operational problem, improve a measurable outcome, and be sustainable within your organization's capacity.",
        ]}
        imageSrc="/images/services/digital-solutions.jpg"
        imageAlt="Digital solutions and technology team"
      />
      <WhatIsIncluded
        eyebrow="WHAT'S INCLUDED"
        headline="Our Digital Solutions"
        subtext="Purpose-built digital tools and systems designed to improve efficiency and enable data-driven decision-making."
        services={[
          { icon: Settings, title: "Business Process Automation", description: "Identifying and automating repetitive, manual processes to free up capacity and reduce the risk of human error." },
          { icon: BarChart2, title: "Data Analytics Platforms & Dashboards", description: "Building custom analytics platforms that give leadership real-time visibility into performance across the organization." },
          { icon: Monitor, title: "Operational Performance Monitoring", description: "Deploying monitoring systems that track KPIs, flag issues early, and support continuous improvement." },
          { icon: FileText, title: "Digital Decision-Support Tools", description: "Developing reporting tools and decision-support systems that turn data into actionable insight for leadership teams." },
          { icon: Target, title: "Digital Transformation Advisory", description: "Guiding organizations through digital transformation journeys with structured change management and capability building." },
          { icon: Shield, title: "Systems Integration & Data Management", description: "Connecting disparate systems and building robust data management frameworks to create a single source of operational truth." },
        ]}
      />
      <HowWeWork
        eyebrow="OUR PROCESS"
        headline="How We Deliver"
        subtext="A practical, outcome-focused approach to digital implementation that minimizes disruption and maximizes adoption."
        steps={[
          { number: "01", title: "Discover", description: "We map your current processes, systems, and pain points to identify where digital solutions will have the greatest impact." },
          { number: "02", title: "Design", description: "We design solutions tailored to your operational context, capacity, and technical environment." },
          { number: "03", title: "Build & Test", description: "We develop and rigorously test the solution before deployment to ensure it performs as intended." },
          { number: "04", title: "Deploy & Support", description: "We manage deployment, train your team, and provide support to ensure successful adoption and sustained performance." },
        ]}
        imageSrc="/images/services/digital-process.jpg"
        imageAlt="Digital implementation team"
      />
      <WhyQTerraService
        eyebrow="WHY QTERRA"
        headline="Why Choose QTerra for Digital Solutions"
        points={[
          { icon: Target, title: "Context-Driven Design", description: "We design for your specific operational context, not generic off-the-shelf solutions that don't fit your reality." },
          { icon: UserCheck, title: "Built for Adoption", description: "We prioritize usability and change management to ensure your team actually uses what we build." },
          { icon: Shield, title: "Sustainable & Maintainable", description: "Every solution we build is designed to be maintained and scaled by your team long after our engagement ends." },
        ]}
      />
      <RelatedServices
        services={[
          { icon: BarChart2, number: "01", title: "Management Consulting", description: "Strategy and process improvement to complement your digital transformation.", href: "/services/management-consulting" },
          { icon: ClipboardList, number: "03", title: "Project Management", description: "Structured delivery support for complex digital implementations.", href: "/services/project-management" },
          { icon: Users, number: "05", title: "HR & Talent Management", description: "Building the human capability to sustain your digital solutions.", href: "/services/hr-talent-management" },
        ]}
      />
      <CTABanner />
    </>
  );
}
