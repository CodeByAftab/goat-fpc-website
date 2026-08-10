import { ServicesHero } from "@/components/sections/ServicesHero";
import { WhatWeOffer } from "@/components/sections/WhatWeOffer";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTABanner } from "@/components/sections/CTABanner";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <WhatWeOffer />
      <WhyChooseUs />
      <CTABanner />
    </>
  );
}
