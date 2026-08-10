import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";
import { WarliArt } from "@/components/decorative/WarliArt";
import { GreenWave } from "@/components/decorative/GreenWave";

export function MembershipHero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Warli Art Left Border */}
      <div className="absolute left-0 top-0 h-full w-16 md:w-24">
        <WarliArt variant="left" className="h-full w-full opacity-60" />
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="font-heading text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl">
              Membership
            </h1>
            <p className="text-lg font-medium text-primary">
              Join Hands. Grow Together.
            </p>
            <p className="max-w-lg text-text-muted">
              Become a member of Goat Agri FPC and enjoy exclusive benefits,
              support and opportunities to grow with us.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#apply"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
              >
                Apply Online Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex items-center gap-3 pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm text-text-muted">
                <span className="font-semibold text-primary">1,500+</span> Farmers Already Associated
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/20">
                      <span className="text-4xl">🐐</span>
                    </div>
                    <p className="text-sm text-text-muted">Membership Image</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/10" />
            <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-accent-orange/10" />
          </div>
        </div>
      </div>

      {/* Green Wave */}
      <GreenWave />
    </section>
  );
}
