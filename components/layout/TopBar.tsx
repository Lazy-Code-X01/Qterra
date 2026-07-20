import { Mail, MapPin, Phone } from "lucide-react";


const Divider = () => (
  <div className="h-3 w-[1px] bg-white/15 shrink-0" />
);

export default function TopBar() {
  return (
    <div className="h-[34px] w-full bg-forest border-b border-white/5 text-[11px] font-medium font-inter text-white/70">
      <div className="max-w-6xl mx-auto w-full h-full flex items-center justify-between px-6 sm:px-10 lg:px-16">

        {/* Left: Phone · Email · Address */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+2348106885938" className="flex items-center gap-1.5 hover:text-white transition-colors shrink-0">
            <Phone className="h-3 w-3 text-spark" />
            <span>+234 810 688 5938</span>
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


      </div>
    </div>
  );
}
