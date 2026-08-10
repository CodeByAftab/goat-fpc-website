import { WarliArt } from "@/components/decorative/WarliArt";
import { GreenWave } from "@/components/decorative/GreenWave";

export function ServicesHero() {
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
            <div className="flex items-center gap-4">
              <div className="h-0.5 w-12 bg-primary" />
              <span className="text-sm font-medium uppercase tracking-wider text-text-muted">
                OUR SERVICES
              </span>
              <div className="h-0.5 w-12 bg-primary" />
            </div>
            <h1 className="font-heading text-4xl font-bold leading-tight text-primary md:text-5xl">
              Comprehensive Services for Goat Farmers
            </h1>
            <p className="max-w-lg text-lg text-text-muted">
              We provide end-to-end support to empower farmers, improve productivity
              and build a sustainable goat farming ecosystem.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/images/services/services-hero.jpg"
                alt="Goat farming services"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
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
