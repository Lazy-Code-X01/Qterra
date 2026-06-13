"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Abimbola Pariola",
    title: "Partner, QTerra",
    tagline: "Strategy that gets built.",
    bio: "A strategy, development, and execution leader with more than 20 years of international experience delivering complex, high-impact initiatives across multiple markets. Formally trained in AI for Business Strategy through MIT Sloan, she brings a disciplined, execution-oriented approach that integrates strategic vision, capital structuring, operational delivery, and long-term capability building.",
    image: "/images/team/abimbola-pariola.png",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <p className="font-inter font-semibold text-[13px] tracking-[2px] text-olive uppercase">
            Meet the Team
          </p>
          <h2 className="font-sora font-bold text-[40px] leading-tight tracking-[-1px] text-qterra-black mt-2">
            The People Behind QTerra
          </h2>
          <p className="font-inter text-base text-[#555] mt-3 max-w-[500px] leading-[1.7]">
            Senior practitioners with deep domain expertise and a shared commitment to delivering results.
          </p>
        </div>

        {/* Single member — centred */}
        <div className="flex justify-center">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="flex flex-col sm:flex-row gap-10 items-start max-w-3xl w-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-80px" }}
            >
              {/* Photo */}
              <div className="relative w-full sm:w-[260px] shrink-0 aspect-[3/4] rounded-2xl overflow-hidden bg-[#e8e8e4]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center gap-4 py-2">
                <div>
                  <h4 className="font-sora font-bold text-[24px] text-qterra-black leading-tight">
                    {member.name}
                  </h4>
                  <p className="font-inter font-semibold text-[14px] text-olive mt-1">
                    {member.title}
                  </p>
                </div>
                <p className="font-sora italic text-[15px] text-[#3F4E2E] leading-snug">
                  &ldquo;{member.tagline}&rdquo;
                </p>
                <div className="w-8 h-[2px] bg-spark rounded-full" />
                <p className="font-inter text-[14px] text-[#555] leading-[1.75]">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
