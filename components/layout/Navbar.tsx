"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Briefcase,
  TrendingUp,
  CheckSquare,
  Cpu,
  Users,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const Logo = () => (
  <Image
    src="/logo.png"
    alt="QTerra"
    width={32}
    height={32}
    className="shrink-0 object-contain"
    priority
  />
);

const services = [
  {
    icon: Briefcase,
    title: "Management Consulting",
    description: "Driving organizational efficiency, policy formulation, and high-impact corporate strategies.",
    href: "/services/management-consulting",
  },
  {
    icon: TrendingUp,
    title: "Financial Advisory",
    description: "Capital restructuring, transaction advisory, risk management, and investment planning.",
    href: "/services/financial-advisory",
  },
  {
    icon: CheckSquare,
    title: "Project Management",
    description: "End-to-end delivery of complex infrastructural and development initiatives across Africa.",
    href: "/services/project-management",
  },
  {
    icon: Cpu,
    title: "Digital Solutions",
    description: "Custom enterprise tech, digital transformation, cloud migrations, and analytics.",
    href: "/services/digital-solutions",
  },
  {
    icon: Users,
    title: "HR & Talent Management",
    description: "Strategic workforce development, executive search, and HR policy alignment.",
    href: "/services/hr-talent-management",
  },
  {
    icon: GraduationCap,
    title: "Training & Capability Development",
    description: "Bespoke professional development, training modules, and workforce upskilling.",
    href: "/services/training-capability",
  },
];

export default function Navbar() {
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 60;

  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesExpanded, setIsMobileServicesExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Contact", href: "/contact" },
  ];

  const isLinkActive = (link: typeof navLinks[number]) => {
    if (link.href.startsWith("#")) return activeLink === link.name;
    if (link.name === "Services") return pathname === "/services" || pathname.startsWith("/case-studies");
    return pathname === link.href;
  };

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 w-full h-16 font-inter"
        animate={{
          backgroundColor: isScrolled ? "rgba(13,15,13,0.95)" : "rgba(13,15,13,1)",
          boxShadow: isScrolled ? "0 4px 24px rgba(0,0,0,0.5)" : "0 0px 0px rgba(0,0,0,0)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="max-w-6xl mx-auto w-full h-full flex items-center justify-between px-6 sm:px-10 lg:px-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-0 group shrink-0">
            <Logo />
            <span className="font-sora font-semibold text-lg tracking-tight text-white group-hover:text-spark transition-colors ">
              Terra
            </span>
          </Link>

          {/* Center Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 h-full">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="h-full flex items-center relative"
                onMouseEnter={() => link.hasDropdown && setIsServicesHovered(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesHovered(false)}
              >
                {link.hasDropdown ? (
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                      isLinkActive(link) ? "text-white bg-white/[0.08] px-3 py-1 rounded-lg" : "text-white/55 hover:text-white px-3 py-1"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${isServicesHovered ? "rotate-180" : ""}`} />
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isLinkActive(link) ? "text-white bg-white/[0.08] px-3 py-1 rounded-lg" : "text-white/55 hover:text-white px-3 py-1"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a href="/contact" className="hidden md:block">
              <button className="bg-spark text-qterra-black font-inter font-semibold text-sm px-5 py-2 rounded-md hover:bg-[#bce03e] transition-colors duration-200">
                Get in Touch
              </button>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 text-white/70 hover:text-white focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>

        {/* ── Full-width Mega Menu anchored to header ── */}
        <AnimatePresence>
          {isServicesHovered && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 z-50 bg-[#0f120f] border-t border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
                <div className="grid grid-cols-12 gap-8">

                  {/* Services grid — 9 cols */}
                  <div className="col-span-9 grid grid-cols-3 gap-2">
                    {services.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <motion.a
                          key={idx}
                          href={item.href}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05, duration: 0.2 }}
                          className="group/service flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-200 cursor-pointer"
                        >
                          <div className="h-10 w-10 shrink-0 rounded-lg bg-forest/20 flex items-center justify-center text-spark group-hover/service:bg-spark group-hover/service:text-qterra-black transition-all duration-300">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h5 className="font-sora font-semibold text-sm text-white leading-snug">
                              {item.title}
                            </h5>
                            <p className="text-[11px] text-white/40 leading-relaxed font-light mt-1">
                              {item.description}
                            </p>
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>

                  {/* Right CTA panel — 3 cols */}
                  <div className="col-span-3 border-l border-white/5 pl-8 flex flex-col justify-between">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[1.5px] uppercase text-spark font-inter mb-3">
                        Why QTerra
                      </p>
                      <h4 className="font-sora font-bold text-lg text-white leading-snug mb-3">
                        Integrated solutions across Africa.
                      </h4>
                      <p className="text-xs text-white/45 font-inter font-light leading-relaxed">
                        From Lagos to Johannesburg: one partner for strategy, finance, tech, and talent.
                      </p>
                    </div>
                    <Link
                      href="/services"
                      className="mt-6 inline-flex items-center gap-2 bg-spark text-qterra-black font-inter font-semibold text-xs px-4 py-2.5 rounded-md hover:bg-[#bce03e] transition-colors duration-200 self-start"
                    >
                      View all services
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ backgroundColor: "#0D0F0D" }}
            className="fixed top-0 left-0 w-full z-50 md:hidden overflow-hidden flex flex-col pt-4 pb-8 shadow-2xl font-inter"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 pb-4 border-b border-white/5">
              <div className="flex items-center gap-0">
                <Logo />
                <span className="font-sora font-semibold text-lg tracking-tight text-white ">
                  Terra
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white/70 hover:text-white focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Drawer Links */}
            <div className="flex flex-col px-6 pt-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsMobileServicesExpanded(!isMobileServicesExpanded)}
                        className="flex items-center justify-between text-left text-base font-semibold text-white/80 py-2 hover:text-white w-full"
                      >
                        <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="flex-1 text-left">
                          {link.name}
                        </Link>
                        <ChevronDown
                          className={`h-4 w-4 text-spark transition-transform duration-300 ${
                            isMobileServicesExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={
                          isMobileServicesExpanded
                            ? { height: "auto", opacity: 1 }
                            : { height: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pl-4 border-l border-white/5 space-y-3 mt-1"
                      >
                        {services.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-2 py-3 text-sm text-white/60 hover:text-spark"
                          >
                            <span className="h-1.5 w-1.5 bg-spark rounded-full shrink-0" />
                            <span>{item.title}</span>
                          </a>
                        ))}
                      </motion.div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => {
                        setActiveLink(link.name);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-base font-semibold py-2 hover:text-white transition-colors ${
                        isLinkActive(link) ? "text-spark" : "text-white/80"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Drawer CTA */}
            <div className="px-6 pt-8 mt-6 border-t border-white/5">
              <a href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full bg-spark text-qterra-black font-inter font-semibold text-sm py-3 rounded-md hover:bg-[#bce03e] transition-colors duration-200 flex items-center justify-center gap-2">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
