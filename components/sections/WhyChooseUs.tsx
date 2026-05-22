"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, BarChart2, Lightbulb, Shield } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Process Excellence",
    description: "Structured, repeatable delivery frameworks that reduce risk and maximize outcomes across every engagement.",
  },
  {
    icon: BarChart2,
    title: "Strategic Planning",
    description: "Evidence-based strategy grounded in data, sector knowledge, and real-world implementation experience.",
  },
  {
    icon: Lightbulb,
    title: "Adaptive Solutions",
    description: "We design solutions that fit your context, not off-the-shelf frameworks applied without thought.",
  },
  {
    icon: Shield,
    title: "Governance & Accountability",
    description: "Clear reporting structures, performance monitoring, and transparent communication throughout every project.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-bone py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            viewport={{ once: true }}
          >
            <p className="font-inter font-semibold text-[11px] tracking-[2px] text-olive uppercase">
              Why Choose Us
            </p>
            <h2 className="font-sora font-bold text-[38px] leading-[1.15] tracking-[-0.5px] text-qterra-black mt-2">
              The QTerra Difference
            </h2>
            <p className="font-inter text-base text-[#555] leading-[1.7] mt-3">
              We combine deep domain expertise with practical delivery capability, giving our clients both the thinking and the doing.
            </p>

            <div className="flex flex-col gap-6 mt-8">
              {features.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="h-11 w-11 shrink-0 rounded-[10px] bg-[#f0f5ef] flex items-center justify-center text-forest">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-inter font-semibold text-[15px] text-qterra-black">{feat.title}</p>
                      <p className="font-inter text-sm text-[#666] leading-[1.6] mt-1">{feat.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden">
              {/* Replace with real QTerra consulting/team photo */}
              <Image
                src="/images/why-choose-placeholder.png"
                alt="QTerra Consulting"
                width={540}
                height={580}
                className="object-cover w-full h-[580px]"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-qterra-black rounded-xl px-5 py-3.5 shadow-xl">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-spark shrink-0" />
                <p className="font-inter font-semibold text-[12px] text-white">Trusted across sectors</p>
              </div>
              <p className="font-inter text-[11px] text-white/50 mt-1">Public · Private · Development</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
