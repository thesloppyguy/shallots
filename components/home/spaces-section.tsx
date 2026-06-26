"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { ImagePlaceholder, PillLink, SectionHeading } from "@/components/home/shared"
import { diningSpaces } from "@/lib/home-content"

export function SpacesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scroll(direction: "left" | "right") {
    const container = scrollRef.current
    if (!container) return
    const amount = direction === "left" ? -container.clientWidth : container.clientWidth
    container.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section id="spaces" className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <SectionHeading>The Dining Spaces</SectionHeading>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
              aria-label="Previous space"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
              aria-label="Next space"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {diningSpaces.map((space) => (
            <article
              key={space.name}
              className="w-[85vw] shrink-0 snap-center sm:w-[60vw] lg:w-[38vw]"
            >
              <div className="overflow-hidden rounded-2xl">
                <div className="aspect-[4/3]">
                  <ImagePlaceholder src={space.image} alt={space.name} />
                </div>
              </div>
              <h3 className="font-script mt-6 text-2xl text-brand-cream md:text-3xl">
                {space.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
                {space.description}
              </p>
            </article>
          ))}
        </div>

        <PillLink href="#reserve" variant="light" className="mt-12">
          Plan Your Visit
        </PillLink>
      </div>
    </section>
  )
}
