"use client";

// Awaiting real team photos, names, and titles from QTerra.
// Current placeholders to be replaced before go-live.

import { motion } from "framer-motion";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const team = [
  { name: "Team Member", title: "Managing Partner" },
  { name: "Team Member", title: "Director, Financial & Investment Advisory" },
  { name: "Team Member", title: "Director, Project Management & Implementation" },
  { name: "Team Member", title: "Head, Digital Solutions & Business Tools" },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <p className="font-inter font-semibold text-[11px] tracking-[2px] text-olive uppercase">
            Meet the Team
          </p>
          <h2 className="font-sora font-bold text-[40px] leading-tight tracking-[-1px] text-qterra-black mt-2">
            The People Behind QTerra
          </h2>
          <p className="font-inter text-base text-[#555] mt-3 max-w-[500px] leading-[1.7]">
            Senior practitioners with deep domain expertise and a shared commitment to delivering results.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              className="flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-80px" }}
            >
              {/* Replace with real team member photo */}
              <div className="w-full aspect-[3/4] bg-[#e8e8e4] rounded-2xl" />
              <h4 className="font-sora font-semibold text-base text-qterra-black mt-3.5">
                {member.name}
              </h4>
              <p className="font-inter text-sm text-olive mt-1">
                {member.title}
              </p>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive hover:text-forest transition-colors mt-2 w-fit"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
