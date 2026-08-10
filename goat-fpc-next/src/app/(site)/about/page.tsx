import { AboutHero } from "@/components/sections/AboutHero";
import { OrgProfile } from "@/components/sections/OrgProfile";
import { VisionMission } from "@/components/sections/VisionMission";
import { OrgStructure } from "@/components/sections/OrgStructure";
import { ImpactSection } from "@/components/sections/ImpactSection";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OrgProfile />
      <VisionMission />
      <OrgStructure />
      <ImpactSection />
    </>
  );
}
