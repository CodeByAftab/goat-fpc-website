import { HomeHero } from "@/components/sections/HomeHero";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { GalleryPreview } from "@/components/sections/GalleryPreview";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ImpactSection />
      <ServicesSection />
      <NewsSection />
      <GalleryPreview />
    </>
  );
}
