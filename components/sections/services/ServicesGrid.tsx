"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const cards = [
  {
    number: "01",
    name: "Management Consulting",
    description:
      "Strategic advisory, procurement strategy, vendor management, and operational efficiency programs for public and private sector organizations.",
    href: "/services/management-consulting",
  },
  {
    number: "02",
    name: "Financial Advisory",
    description:
      "Capital mobilization, investment structuring, financial sustainability planning, and funding optimization across projects and organizations.",
    href: "/services/financial-advisory",
  },
  {
    number: "03",
    name: "Project Management",
    description:
      "End-to-end program planning, coordination, delivery support, governance, and data-driven decision advisory for complex initiatives.",
    href: "/services/project-management",
  },
  {
    number: "04",
    name: "Digital Solutions",
    description:
      "Business process automation, data analytics platforms, operational performance monitoring, and digital decision-support tools.",
    href: "/services/digital-solutions",
  },
  {
    number: "05",
    name: "HR & Talent Management",
    description:
      "Talent acquisition, employee development, payroll administration, and performance management frameworks to build effective workforces.",
    href: "/services/hr-talent-management",
  },
  {
    number: "06",
    name: "Training & Capability Development",
    description:
      "Executive training, professional workshops, organizational capacity building, and certification programs tailored to institutional needs.",
    href: "/services/training-capability",
  },
];

const DEFAULT_ACTIVE = 1; // Financial Advisory

export default function ServicesGrid() {
  const [activeIndex, setActiveIndex] = useState(DEFAULT_ACTIVE);

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Two-column header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="font-inter font-semibold text-[11px] tracking-[2px] text-olive uppercase mb-3">
              What We Offer
            </p>
            <h2 className="font-sora font-bold text-[40px] leading-[1.1] tracking-[-1px] text-qterra-black">
              Integrated Solutions Across Six Practice Areas
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="font-inter text-[16px] text-[#555] leading-[1.75] lg:pb-1"
          >
            From high-value strategic advisory to operational delivery and human capital development. QTerra brings everything under one roof.
          </motion.p>
        </div>

        {/* Card grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          onMouseLeave={() => setActiveIndex(DEFAULT_ACTIVE)}
        >
          {cards.map((card, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <Link
                  href={card.href}
                  className={`flex flex-col h-full min-h-[260px] rounded-2xl p-8 border transition-all duration-300 ${
                    isActive
                      ? "bg-spark border-spark shadow-[0_8px_32px_rgba(168,211,46,0.2)] -translate-y-1"
                      : "bg-white border-[#e8e8e4]"
                  }`}
                >
                  {/* Top dash */}
                  <div
                    className={`w-8 h-[3px] rounded-full mb-6 transition-colors duration-300 ${
                      isActive ? "bg-qterra-black/30" : "bg-[#d0d8c8]"
                    }`}
                  />

                  {/* Name */}
                  <h3 className="font-sora font-bold text-[20px] leading-[1.2] text-qterra-black">
                    {card.name}
                  </h3>

                  {/* Description */}
                  <p
                    className={`font-inter text-[14px] leading-[1.75] mt-3 flex-1 transition-colors duration-300 ${
                      isActive ? "text-qterra-black/65" : "text-[#666]"
                    }`}
                  >
                    {card.description}
                  </p>

                  {/* Circle arrow */}
                  <div className="flex justify-end mt-6">
                    <div
                      className={`h-11 w-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive ? "bg-white/30" : "bg-qterra-black"
                      }`}
                    >
                      <ArrowRight
                        className={`h-4 w-4 transition-all duration-300 ${
                          isActive ? "text-qterra-black" : "text-white"
                        }`}
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
