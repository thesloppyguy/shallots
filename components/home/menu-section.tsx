import { ImagePlaceholder, PillLink, ScriptLabel, SectionHeading } from "@/components/home/shared"

export function MenuSection() {
  return (
    <section id="menu" className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <ScriptLabel className="mb-4 text-brand-cream">honest recipes</ScriptLabel>
          <SectionHeading>Menu</SectionHeading>
          <p className="mt-8 text-base leading-relaxed text-white/90 md:text-lg md:leading-8">
            For those who love the freedom to choose, our à la carte menu offers
            regional specialties and traditional dishes reimagined with
            creativity. On weekends, we offer a curated experience designed for
            family lunches and gatherings with friends — guided by our passion
            for Indian cuisine. Both paths celebrate selected ingredients and
            meticulous attention to detail for a complete gastronomic journey.
          </p>
          <p className="mt-6 font-medium text-brand-cream">
            Enjoy a special lunch or dinner!
          </p>
          <PillLink href="#reserve" variant="light" className="mt-8">
            Reserve Now
          </PillLink>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-2xl bg-brand-cream/15 lg:col-span-1">
            <div className="flex aspect-[3/4] flex-col items-center justify-center gap-4 p-8 text-center">
              <ImagePlaceholder
                src="/assets/shallots-logo-white.png"
                alt="Shallots"
                className="h-16 w-auto object-contain opacity-90"
              />
              <p className="font-heading text-sm uppercase tracking-[0.25em] text-white/80">
                À La Carte
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-brand-cream/10 lg:col-span-1">
            <div className="flex aspect-[3/4] flex-col items-center justify-center gap-4 p-8 text-center">
              <ImagePlaceholder
                src="/assets/shallots-logo-white.png"
                alt="Shallots"
                className="h-16 w-auto object-contain opacity-70"
              />
              <p className="font-heading text-sm uppercase tracking-[0.25em] text-white/70">
                Tasting Menu
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl lg:col-span-1 lg:row-span-1">
            <div className="aspect-[3/4] md:aspect-auto md:h-full md:min-h-[420px]">
              <ImagePlaceholder
                src="/assets/dish.jpg"
                alt="Indian dish at Shallots"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
