import { ContactHero } from "@/components/sections/ContactHero";
import { ContactCards } from "@/components/sections/ContactCards";
import { ContactFormMap } from "@/components/sections/ContactFormMap";
import { SocialConnect } from "@/components/sections/SocialConnect";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactCards />
      <ContactFormMap />
      <SocialConnect />
    </>
  );
}
