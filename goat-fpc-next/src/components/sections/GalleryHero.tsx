import { WarliArt } from "@/components/decorative/WarliArt";
import { GreenWave } from "@/components/decorative/GreenWave";

export function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Warli Art Left Border */}
      <div className="absolute left-0 top-0 h-full w-16 md:w-24">
        <WarliArt variant="left" className="h-full w-full opacity-60" />
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl">
            Gallery & News
          </h1>
          <p className="mt-6 text-lg text-text-muted">
            Explore our journey through images, videos, articles, events and
            inspiring stories from the field.
          </p>
        </div>
      </div>

      {/* Green Wave */}
      <GreenWave />
    </section>
  );
}
