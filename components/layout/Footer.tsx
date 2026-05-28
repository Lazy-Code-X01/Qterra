"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const XIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Strategy & Transformation", href: "/services/strategy-transformation" },
  { label: "Project Delivery & Implementation", href: "/services/project-delivery" },
  { label: "Digital Solutions & Analytics", href: "/services/digital-solutions" },
  { label: "Human Capital & Talent", href: "/services/human-capital" },
  { label: "Training & Capability Building", href: "/services/training-capability" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-qterra-black border-t border-white/[0.06] pt-16 pb-8 font-inter">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="QTerra" width={44} height={44} className="object-contain shrink-0" />
              <span className="font-sora font-semibold text-lg text-white tracking-tight">QTerra</span>
            </div>
            <p className="font-inter text-sm text-white/45 leading-[1.6] mt-3 max-w-[220px]">
              Integrated Strategy &amp; Execution. Helping organizations translate strategy into measurable, sustained results.
            </p>
            <div className="flex items-center gap-4 mt-5">
              {[
                { Icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
                { Icon: XIcon, href: "https://x.com", label: "X" },
                { Icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
                { Icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/40 hover:text-spark transition-colors duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Company */}
          <div className="flex flex-col gap-4">
            <p className="font-inter font-semibold text-[11px] tracking-[2px] text-white/30 uppercase">Company</p>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-inter text-sm text-white/55 hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div className="flex flex-col gap-4">
            <p className="font-inter font-semibold text-[11px] tracking-[2px] text-white/30 uppercase">Services</p>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-inter text-sm text-white/55 hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="flex flex-col gap-4">
            <p className="font-inter font-semibold text-[11px] tracking-[2px] text-white/30 uppercase">Get In Touch</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@qterragroup.com" className="flex items-center gap-2.5 text-sm text-white/55 hover:text-white transition-colors">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                info@qterragroup.com
              </a>
              {/* Replace with real QTerra phone number */}
              <div className="flex items-center gap-2.5 text-sm text-white/55">
                <Phone className="h-3.5 w-3.5 shrink-0" />
                +1 (234) 567 8900
              </div>
              {["Lagos, Nigeria", "Johannesburg, South Africa", "Accra, Ghana", "Benin, Benin Republic"].map((city) => (
                <div key={city} className="flex items-center gap-2.5 text-sm text-white/55">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  {city}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-[13px] text-white/30">
            &copy; {year} QTerra. All rights reserved.
          </p>
          <a
            href="https://zendsolv.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-[13px] text-white/30 hover:text-spark transition-colors duration-200"
          >
            Built by Zendsolv
          </a>
        </div>
      </div>
    </footer>
  );
}
