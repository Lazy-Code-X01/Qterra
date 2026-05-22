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
  Users,
  Building2,
  GraduationCap,
  Target,
  BarChart2,
  Laptop,
} from "lucide-react";

export default function TrainingCapabilityPage() {
  return (
    <>
      <ServiceDetailHero
        breadcrumb="Training & Capability"
        eyebrow="LEARNING & DEVELOPMENT"
        title="Training & Capability Development"
        description="Designing and delivering professional learning and organizational capacity-building programs tailored to institutional and corporate needs."
      />
      <ServiceOverview
        eyebrow="WHAT WE DO"
        headline="Building the Capability Your Organization Needs to Grow"
        paragraphs={[
          "QTerra designs and delivers professional learning and organizational capacity-building programs that equip individuals and teams with the skills, knowledge, and mindsets needed to perform at their best.",
          "We work with governments, corporations, and development organizations to design programs that are contextually relevant, practically focused, and aligned to the strategic capability gaps that matter most.",
        ]}
        imageSrc="/images/services/training.jpg"
        imageAlt="Training and capability development session"
      />
      <WhatIsIncluded
        eyebrow="WHAT'S INCLUDED"
        headline="Our Training & Capability Programs"
        subtext="Professionally designed learning programs that build lasting capability across your organization."
        services={[
          { icon: UserCheck, title: "Executive Training & Leadership Development", description: "Intensive programs designed to sharpen the strategic thinking, decision-making, and leadership capability of senior executives." },
          { icon: Users, title: "Professional Workshops & Seminars", description: "Focused, practical workshops that build specific skills and knowledge across teams and departments." },
          { icon: Building2, title: "Organizational Capability Building", description: "Comprehensive programs that build institutional capacity across an entire organization, not just individual skills." },
          { icon: GraduationCap, title: "Professional Certification Programs", description: "Structured certification and technical skills development programs aligned to industry standards and professional bodies." },
          { icon: Target, title: "Curriculum Design & Learning Architecture", description: "Designing bespoke learning curricula and program architectures tailored to your organizational objectives." },
          { icon: BarChart2, title: "Learning Impact Assessment", description: "Evaluating program effectiveness through rigorous assessment of learning outcomes and organizational performance impact." },
        ]}
      />
      <HowWeWork
        eyebrow="OUR PROCESS"
        headline="How We Deliver"
        subtext="A rigorous design and delivery process that ensures every program achieves its intended learning outcomes."
        steps={[
          { number: "01", title: "Diagnose", description: "We identify the specific capability gaps, learning objectives, and organizational context that will shape the program design." },
          { number: "02", title: "Design", description: "We design a tailored learning program including content, methodology, format, and assessment, aligned to your objectives." },
          { number: "03", title: "Deliver", description: "We deliver the program with experienced facilitators who combine subject matter expertise with practical delivery skill." },
          { number: "04", title: "Evaluate", description: "We measure learning outcomes, gather feedback, and assess the impact of the program on organizational performance." },
        ]}
        imageSrc="/images/services/training-process.jpg"
        imageAlt="Training delivery session"
      />
      <WhyQTerraService
        eyebrow="WHY QTERRA"
        headline="Why Choose QTerra for Training & Capability"
        points={[
          { icon: Target, title: "Contextually Designed", description: "Every program we design is tailored to your organizational context, not adapted from a generic off-the-shelf curriculum." },
          { icon: UserCheck, title: "Expert Facilitators", description: "Our facilitators combine deep subject matter expertise with proven adult learning and facilitation skills." },
          { icon: BarChart2, title: "Measured Impact", description: "We evaluate every program against defined learning outcomes and organizational performance indicators." },
        ]}
      />
      <RelatedServices
        services={[
          { icon: Users, number: "05", title: "HR & Talent Management", description: "Talent acquisition, development, and performance management.", href: "/services/hr-talent-management" },
          { icon: BarChart2, number: "01", title: "Management Consulting", description: "Organizational strategy and transformation programs.", href: "/services/management-consulting" },
          { icon: Laptop, number: "04", title: "Digital Solutions", description: "Digital tools to support learning management and performance tracking.", href: "/services/digital-solutions" },
        ]}
      />
      <CTABanner />
    </>
  );
}
