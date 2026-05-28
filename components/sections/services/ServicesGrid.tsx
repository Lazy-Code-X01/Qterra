"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const cards = [
  {
    number: "01",
    name: "Strategy & Transformation",
    description:
      "Enterprise strategy design, procurement frameworks, cost optimization, and business process improvement programs.",
    href: "/services/strategy-transformation",
  },
  {
    number: "02",
    name: "Project Delivery & Implementation",
    description:
      "Project and program management, governance, controls, performance monitoring, and strategic initiative execution.",
    href: "/services/project-delivery",
  },
  {
    number: "03",
    name: "Digital Solutions & Analytics",
    description:
      "Process automation, data analytics platforms, AI-enabled decision support, and operational performance tools.",
    href: "/services/digital-solutions",
  },
  {
    number: "04",
    name: "Human Capital & Talent Management",
    description:
      "Workforce planning, talent acquisition, leadership development, performance management, and HR operations support.",
    href: "/services/human-capital",
  },
  {
    number: "05",
    name: "Training & Capability Building",
    description:
      "Executive training, professional workshops, applied capability programs, and specialized training including AI-driven project management.",
    href: "/services/training-capability",
  },
];

const DEFAULT_ACTIVE = 1; // Project Delivery

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
              Integrated Solutions Across Five Practice Areas
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="font-inter text-[16px] text-[#555] leading-[1.75] lg:pb-1"
          >
            From high-value strategic advisory to operational delivery and capability development. QTerra integrates everything into one unified model.
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
