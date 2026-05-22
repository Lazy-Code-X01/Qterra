"use client";
import ServiceDetailHero from "@/components/sections/services/detail/ServiceDetailHero";
import ServiceOverview from "@/components/sections/services/detail/ServiceOverview";
import WhatIsIncluded from "@/components/sections/services/detail/WhatIsIncluded";
import HowWeWork from "@/components/sections/services/detail/HowWeWork";
import WhyQTerraService from "@/components/sections/services/detail/WhyQTerraService";
import RelatedServices from "@/components/sections/services/detail/RelatedServices";
import CTABanner from "@/components/sections/CTABanner";
import {
  DollarSign,
  TrendingUp,
  FileText,
  PieChart,
  Shield,
  Globe2,
  Target,
  BarChart2,
  ClipboardList,
  Laptop,
} from "lucide-react";

export default function FinancialAdvisoryPage() {
  return (
    <>
      <ServiceDetailHero
        breadcrumb="Financial Advisory"
        eyebrow="FINANCIAL SERVICES"
        title="Financial & Investment Advisory"
        description="Supporting financial sustainability, capital mobilization, and strategic investment planning for organizations across Africa."
      />
      <ServiceOverview
        eyebrow="WHAT WE DO"
        headline="Advisory That Connects Capital to Strategy"
        paragraphs={[
          "QTerra offers financial and investment advisory services designed to support organizations in achieving financial sustainability, mobilizing capital, and making sound investment decisions.",
          "We work with governments, corporations, and development organizations to structure financing, optimize capital allocation, and build the financial foundations that long-term growth requires.",
        ]}
        imageSrc="/images/services/financial-advisory.jpg"
        imageAlt="Financial advisory meeting"
      />
      <WhatIsIncluded
        eyebrow="WHAT'S INCLUDED"
        headline="Our Financial Advisory Services"
        subtext="Comprehensive financial advisory designed to support sustainability, growth, and sound investment decisions."
        services={[
          { icon: DollarSign, title: "Fund Procurement & Financing Strategy", description: "Developing strategies to secure funding from diverse sources including grants, loans, equity, and development finance." },
          { icon: TrendingUp, title: "Investment Advisory & Capital Deployment", description: "Providing structured guidance on investment decisions, capital deployment planning, and portfolio management." },
          { icon: FileText, title: "Financial Structuring", description: "Designing optimal financial structures for projects and organizations to maximize efficiency and minimize risk." },
          { icon: PieChart, title: "Funding Optimization & Capital Allocation", description: "Identifying opportunities to optimize existing funding arrangements and improve capital allocation across the organization." },
          { icon: Shield, title: "Risk Assessment & Financial Due Diligence", description: "Conducting rigorous financial risk assessments and due diligence to protect organizational interests in complex transactions." },
          { icon: BarChart2, title: "Financial Performance Monitoring", description: "Establishing financial monitoring frameworks that track key metrics and support informed decision-making." },
        ]}
      />
      <HowWeWork
        eyebrow="OUR PROCESS"
        headline="How We Deliver"
        subtext="A structured approach that connects your financial goals to actionable strategies and measurable outcomes."
        steps={[
          { number: "01", title: "Diagnose", description: "We assess your current financial position, funding structure, and investment goals to identify gaps and opportunities." },
          { number: "02", title: "Strategize", description: "We develop a tailored financial strategy aligned to your organizational objectives and risk appetite." },
          { number: "03", title: "Structure", description: "We design the optimal financial or investment structure and support you through negotiations and documentation." },
          { number: "04", title: "Optimize", description: "We monitor performance and continuously identify opportunities to improve financial outcomes and capital efficiency." },
        ]}
        imageSrc="/images/services/financial-process.jpg"
        imageAlt="Financial planning session"
      />
      <WhyQTerraService
        eyebrow="WHY QTERRA"
        headline="Why Choose QTerra for Financial Advisory"
        points={[
          { icon: Shield, title: "Independent & Objective", description: "We provide independent advice with no conflicts of interest. Our only objective is your financial success." },
          { icon: Globe2, title: "Africa-Focused Expertise", description: "We understand the unique financing landscape across African markets and how to navigate it effectively." },
          { icon: Target, title: "Outcome-Driven", description: "We measure success by the capital secured, the structures implemented, and the financial results achieved." },
        ]}
      />
      <RelatedServices
        services={[
          { icon: BarChart2, number: "01", title: "Management Consulting", description: "Strategy development, procurement advisory, and operational efficiency programs.", href: "/services/management-consulting" },
          { icon: ClipboardList, number: "03", title: "Project Management", description: "End-to-end program delivery, governance, and implementation support.", href: "/services/project-management" },
          { icon: Laptop, number: "04", title: "Digital Solutions", description: "Business process automation and data analytics platforms.", href: "/services/digital-solutions" },
        ]}
      />
      <CTABanner />
    </>
  );
}
