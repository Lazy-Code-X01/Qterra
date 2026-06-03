"use client";
import ServiceDetailHero from "@/components/sections/services/detail/ServiceDetailHero";
import ServiceOverview from "@/components/sections/services/detail/ServiceOverview";
import WhatIsIncluded from "@/components/sections/services/detail/WhatIsIncluded";
import HowWeWork from "@/components/sections/services/detail/HowWeWork";
import BackToServices from "@/components/sections/services/detail/BackToServices";
import CTABanner from "@/components/sections/CTABanner";
import { GraduationCap, Users, Cpu } from "lucide-react";

export default function TrainingCapabilityPage() {
  return (
    <>
      <ServiceDetailHero
        breadcrumb="Training & Capability Building"
        eyebrow="TRAINING & CAPABILITY"
        title="Training & Capability Building"
        description="Executive training, professional workshops, applied capability programs, and specialized training including AI-driven project management — designed to build lasting organizational capability."
      />
      <ServiceOverview
        eyebrow="WHAT WE DO"
        headline="Building the Capability Your Organization Needs to Perform"
        paragraphs={[
          "Executive training, professional workshops, applied capability programs, and specialized training including AI-driven project management are what QTerra delivers under this service area. We design programs that equip individuals and teams with the skills, knowledge, and tools needed to perform at their best.",
          "We work with governments, corporations, and development organizations to ensure every program is contextually relevant, practically focused, and aligned to the strategic capability gaps that matter most.",
        ]}
        imageSrc="/images/services/training.jpg"
        imageAlt="Training and capability building session"
      />
      <WhatIsIncluded
        eyebrow="WHAT'S INCLUDED"
        headline="Our Training & Capability Programs"
        subtext="Professionally designed learning programs that build lasting capability across your organization."
        services={[
          { icon: GraduationCap, title: "Executive & Professional Training Programs", description: "Intensive training programs designed to sharpen the strategic thinking, leadership capability, and professional competence of executives and senior professionals." },
          { icon: Users, title: "Applied Workshops & Capability-Building Initiatives", description: "Practical, facilitated workshops and capability-building initiatives that develop specific skills, embed new ways of working, and strengthen team performance." },
          { icon: Cpu, title: "Specialized Programs including AI-Driven Project Management", description: "Purpose-built specialized programs covering emerging areas of practice — including AI-driven project management, decision intelligence, and digital capability development." },
        ]}
      />
      <HowWeWork
        eyebrow="OUR PROCESS"
        headline="How We Deliver"
        subtext="A rigorous design and delivery process that ensures every program achieves its intended outcomes."
        steps={[
          { number: "01", title: "Define", description: "We identify capability gaps, learning objectives, and organizational context to define a program design aligned to measurable outcomes." },
          { number: "02", title: "Deliver", description: "We deliver tailored programs with experienced facilitators who combine subject matter expertise with practical, applied learning." },
          { number: "03", title: "Enable", description: "We integrate digital learning tools and AI-enabled resources to extend program reach and reinforce knowledge application." },
          { number: "04", title: "Embed", description: "We measure outcomes, build internal facilitation capability, and establish systems that sustain learning beyond the program." },
        ]}
        imageSrc="/images/services/training-process.jpg"
        imageAlt="Training delivery session"
      />
      <BackToServices />
      <CTABanner minimal />
    </>
  );
}
