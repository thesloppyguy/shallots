import { ImagePlaceholder, ScriptLabel, SectionHeading } from "@/components/home/shared"

export function ChefSection() {
  return (
    <section id="chef" className="bg-brand-beige text-brand-dark">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <div className="aspect-[4/5] lg:aspect-[3/4]">
              <ImagePlaceholder
                src="/assets/dish.jpg"
                alt="Chef at Shallots kitchen"
              />
            </div>
          </div>

          <div>
            <SectionHeading>Our Kitchen</SectionHeading>
            <p className="mt-6 text-base leading-relaxed text-brand-dark/80 md:text-lg md:leading-8">
              The brigade at Shallots is guided by experience and curiosity —
              transforming fresh, seasonal ingredients into dishes that reflect a
              deep connection to the culinary traditions of India. From
              time-honored recipes to modern interpretations, every detail is
              considered: slow cooking, balanced flavors, and pairings that
              elevate the quality of each ingredient.
            </p>
            <ScriptLabel className="mt-8 text-brand-dark/70">
              dishes from our kitchen
            </ScriptLabel>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <div className="overflow-hidden rounded-2xl sm:col-span-2">
            <div className="aspect-[16/10]">
              <ImagePlaceholder
                src="/assets/slide2.png"
                alt="Tandoori specialties"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <div className="aspect-square sm:aspect-auto sm:h-full">
              <ImagePlaceholder
                src="/assets/dish.jpg"
                alt="Signature risotto-style dish"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
