import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { allCaseStudies } from "@/lib/caseStudies";
import CTABanner from "@/components/sections/CTABanner";

export function generateStaticParams() {
  return allCaseStudies.map((c) => ({ slug: c.slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = allCaseStudies.find((c) => c.slug === params.slug);
  if (!study) notFound();

  const related = allCaseStudies.filter((c) => study.relatedSlugs.includes(c.slug));

  return (
    <>
      {/* ─── SECTION 1: Hero ─────────────────────────────────────────────── */}
      <section className="bg-qterra-black relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-qterra-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-28 flex flex-col items-center text-center">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 font-inter text-[13px] text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">
              Home
            </Link>
            <span className="text-white/25">›</span>
            <Link href="/services" className="hover:text-white/70 transition-colors">
              Services
            </Link>
            <span className="text-white/25">›</span>
            <Link href="/case-studies" className="hover:text-white/70 transition-colors">
              Case Studies
            </Link>
          </div>

          {/* Heading */}
          <h1 className="font-sora font-bold text-[48px] leading-[1.15] tracking-[-1.5px] text-white max-w-[760px] mx-auto mt-5">
            {study.title}
          </h1>

          {/* Tagline */}
          <p className="font-inter text-[18px] text-white/55 text-center mt-4 max-w-[600px]">
            {study.tagline}
          </p>

          {/* Date */}
          <p className="font-inter text-[13px] text-white/35 text-center mt-3">
            {study.date}
          </p>
        </div>
      </section>

      {/* ─── SECTION 2: Metrics strip ────────────────────────────────────── */}
      <section className="bg-white border-b border-[#e8e8e4] py-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-row items-center justify-center gap-16">
            {study.metrics.map((metric, i) => (
              <div key={i} className="flex items-center gap-16">
                <div className="flex flex-col items-center">
                  <span className="font-sora font-bold text-[40px] tracking-[-1px] text-qterra-black leading-none">
                    {metric.value}
                  </span>
                  <span className="font-inter text-[13px] text-[#999] mt-1">
                    {metric.label}
                  </span>
                </div>
                {i < study.metrics.length - 1 && (
                  <div className="w-px h-10 bg-[#e8e8e4]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: Content ──────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Left sidebar */}
            <aside className="lg:col-span-3">
              <div className="sticky top-28">
                <p className="font-inter font-semibold text-[11px] tracking-[2px] text-[#999] uppercase">
                  In This Study
                </p>
                <nav className="mt-4 space-y-3">
                  <a
                    href="#challenge"
                    className="block font-inter font-semibold text-[14px] text-[#333] hover:text-qterra-black transition-colors"
                  >
                    The Challenge
                  </a>
                  <a
                    href="#approach"
                    className="block font-inter font-semibold text-[14px] text-[#333] hover:text-qterra-black transition-colors"
                  >
                    Our Approach
                  </a>
                  <a
                    href="#results"
                    className="block font-inter font-semibold text-[14px] text-[#333] hover:text-qterra-black transition-colors"
                  >
                    Results
                  </a>
                </nav>

                <div className="mt-10">
                  <p className="font-inter font-semibold text-[11px] tracking-[2px] text-[#999] uppercase">
                    Service Area
                  </p>
                  <p className="font-inter font-semibold text-[14px] text-spark mt-2">
                    {study.category}
                  </p>
                </div>
              </div>
            </aside>

            {/* Right content */}
            <div className="lg:col-span-9">

              {/* Challenge */}
              <div id="challenge">
                <div className="w-8 h-[3px] bg-spark mb-6" />
                <h2 className="font-sora font-bold text-[24px] text-qterra-black mb-5">
                  The Challenge
                </h2>
                <p className="font-inter text-[16px] text-[#444] leading-[1.8]">
                  {study.challenge}
                </p>
              </div>

              <div className="border-t border-[#e8e8e4] my-10" />

              {/* Approach */}
              <div id="approach">
                <div className="w-8 h-[3px] bg-spark mb-6" />
                <h2 className="font-sora font-bold text-[24px] text-qterra-black mb-5">
                  Our Approach
                </h2>
                <div className="space-y-5">
                  {study.approach.map((para, i) => (
                    <p key={i} className="font-inter text-[16px] text-[#444] leading-[1.8]">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#e8e8e4] my-10" />

              {/* Results */}
              <div id="results">
                <div className="w-8 h-[3px] bg-spark mb-6" />
                <h2 className="font-sora font-bold text-[24px] text-qterra-black mb-5">
                  Results
                </h2>
                <ul className="space-y-3">
                  {study.results.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-[7px] flex-shrink-0 w-2 h-2 rounded-full bg-spark" />
                      <span className="font-inter text-[15px] text-[#333] leading-[1.7]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: Related case studies ─────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-[#F8F8F4] py-16">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
            <h2 className="font-sora font-bold text-[28px] text-qterra-black mb-8">
              Related Work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/case-studies/${item.slug}`}
                  className="group block"
                >
                  {/* Image */}
                  <div className="w-full h-[220px] rounded-xl overflow-hidden bg-[#e8e8e4] relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Meta */}
                  <div className="mt-5 border-b border-[#e8e8e4] pb-5">
                    <p className="font-inter font-semibold text-[11px] tracking-[1.5px] text-olive uppercase mb-2">
                      {item.category}
                    </p>
                    <h3 className="font-sora font-semibold text-[18px] text-qterra-black leading-[1.3] group-hover:text-forest transition-colors duration-200">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-inter text-[13px] text-[#999]">{item.date}</span>
                      <span className="inline-flex items-center gap-1 font-inter font-semibold text-[13px] text-forest group-hover:gap-2 transition-all duration-200">
                        Read More <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── SECTION 5: CTA Banner ────────────────────────────────────────── */}
      <CTABanner />
    </>
  );
}
