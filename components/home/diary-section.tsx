"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { PillLink, ScriptLabel, SectionHeading } from "@/components/home/shared"
import { pastEvents } from "@/lib/home-content"

export function DiarySection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scroll(direction: "left" | "right") {
    const container = scrollRef.current
    if (!container) return
    const amount = direction === "left" ? -340 : 340
    container.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section id="diary" className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <SectionHeading>From Our Diary</SectionHeading>
            <ScriptLabel className="mt-4 text-brand-cream/90">
              Memories of stories we&apos;ve already shared.
            </ScriptLabel>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
              aria-label="Previous event"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
              aria-label="Next event"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {pastEvents.map((event) => (
            <article
              key={`${event.date}-${event.title}`}
              className="w-72 shrink-0 snap-start rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                Date
              </p>
              <p className="mt-2 text-sm text-white/80">{event.date}</p>
              <p className="mt-5 text-xs uppercase tracking-[0.18em] text-white/50">
                Event
              </p>
              <p className="mt-2 font-medium leading-snug">{event.title}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 px-6 py-10 text-center md:px-12">
          <h3 className="font-heading text-xl uppercase tracking-[0.12em] md:text-2xl">
            Subscribe to our newsletter for events, stories, and news!
          </h3>
          <PillLink href="#reserve" variant="light" className="mt-8">
            Join the List
          </PillLink>
        </div>
      </div>
    </section>
  )
}
