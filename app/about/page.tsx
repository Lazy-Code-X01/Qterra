import AboutHero from "@/components/sections/about/AboutHero";
import OurStory from "@/components/sections/about/OurStory";
import MissionVision from "@/components/sections/about/MissionVision";
import CoreValues from "@/components/sections/about/CoreValues";
import TeamSection from "@/components/sections/about/TeamSection";
import CTABanner from "@/components/sections/CTABanner";

export const metadata = {
  title: "About QTerra | Integrated Professional Services",
  description: "Learn about QTerra, our story, mission, vision, values, and the team behind Africa's integrated professional services firm.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <TeamSection />
      <CTABanner />
    </>
  );
}
