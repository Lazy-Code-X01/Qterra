"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Layers } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const tiers = [
  {
    label: "TIER 1",
    number: "01",
    Icon: Compass,
    title: "Strategic Advisory",
    subtitle: "High-value, executive-level consulting engagements that shape direction, governance, and long-term organizational performance.",
    services: [
      { name: "Corporate Strategy & Transformation", desc: "Defining strategy, restructuring, and large-scale change programs." },
      { name: "Procurement & Supply Chain Advisory", desc: "Vendor strategy, contract management, and procurement optimization." },
      { name: "Financial & Investment Advisory", desc: "Capital mobilization, investment structuring, and funding strategy." },
      { name: "Organizational & HR Strategy", desc: "Workforce design, executive alignment, and capability frameworks." },
    ],
    tags: ["Government Agencies", "Large Corporations", "Development Organizations"],
  },
  {
    label: "TIER 2",
    number: "02",
    Icon: Layers,
    title: "Operational & Capability Services",
    subtitle: "Hands-on delivery, implementation support, and capability building programs that translate strategy into measurable outcomes.",
    services: [
      { name: "Project Management & Implementation", desc: "End-to-end program planning, delivery coordination, and governance." },
      { name: "Digital Solutions & Business Tools", desc: "Process automation, analytics platforms, and decision-support tools." },
      { name: "HR & Talent Management", desc: "Talent acquisition, payroll, performance frameworks, and development." },
      { name: "Training & Capability Development", desc: "Executive programs, workshops, and institutional capacity building." },
    ],
    tags: ["Mid-size Corporations", "Public Sector Agencies", "Large Institutions"],
  },
];

export default function ServicesTiers() {
  const [active, setActive] = useState(0);
  const tier = tiers[active];

  return (
    <section className="bg-qterra-black relative">
      {/* Wave top — matches ServicesGrid white bg */}
      <div className="w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[72px] block">
          <path d="M0,32 C180,72 360,0 540,36 C720,72 900,8 1080,40 C1260,72 1380,20 1440,32 L1440,72 L0,72 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="text-center mb-16"
        >
          <p className="font-inter font-semibold text-[11px] tracking-[2px] text-spark uppercase">
            Service Architecture
          </p>
          <h2 className="font-sora font-bold text-[40px] text-white tracking-[-1px] mt-2">
            How Our Services Are Structured
          </h2>
        </motion.div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT — Tier selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-4 flex flex-col"
          >
            {/* Connecting track */}
            <div className="relative flex flex-col gap-0">
              {/* Vertical line */}
              <div className="absolute left-[19px] top-6 bottom-6 w-[1px] bg-white/[0.08]" />
              {/* Active progress line */}
              <motion.div
                className="absolute left-[19px] w-[1px] bg-spark origin-top"
                animate={{ height: active === 0 ? "50%" : "100%" }}
                transition={{ duration: 0.4, ease }}
                style={{ top: "24px" }}
              />

              {tiers.map((t, i) => {
                const Icon = t.Icon;
                const isActive = active === i;
                return (
                  <button
                    key={t.label}
                    onClick={() => setActive(i)}
                    className="relative flex items-start gap-5 text-left py-7 group"
                  >
                    {/* Dot */}
                    <div className={`relative z-10 h-10 w-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive
                        ? "bg-spark border-spark"
                        : "bg-qterra-black border-white/[0.12] group-hover:border-white/30"
                    }`}>
                      <Icon className={`h-4 w-4 transition-colors duration-300 ${isActive ? "text-qterra-black" : "text-white/40 group-hover:text-white/70"}`} />
                    </div>

                    {/* Text */}
                    <div className="pt-1.5">
                      <p className={`font-inter font-semibold text-[11px] tracking-[2px] uppercase transition-colors duration-300 ${isActive ? "text-spark" : "text-white/30 group-hover:text-white/50"}`}>
                        {t.label}
                      </p>
                      <h4 className={`font-sora font-semibold text-[18px] mt-1 transition-colors duration-300 ${isActive ? "text-white" : "text-white/40 group-hover:text-white/60"}`}>
                        {t.title}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Client tags below selector */}
            <div className="mt-4 pl-[60px]">
              <p className="font-inter font-semibold text-[11px] text-white/30 uppercase tracking-[1px] mb-3">
                Typical clients
              </p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease }}
                  className="flex flex-wrap gap-2"
                >
                  {tier.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/[0.05] border border-white/[0.1] rounded-full px-3 py-1 font-inter text-[12px] text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* RIGHT — Content panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease }}
                className="relative p-10"
              >
                {/* Corner brackets */}
                {/* Top-left */}
                <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-spark/40 rounded-tl-sm" />
                {/* Top-right */}
                <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-spark/40 rounded-tr-sm" />
                {/* Bottom-left */}
                <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-spark/40 rounded-bl-sm" />
                {/* Bottom-right */}
                <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-spark/40 rounded-br-sm" />
                {/* Big faded number */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="font-inter font-semibold text-[11px] tracking-[2px] text-spark uppercase">
                      {tier.label}
                    </p>
                    <h3 className="font-sora font-bold text-[32px] text-white tracking-[-0.5px] mt-1">
                      {tier.title}
                    </h3>
                    <p className="font-inter text-[15px] text-white/45 leading-[1.7] mt-2 max-w-[480px]">
                      {tier.subtitle}
                    </p>
                  </div>
                  <span className="font-sora font-bold text-[80px] leading-none text-white/[0.04] select-none shrink-0 -mt-2">
                    {tier.number}
                  </span>
                </div>

                {/* Divider */}
                <div className="border-t border-white/[0.06] mb-8" />

                {/* Services list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {tier.services.map((service, i) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.35, ease }}
                      className="flex gap-3"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-spark mt-2 shrink-0" />
                      <div>
                        <p className="font-inter font-semibold text-[14px] text-white leading-snug">
                          {service.name}
                        </p>
                        <p className="font-inter text-[13px] text-white/40 leading-[1.6] mt-1">
                          {service.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>

      {/* Wave bottom — matches WhoWeServe bone bg */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[72px] block">
          <path d="M0,32 C180,72 360,0 540,36 C720,72 900,8 1080,40 C1260,72 1380,20 1440,32 L1440,72 L0,72 Z" fill="#F8F8F4" />
        </svg>
      </div>
    </section>
  );
}
