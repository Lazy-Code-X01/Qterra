"use client";

// Replace placeholder testimonials with real client quotes when provided by QTerra

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote: "QTerra brought both strategic clarity and practical execution to our transformation program. Their team understood our context from day one.",
    name: "Executive Director",
    title: "Federal Government Agency, Nigeria",
    image: "/images/testimonial-nigeria.png",
  },
  {
    quote: "The financial advisory support we received from QTerra helped us structure a funding approach that actually worked. Highly professional team.",
    name: "Chief Finance Officer",
    title: "Mid-size Corporation, Ghana",
    image: "/images/testimonial-ghana.png",
  },
  {
    quote: "What impressed us most was that QTerra stayed accountable to outcomes, not just deliverables. That is rare in consulting.",
    name: "Managing Director",
    title: "Development Organization, South Africa",
    image: "/images/testimonial-sa.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="font-inter font-semibold text-[11px] tracking-[2px] text-olive uppercase">
            Client Testimonials
          </p>
          <h2 className="font-sora font-bold text-[38px] leading-tight tracking-[-0.5px] text-qterra-black mt-2">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col bg-bone border border-[#e8e8e4] rounded-2xl px-7 py-8"
            >
              <span className="font-sora font-bold text-[64px] text-spark leading-[0.5] mb-4 select-none">
                &ldquo;
              </span>
              <p className="font-inter text-base text-[#333] leading-[1.75] italic flex-1">
                {t.quote}
              </p>
              <div className="border-t border-[#e8e8e4] mt-5 pt-5 flex items-center gap-3">
                <div className="relative h-11 w-11 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-inter font-semibold text-sm text-qterra-black">{t.name}</p>
                  <p className="font-inter text-[13px] text-[#666] mt-0.5">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
