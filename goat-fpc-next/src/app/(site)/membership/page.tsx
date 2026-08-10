import { MembershipHero } from "@/components/sections/MembershipHero";
import { BenefitsEligibility } from "@/components/sections/BenefitsEligibility";
import { MembershipProcess } from "@/components/sections/MembershipProcess";
import { ApplyMembership } from "@/components/sections/ApplyMembership";

export default function MembershipPage() {
  return (
    <>
      <MembershipHero />
      <BenefitsEligibility />
      <MembershipProcess />
      <ApplyMembership />
    </>
  );
}
