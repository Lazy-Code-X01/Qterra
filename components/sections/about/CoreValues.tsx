"use client";

import { motion } from "framer-motion";
import { Shield, BarChart2, Lightbulb, Handshake } from "lucide-react";

const values = [
  {
    icon: Shield,
    name: "Integrity",
    description: "We hold ourselves to the highest standards of professional conduct in every engagement, every conversation, and every deliverable.",
    number: "01",
  },
  {
    icon: BarChart2,
    name: "Accountability",
    description: "We measure ourselves by outcomes, not outputs. Our clients' results are the only metric that matters to us.",
    number: "02",
  },
  {
    icon: Lightbulb,
    name: "Innovation",
    description: "We bring fresh thinking to complex problems, combining global best practice with deep contextual understanding of the African operating environment.",
    number: "03",
  },
  {
    icon: Handshake,
    name: "Partnership",
    description: "We build long-term relationships grounded in trust, transparency, and a genuine commitment to our clients' growth, not just the duration of an engagement.",
    number: "04",
  },
];

export default function CoreValues() {
  return (
    <section className="w-full bg-[#0D0F0D] py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <motion.div
          className="flex flex-col items-center text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="font-inter font-semibold text-[11px] tracking-[2px] text-spark uppercase">
            Core Values
          </p>
          <h2 className="font-sora font-bold text-[40px] leading-tight tracking-[-1px] text-white mt-2">
            The Principles We Work By
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={i}
                className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 flex flex-col overflow-hidden hover:bg-white/[0.06] hover:border-spark/30 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true, margin: "-80px" }}
              >
                {/* Faded number background */}
                <span className="absolute top-3 right-4 font-sora font-bold text-[64px] leading-none text-white/[0.04] select-none group-hover:text-spark/[0.08] transition-colors duration-300">
                  {val.number}
                </span>

                {/* Icon */}
                <div className="h-11 w-11 rounded-xl bg-spark/10 flex items-center justify-center text-spark group-hover:bg-spark group-hover:text-qterra-black transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Spark line — grows on hover */}
                <div className="w-8 h-[2px] bg-spark/40 group-hover:w-12 group-hover:bg-spark mt-5 transition-all duration-300" />

                <h4 className="font-sora font-semibold text-lg text-white mt-4">
                  {val.name}
                </h4>
                <p className="font-inter text-sm text-white/45 leading-[1.7] mt-2 flex-1">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
