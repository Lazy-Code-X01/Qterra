import { Mail, MapPin, Phone, Clock } from "lucide-react";

const XIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3 w-3 fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3 w-3 fill-current">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3 w-3 fill-current">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const Divider = () => (
  <div className="h-3 w-[1px] bg-white/15 shrink-0" />
);

export default function TopBar() {
  return (
    <div className="h-[34px] w-full bg-forest border-b border-white/5 text-[11px] font-medium font-inter text-white/70">
      <div className="max-w-6xl mx-auto w-full h-full flex items-center justify-between px-6 sm:px-10 lg:px-16">

        {/* Left: Phone · Email · Address */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+1234567890" className="flex items-center gap-1.5 hover:text-white transition-colors shrink-0">
            <Phone className="h-3 w-3 text-spark" />
            <span>+1 (234) 567 8900</span>
          </a>
          <Divider />
          <a href="mailto:info@qterragroup.com" className="flex items-center gap-1.5 hover:text-white transition-colors shrink-0">
            <Mail className="h-3 w-3 text-spark" />
            <span>info@qterragroup.com</span>
          </a>
          <Divider />
          <div className="flex items-center gap-1.5 shrink-0">
            <MapPin className="h-3 w-3 text-spark" />
            <span>Lagos &middot; Johannesburg &middot; Accra &middot; Benin</span>
          </div>
        </div>

        {/* Mobile: email only */}
        <a href="mailto:info@qterragroup.com" className="flex md:hidden items-center gap-1.5 hover:text-white transition-colors">
          <Mail className="h-3 w-3 text-spark" />
          <span>info@qterragroup.com</span>
        </a>

        {/* Right: Hours · Socials */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden sm:flex items-center gap-1.5">
            <Clock className="h-3 w-3 text-spark" />
            <span>Mon – Fri: 09:00 – 17:00</span>
          </div>
          <Divider />
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="X">
              <XIcon />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
