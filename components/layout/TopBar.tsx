import { Mail, MapPin, Phone } from "lucide-react";

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3 w-3 fill-current">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
            <span>Lagos &middot; Johannesburg &middot; Toronto &middot; Chicago</span>
          </div>
        </div>

        {/* Mobile: email only */}
        <a href="mailto:info@qterragroup.com" className="flex md:hidden items-center gap-1.5 hover:text-white transition-colors">
          <Mail className="h-3 w-3 text-spark" />
          <span>info@qterragroup.com</span>
        </a>

        {/* Right: Socials */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
