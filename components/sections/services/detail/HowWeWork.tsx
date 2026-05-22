"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.25, 0.1, 0.25, 1] as const;

interface Step {
  number: string;
  title: string;
  description: string;
}

interface Props {
  eyebrow: string;
  headline: string;
  subtext: string;
  steps: Step[];
  imageSrc: string;
  imageAlt: string;
}

export default function HowWeWork({ eyebrow, headline, subtext, steps, imageSrc, imageAlt }: Props) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* Left — steps */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease }} className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <p className="font-inter font-semibold text-[11px] tracking-[2px] text-olive uppercase mb-2">{eyebrow}</p>
              <h2 className="font-sora font-bold text-[38px] leading-[1.15] tracking-[-0.5px] text-qterra-black">{headline}</h2>
              <p className="font-inter text-[16px] text-[#555] leading-[1.7] mt-3">{subtext}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {steps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * 0.1, duration: 0.4, ease }}
                  className="bg-[#F8F8F4] border border-[#e8e8e4] rounded-xl p-5">
                  <span className="inline-block font-sora font-bold text-[13px] text-spark bg-spark/10 rounded-full px-3 py-1">{step.number}</span>
                  <h4 className="font-sora font-semibold text-[16px] text-qterra-black mt-3">{step.title}</h4>
                  <p className="font-inter text-[14px] text-[#666] leading-[1.6] mt-2">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Right — image */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease }} className="lg:col-span-5">
            <div className="rounded-[20px] overflow-hidden w-full h-[480px] relative">
              <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
