'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, PlayCircle, ArrowRight } from 'lucide-react';

const bullets = [
  'Strategic Advisory & Transformation',
  'Financial & Investment Advisory',
  'Digital Solutions & Analytics',
  'Human Capital & Capability Development',
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT — Image */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: '-80px' }}
          >
            {/* Main image */}
            <div className="rounded-2xl overflow-hidden w-full">
              {/* Replace with real QTerra team or office photo */}
              <Image
                src="/images/about-placeholder.png"
                alt="QTerra Team"
                width={480}
                height={520}
                className="object-cover w-full h-[520px]"
              />
            </div>

            {/* Stat card — top right */}
            <div className="absolute -top-6 -right-6 bg-[#A8D32E] rounded-[10px] px-4 py-3 shadow-lg">
              <p className="font-sora font-bold text-2xl text-[#0D0F0D] leading-none">15+</p>
              <p className="font-inter text-[11px] text-[#0D0F0D]/70 mt-1 leading-tight">
                Years Combined
                <br />
                Expertise
              </p>
            </div>

            {/* Quote card — bottom left */}
            <div className="absolute -bottom-6 -left-6 bg-[#0D0F0D] rounded-xl px-5 py-4 shadow-xl max-w-[260px]">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="relative h-9 w-9 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/logo.png"
                    alt="QTerra Leadership"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <p className="font-inter font-semibold text-[13px] text-white leading-none">
                    QTerra Leadership
                  </p>
                  <p className="font-inter text-[12px] text-white/50 mt-0.5">QTerra</p>
                </div>
              </div>
              <p className="font-inter italic text-[13px] text-white/70 leading-[1.6]">
                &ldquo;QTerra exists to close the gap between strategy and execution across
                Africa.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* RIGHT — Text */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="font-inter font-semibold text-[11px] tracking-[2px] text-[#6B7C4A] uppercase">
              About QTerra
            </p>
            <h2 className="font-sora font-bold text-[36px] leading-[1.15] tracking-[-0.5px] text-[#0D0F0D]">
              An Integrated Firm Built for Africa&apos;s Most Complex Challenges.
            </h2>
            <p className="font-inter text-base text-[#444] leading-[1.75]">
              QTerra is an integrated professional services firm providing strategic advisory,
              operational support, and capability development to organizations across the public and
              private sectors.
            </p>
            <p className="font-inter text-base text-[#444] leading-[1.75]">
              With offices in Lagos, Johannesburg, Accra, and Benin, we combine consulting
              expertise, financial advisory, project delivery support, and digital solutions to help
              organizations improve performance and achieve sustainable growth.
            </p>

            {/* Bullets */}
            <ul className="flex flex-col gap-3 mt-1">
              {bullets.map((b, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-2.5"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  viewport={{ once: true, margin: '-80px' }}
                >
                  <CheckCircle2 className="h-[18px] w-[18px] text-[#A8D32E] shrink-0" />
                  <span className="font-inter text-sm text-[#333] font-medium">{b}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mt-3">
              <a href="#about">
                <button className="inline-flex items-center gap-2 bg-[#0D0F0D] text-white font-inter font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#1a1f1a] transition-colors duration-200">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </button>
              </a>
              <a href="#about">
                <button className="inline-flex items-center gap-2 bg-transparent text-[#0D0F0D] font-inter font-semibold text-sm px-6 py-3 rounded-lg border border-[#0D0F0D] hover:bg-[#0D0F0D]/5 transition-colors duration-200">
                  <PlayCircle className="h-4 w-4" />
                  Watch Intro Video
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
