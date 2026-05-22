"use client";

import { motion } from "framer-motion";
import { BarChart2, TrendingUp, ClipboardList, Laptop, Users, GraduationCap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: BarChart2,
    name: "Management Consulting",
    description: "Strategy development, procurement advisory, vendor management, and operational efficiency programs.",
  },
  {
    icon: TrendingUp,
    name: "Financial Advisory",
    description: "Capital mobilization, investment structuring, financial sustainability, and funding optimization.",
  },
  {
    icon: ClipboardList,
    name: "Project Management",
    description: "Program planning, coordination, delivery support, governance, and data-driven decision advisory.",
  },
  {
    icon: Laptop,
    name: "Digital Solutions",
    description: "Business process automation, data analytics platforms, and operational performance monitoring systems.",
  },
  {
    icon: Users,
    name: "HR & Talent Management",
    description: "Talent acquisition, employee development, payroll administration, and performance management frameworks.",
  },
  {
    icon: GraduationCap,
    name: "Training & Capability",
    description: "Executive training, professional workshops, organizational capacity building, and certification programs.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function ServicesSection() {
  return (
    <section id="services" className="w-full">
      {/* PART A — Intro + Cards */}
      <div className="bg-[#F8F8F4] py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left */}
            <motion.div
              className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col gap-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="font-inter font-semibold text-[11px] tracking-[2px] text-[#6B7C4A] uppercase">
                What We Do
              </p>
              <h2 className="font-sora font-bold text-[40px] leading-[1.1] tracking-[-1px] text-[#0D0F0D]">
                Six Integrated Service Areas
              </h2>
              <p className="font-inter text-base leading-[1.7] text-[#555]">
                From strategy to execution, QTerra brings together consulting expertise, financial advisory, project delivery, and digital capability under one roof.
              </p>
              <a
                href="#services"
                className="inline-flex items-center gap-1.5 font-inter font-semibold text-sm text-[#3F4E2E] hover:underline transition-all mt-2"
              >
                View All Services
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Right — 3x2 grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="group bg-white border border-[#e8e8e4] rounded-xl p-6 flex flex-col cursor-pointer hover:border-[#A8D32E] hover:shadow-[0_4px_24px_rgba(168,211,46,0.12)] transition-all duration-300"
                  >
                    <div className="h-10 w-10 rounded-lg bg-[#f0f5ef] flex items-center justify-center text-[#3F4E2E]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-sora font-semibold text-base text-[#0D0F0D] mt-3 leading-snug">
                      {svc.name}
                    </h4>
                    <p className="font-inter text-sm text-[#666] leading-[1.6] mt-1.5 flex-1">
                      {svc.description}
                    </p>
                    <a
                      href="#services"
                      className="inline-flex items-center gap-1 font-inter font-semibold text-[13px] text-[#6B7C4A] mt-3 group-hover:gap-2 transition-all"
                    >
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      {/* PART B — Dark CTA band */}
      <div className="bg-[#0D0F0D] py-14">
        <motion.div
          className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="flex flex-col gap-3">
            <h3 className="font-sora font-semibold text-[28px] text-white leading-snug">
              Not sure which service fits your need?
            </h3>
            <p className="font-inter text-base text-white/55">
              Let&apos;s talk through your goals and find the right solution together.
            </p>
          </div>
          <a href="#contact" className="shrink-0">
            <button className="inline-flex items-center gap-2 bg-[#A8D32E] text-[#0D0F0D] font-inter font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-[#bce03e] transition-colors duration-200 whitespace-nowrap">
              Schedule a Consultation
              <ArrowRight className="h-4 w-4" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
