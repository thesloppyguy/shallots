import { ImagePlaceholder, SectionHeading } from "@/components/home/shared"

export function SpecialMenusSection() {
  return (
    <section id="special-menus" className="bg-brand-beige text-brand-dark">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading className="text-brand-dark">
              Weekend &amp; Special Menus
            </SectionHeading>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-dark/80 md:text-lg">
              Our menus, designed for life&apos;s great occasions — family
              brunches, festive celebrations, and the holidays you look forward
              to all year.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <div className="aspect-[4/5]">
                <ImagePlaceholder
                  src="/assets/dish.webp"
                  alt="Weekend brunch menu"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm sm:mt-12">
              <div className="aspect-[4/5]">
                <ImagePlaceholder
                  src="/assets/slide2.webp"
                  alt="Special occasion menu"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
