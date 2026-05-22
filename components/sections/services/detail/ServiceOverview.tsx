"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.25, 0.1, 0.25, 1] as const;

interface Props {
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
}

export default function ServiceOverview({ eyebrow, headline, paragraphs, imageSrc, imageAlt }: Props) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* Image left */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease }} className="lg:col-span-5">
            <div className="rounded-[20px] overflow-hidden w-full h-[480px] relative">
              <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
            </div>
          </motion.div>
          {/* Text right */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease }} className="lg:col-span-7 flex flex-col gap-5">
            <p className="font-inter font-semibold text-[11px] tracking-[2px] text-olive uppercase">{eyebrow}</p>
            <h2 className="font-sora font-bold text-[38px] leading-[1.15] tracking-[-0.5px] text-qterra-black">{headline}</h2>
            {paragraphs.map((p, i) => (
              <p key={i} className="font-inter text-[16px] text-[#444] leading-[1.75]">{p}</p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
