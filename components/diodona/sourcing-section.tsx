"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import { SectionTitle } from "@/components/diodona/shared"
import { shallotsImages, pastEvents } from "@/lib/diodona-content"
import { cn } from "@/lib/utils"

export function SourcingSection() {
  return (
    <section className="bg-brand-beige px-6 py-20 text-brand-dark md:px-10 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle>Filiere autentiche</SectionTitle>
        <p className="mt-8 text-lg leading-relaxed">
          Collaboriamo con produttori della zona per portare in tavola formaggi
          di Casale Roccolo di Binago, farine e uova del Giumelli di Olgiate
          Comasco e lo zafferano La Collina d&apos;Oro di Faloppio. Questa
          scelta sostiene i piccoli artigiani del gusto e garantisce ingredienti
          sempre freschi, fondamentali per una cucina che vuole rimanere
          autentica e profondamente radicata nel territorio.
        </p>
      </div>
    </section>
  )
}

export function DishCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  const updateProgress = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const maxScroll = track.scrollWidth - track.clientWidth
    if (maxScroll <= 0) {
      setProgress(1)
      return
    }
    setProgress(track.scrollLeft / maxScroll)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    track.addEventListener("scroll", updateProgress, { passive: true })
    updateProgress()
    return () => track.removeEventListener("scroll", updateProgress)
  }, [updateProgress])

  function scrollBy(direction: -1 | 1) {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({
      left: direction * track.clientWidth * 0.85,
      behavior: "smooth",
    })
  }

  return (
    <section className="overflow-hidden px-6 pb-20 md:px-10 md:pb-28">
      <div className="relative mx-auto max-w-6xl">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory [scrollbar-width:none] gap-3 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {shallotsImages.dishes.map((src, i) => (
            <div
              key={src}
              className="w-[70vw] shrink-0 snap-start sm:w-[45vw] md:w-[32%]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Piatto ${i + 1}`}
                className="h-auto w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            className="text-brand-dark transition-opacity hover:opacity-60"
            aria-label="Precedente"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 1000 1000"
              fill="currentColor"
            >
              <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" />
            </svg>
          </button>
          <div className="relative h-[5px] flex-1 bg-brand-dark/10">
            <div
              className="absolute inset-y-0 left-0 bg-brand-dark transition-[width] duration-150"
              style={{ width: `${Math.max(progress * 100, 8)}%` }}
            />
          </div>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            className="text-brand-dark transition-opacity hover:opacity-60"
            aria-label="Successivo"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 1000 1000"
              fill="currentColor"
            >
              <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export function DiarySection() {
  return (
    <section id="eventi-passati" className={cn("px-6 py-20 md:px-10 md:py-28")}>
      <div className="mx-auto max-w-6xl">
        <SectionTitle>Dal nostro diario dei ricordi</SectionTitle>
        <p className="mt-6 text-center text-lg">
          Ricordi di storie che abbiamo già vissuto.
        </p>

        <div
          id="diary"
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {pastEvents.map((event) => (
            <article key={event.href} className="flex flex-col">
              <div className="flex items-end gap-2 border-b border-brand-dark/30 pb-2">
                <p className="shrink-0 text-sm">Data:</p>
                <ScriptDate>{event.date}</ScriptDate>
              </div>
              <p className="mt-4 text-sm">Evento:</p>
              <p className="-mt-1 text-left text-lg leading-relaxed font-medium md:text-xl">
                <a href={event.href} className="hover:underline">
                  {event.title}
                </a>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ScriptDate({ children }: { children: React.ReactNode }) {
  return (
    <span className="-rotate-3 text-left [&>span]:font-script [&>span]:text-3xl [&>span]:leading-none md:[&>span]:text-4xl">
      <span>{children}</span>
    </span>
  )
}
