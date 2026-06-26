"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { ImagePlaceholder, SectionHeading } from "@/components/home/shared"
import { signatureDishes } from "@/lib/home-content"

export function SourcingSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scroll(direction: "left" | "right") {
    const container = scrollRef.current
    if (!container) return
    const amount = direction === "left" ? -320 : 320
    container.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section className="bg-brand-beige text-brand-dark">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading>Authentic Ingredients</SectionHeading>
          <p className="mt-6 text-base leading-relaxed text-brand-dark/80 md:text-lg md:leading-8">
            We source spices, grains, and specialty ingredients from across
            India and trusted local partners — from Kashmiri saffron and
            Malabar pepper to heirloom lentils and stone-ground flours. This
            commitment supports artisan producers and ensures ingredients stay
            fresh, essential for a cuisine that remains authentic and deeply
            connected to its roots.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="mb-4 flex justify-end gap-2 md:absolute md:-top-16 md:right-0 md:mb-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="inline-flex size-11 items-center justify-center rounded-full border border-brand-dark/20 transition-colors hover:bg-brand-dark/5"
              aria-label="Previous dish"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="inline-flex size-11 items-center justify-center rounded-full border border-brand-dark/20 transition-colors hover:bg-brand-dark/5"
              aria-label="Next dish"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {signatureDishes.map((dish) => (
              <figure
                key={dish.title}
                className="w-64 shrink-0 snap-start sm:w-72"
              >
                <div className="overflow-hidden rounded-2xl">
                  <div className="aspect-square">
                    <ImagePlaceholder src={dish.image} alt={dish.title} />
                  </div>
                </div>
                <figcaption className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-brand-dark/70">
                  {dish.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
