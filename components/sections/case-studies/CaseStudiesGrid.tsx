"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const filters = [
  "All Projects",
  "Management Consulting",
  "Financial Advisory",
  "Project Management",
  "Digital Solutions",
  "HR & Talent",
];

const cases = [
  {
    image: "/images/case-1.png",
    category: "Management Consulting",
    title: "Restructuring a Federal Agency's Procurement Framework Across 12 States",
    date: "March 2025",
    href: "/case-studies/federal-procurement",
  },
  {
    image: "/images/case-2.png",
    category: "Financial Advisory",
    title: "Mobilizing $40M in Blended Finance for a Regional Infrastructure Project",
    date: "November 2023",
    href: "/case-studies/blended-finance",
  },
  {
    image: "/images/case-3.png",
    category: "Digital Solutions",
    title: "Building a Real-Time Performance Dashboard for a State Ministry",
    date: "August 2023",
    href: "/case-studies/performance-dashboard",
  },
  {
    image: "/images/case-4.png",
    category: "Project Management",
    title: "Delivering a Multi-Stakeholder Urban Development Program on Schedule",
    date: "May 2023",
    href: "/case-studies/urban-development",
  },
  {
    image: "/images/case-5.png",
    category: "HR & Talent",
    title: "Designing a Workforce Capability Framework for a National Institution",
    date: "January 2023",
    href: "/case-studies/workforce-capability",
  },
  {
    image: "/images/case-6.png",
    category: "Management Consulting",
    title: "Leading a Corporate Strategy Refresh for a Pan-African Financial Group",
    date: "October 2022",
    href: "/case-studies/corporate-strategy",
  },
];

export default function CaseStudiesGrid() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filtered =
    activeFilter === "All Projects"
      ? cases
      : cases.filter((c) => c.category === activeFilter);

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="text-center mb-10"
        >
          <p className="font-inter font-semibold text-[11px] tracking-[2px] text-olive uppercase mb-3">
            Our Work
          </p>
          <h2 className="font-sora font-bold text-[40px] leading-[1.1] tracking-[-1px] text-qterra-black">
            Work That Speaks for Itself
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="border-t border-b border-[#e8e8e4] py-3 mb-4"
        >
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => {
              const isActive = activeFilter === f;
              return (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`font-inter font-medium text-[13px] px-4 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-spark text-qterra-black font-semibold"
                      : "text-[#666] hover:text-qterra-black"
                  }`}
                >
                  {f === "All Projects" && (
                    <span className="inline-flex items-center gap-1.5">
                      {f} <ArrowUpRight className="h-3 w-3" />
                    </span>
                  )}
                  {f !== "All Projects" && f}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Results count */}
        <p className="font-inter text-[13px] text-[#999] mb-8">
          Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease }}
                className="h-full"
              >
                <Link href={item.href} className="group flex flex-col h-full">
                  {/* Image */}
                  <div className="w-full h-[220px] rounded-xl overflow-hidden bg-[#e8e8e4] relative shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Meta */}
                  <div className="mt-5 border-b border-[#e8e8e4] pb-5 flex flex-col flex-1">
                    <p className="font-inter font-semibold text-[11px] tracking-[1.5px] text-olive uppercase mb-2">
                      {item.category}
                    </p>
                    <h3 className="font-sora font-semibold text-[18px] text-qterra-black leading-[1.3] group-hover:text-forest transition-colors duration-200 flex-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-inter text-[13px] text-[#999]">{item.date}</span>
                      <span className="inline-flex items-center gap-1 font-inter font-semibold text-[13px] text-forest group-hover:gap-2 transition-all duration-200">
                        Read More <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
