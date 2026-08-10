import { WarliArt } from "@/components/decorative/WarliArt";
import { GreenWave } from "@/components/decorative/GreenWave";

export function ContactHero() {
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
              Contact Us
            </h1>
            <p className="max-w-lg text-text-muted">
              We are here to help and collaborate. Reach out to us for any
              queries, support or partnership opportunities.
            </p>
            <p className="font-heading text-lg italic text-primary">
              &ldquo;Together we grow, together we prosper.&rdquo;
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/20">
                      <span className="text-4xl">🏢</span>
                    </div>
                    <p className="text-sm text-text-muted">Office Image</p>
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
