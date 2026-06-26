"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { shallotsMenuPages, type MenuPage } from "@/lib/shallots-menu"

function useIsWide(breakpoint = 768) {
  const [isWide, setIsWide] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`)
    const update = () => setIsWide(mediaQuery.matches)

    update()
    mediaQuery.addEventListener("change", update)
    return () => mediaQuery.removeEventListener("change", update)
  }, [breakpoint])

  return isWide
}

function MenuCoverPage({
  page,
}: {
  page: Extract<MenuPage, { type: "cover" }>
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6 text-center md:px-8">
      <p className="font-script text-3xl text-brand-dark/80 md:text-4xl lg:text-5xl">
        {page.tagline}
      </p>
      <h2 className="mt-4 text-4xl leading-none md:mt-6 md:text-5xl lg:text-6xl">
        {page.title}
      </h2>
      <p className="mt-3 font-heading text-2xl tracking-[0.2em] uppercase md:mt-4 md:text-3xl lg:text-4xl">
        {page.subtitle}
      </p>
      <div className="mt-8 h-px w-16 bg-brand-dark/25 md:mt-12" />
      <p className="mt-4 text-sm tracking-[0.25em] text-brand-dark/50 uppercase md:mt-6">
        Austin, Texas
      </p>
    </div>
  )
}

function MenuSectionPage({
  page,
  compact = false,
}: {
  page: Extract<MenuPage, { type: "section" }>
  compact?: boolean
}) {
  return (
    <div className="flex h-full flex-col">
      <h3 className="bg-secondary px-4 py-3 text-center text-xl md:py-4 md:text-2xl lg:text-3xl">
        {page.title}
      </h3>
      <ul
        className={cn(
          "flex flex-1 flex-col justify-center py-6 md:py-8 lg:py-10",
          compact ? "gap-3 px-4 md:gap-4 md:px-5 lg:px-6" : "gap-5 px-6 md:gap-6 md:px-8 lg:px-10"
        )}
      >
        {page.items.map((item) => (
          <li key={item.name} className="text-center">
            <p
              className={cn(
                "font-heading leading-snug tracking-[0.06em] uppercase",
                compact
                  ? "text-sm md:text-[0.95rem] lg:text-base"
                  : "text-base md:text-lg"
              )}
            >
              {item.name}
            </p>
            {item.description ? (
              <p
                className={cn(
                  "mt-1 leading-relaxed text-brand-dark/70",
                  compact ? "text-xs md:text-sm" : "text-sm md:text-[0.95rem]"
                )}
              >
                {item.description}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}

function MenuPageContent({
  page,
  compact = false,
}: {
  page: MenuPage
  compact?: boolean
}) {
  if (page.type === "cover") {
    return <MenuCoverPage page={page} />
  }

  return <MenuSectionPage page={page} compact={compact} />
}

function MenuPagePanel({
  page,
  side,
  compact = false,
}: {
  page: MenuPage
  side: "left" | "right"
  compact?: boolean
}) {
  return (
    <div
      className={cn(
        "aspect-[3/4] bg-brand-beige text-brand-dark",
        side === "left" && "border-r border-brand-dark/6",
        side === "right" && "border-l border-white/35"
      )}
    >
      <MenuPageContent page={page} compact={compact} />
    </div>
  )
}

function useBookGestures({
  goNext,
  goPrev,
  isFirst,
  isLast,
  isAnimating,
}: {
  goNext: () => void
  goPrev: () => void
  isFirst: boolean
  isLast: boolean
  isAnimating: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const pointerStart = useRef<{ x: number; y: number } | null>(null)

  const onPointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (isAnimating) return

      pointerStart.current = { x: event.clientX, y: event.clientY }
      event.currentTarget.setPointerCapture(event.pointerId)
    },
    [isAnimating]
  )

  const onPointerUp = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!pointerStart.current || isAnimating) return

      const deltaX = event.clientX - pointerStart.current.x
      const deltaY = event.clientY - pointerStart.current.y
      pointerStart.current = null

      const swipeThreshold = 48
      const tapThreshold = 14

      if (
        Math.abs(deltaX) >= swipeThreshold &&
        Math.abs(deltaX) > Math.abs(deltaY) * 1.2
      ) {
        if (deltaX < 0 && !isLast) goNext()
        else if (deltaX > 0 && !isFirst) goPrev()
        return
      }

      if (Math.abs(deltaX) > tapThreshold || Math.abs(deltaY) > tapThreshold) {
        return
      }

      const rect = ref.current?.getBoundingClientRect()
      if (!rect) return

      const tapRatio = (event.clientX - rect.left) / rect.width
      if (tapRatio < 0.38 && !isFirst) goPrev()
      else if (tapRatio > 0.62 && !isLast) goNext()
    },
    [goNext, goPrev, isAnimating, isFirst, isLast]
  )

  const onPointerCancel = useCallback(() => {
    pointerStart.current = null
  }, [])

  return {
    ref,
    onPointerDown,
    onPointerUp,
    onPointerCancel,
  }
}

export function MenuBook({ className }: { className?: string }) {
  const isWide = useIsWide()
  const [pageIndex, setPageIndex] = useState(0)
  const [direction, setDirection] = useState<"next" | "prev">("next")
  const [isAnimating, setIsAnimating] = useState(false)
  const [hoverZone, setHoverZone] = useState<"prev" | "next" | null>(null)

  const totalPages = shallotsMenuPages.length
  const spreadCount = Math.ceil(totalPages / 2)
  const spreadIndex = Math.floor(pageIndex / 2)
  const leftPageIndex = isWide ? spreadIndex * 2 : pageIndex
  const rightPageIndex = leftPageIndex + 1
  const hasRightPage = rightPageIndex < totalPages

  const isFirst = isWide ? spreadIndex === 0 : pageIndex === 0
  const isLast = isWide
    ? spreadIndex >= spreadCount - 1
    : pageIndex >= totalPages - 1

  const goToPage = useCallback(
    (nextIndex: number, nextDirection: "next" | "prev") => {
      if (
        isAnimating ||
        nextIndex < 0 ||
        nextIndex >= totalPages ||
        nextIndex === pageIndex
      ) {
        return
      }

      setDirection(nextDirection)
      setIsAnimating(true)
      setPageIndex(nextIndex)
      window.setTimeout(() => setIsAnimating(false), 320)
    },
    [isAnimating, pageIndex, totalPages]
  )

  const goNext = useCallback(() => {
    if (isWide) {
      const nextSpread = spreadIndex + 1
      if (nextSpread < spreadCount) {
        goToPage(nextSpread * 2, "next")
      }
      return
    }

    goToPage(pageIndex + 1, "next")
  }, [goToPage, isWide, pageIndex, spreadCount, spreadIndex])

  const goPrev = useCallback(() => {
    if (isWide) {
      const prevSpread = spreadIndex - 1
      if (prevSpread >= 0) {
        goToPage(prevSpread * 2, "prev")
      }
      return
    }

    goToPage(pageIndex - 1, "prev")
  }, [goToPage, isWide, spreadIndex])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") goNext()
      if (event.key === "ArrowLeft") goPrev()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [goNext, goPrev])

  const gestures = useBookGestures({
    goNext,
    goPrev,
    isFirst,
    isLast,
    isAnimating,
  })

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (isAnimating) return

      const rect = event.currentTarget.getBoundingClientRect()
      const ratio = (event.clientX - rect.left) / rect.width

      if (!isFirst && ratio < 0.38) {
        setHoverZone("prev")
      } else if (!isLast && ratio > 0.62) {
        setHoverZone("next")
      } else {
        setHoverZone(null)
      }
    },
    [isAnimating, isFirst, isLast]
  )

  const leftPage = shallotsMenuPages[leftPageIndex]
  const rightPage = hasRightPage ? shallotsMenuPages[rightPageIndex] : null

  const indicatorCount = isWide ? spreadCount : totalPages
  const activeIndicator = isWide ? spreadIndex : pageIndex

  return (
    <div className={cn("mx-auto w-full max-w-md md:max-w-5xl", className)}>
      <div className="relative perspective-[1200px]">
        {!isWide ? (
          <div
            className="absolute top-2 bottom-2 -left-1.5 z-[2] w-3 rounded-l-sm bg-[linear-gradient(90deg,#8b7355_0%,#c4a882_35%,#8b7355_70%,#6b5740_100%)] shadow-[inset_-2px_0_4px_rgba(0,0,0,0.2)]"
            aria-hidden
          />
        ) : null}
        {isWide ? (
          <div
            className="pointer-events-none absolute inset-y-0 left-1/2 z-[3] w-3.5 -translate-x-1/2 bg-[linear-gradient(90deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.04)_35%,rgba(255,255,255,0.35)_50%,rgba(0,0,0,0.04)_65%,rgba(0,0,0,0.12)_100%)]"
            aria-hidden
          />
        ) : null}

        <div
          ref={gestures.ref}
          role="group"
          aria-label="Menu book pages. Swipe or tap the sides to turn pages."
          className={cn(
            "relative cursor-default touch-pan-y overflow-hidden rounded-sm border border-brand-dark/8 shadow-2xl select-none",
            !isFirst &&
              hoverZone === "prev" &&
              "cursor-w-resize before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-[1] before:w-[38%] before:bg-gradient-to-r before:from-brand-dark/8 before:to-transparent before:content-['']",
            !isLast &&
              hoverZone === "next" &&
              "cursor-e-resize after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-[1] after:w-[38%] after:bg-gradient-to-l after:from-brand-dark/8 after:to-transparent after:content-['']"
          )}
          onPointerDown={gestures.onPointerDown}
          onPointerUp={gestures.onPointerUp}
          onPointerCancel={gestures.onPointerCancel}
          onPointerMove={handlePointerMove}
          onPointerLeave={() => setHoverZone(null)}
        >
          {!isFirst ? (
            <div
              className={cn(
                "pointer-events-none absolute top-1/2 left-3 z-[5] flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-brand-dark/12 text-brand-dark/55 opacity-0 transition-opacity duration-[180ms] [@media(hover:none)]:hidden",
                hoverZone === "prev" && "opacity-100"
              )}
              aria-hidden
            >
              <ChevronLeft className="size-5" />
            </div>
          ) : null}
          {!isLast ? (
            <div
              className={cn(
                "pointer-events-none absolute top-1/2 right-3 z-[5] flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-brand-dark/12 text-brand-dark/55 opacity-0 transition-opacity duration-[180ms] [@media(hover:none)]:hidden",
                hoverZone === "next" && "opacity-100"
              )}
              aria-hidden
            >
              <ChevronRight className="size-5" />
            </div>
          ) : null}

          <div
            key={isWide ? `spread-${spreadIndex}` : `page-${pageIndex}`}
            className={cn(
              isWide ? "grid grid-cols-2" : "block",
              direction === "next"
                ? "animate-menu-page-enter-next"
                : "animate-menu-page-enter-prev"
            )}
          >
            {isWide ? (
              <>
                <MenuPagePanel page={leftPage} side="left" compact />
                {rightPage ? (
                  <MenuPagePanel page={rightPage} side="right" compact />
                ) : (
                  <div
                    className="aspect-[3/4] border-l border-white/35 bg-brand-cream/60 text-brand-dark/30"
                    aria-hidden
                  />
                )}
              </>
            ) : (
              <MenuPagePanel page={leftPage} side="left" />
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={goPrev}
          disabled={isFirst || isAnimating}
          aria-label="Previous page"
          className="inline-flex size-11 items-center justify-center rounded-full border border-brand-beige/30 text-brand-beige transition-colors enabled:hover:bg-brand-beige/10 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft className="size-5" />
        </button>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {Array.from({ length: indicatorCount }, (_, index) => {
            const targetPageIndex = isWide ? index * 2 : index
            const page = shallotsMenuPages[targetPageIndex]

            return (
              <button
                key={isWide ? `spread-${index}` : `page-${index}`}
                type="button"
                onClick={() =>
                  goToPage(
                    targetPageIndex,
                    targetPageIndex > pageIndex ? "next" : "prev"
                  )
                }
                disabled={isAnimating}
                aria-label={
                  isWide
                    ? `Go to pages ${index * 2 + 1} and ${index * 2 + 2}`
                    : page.type === "cover"
                      ? "Go to cover page"
                      : `Go to ${page.title} page`
                }
                aria-current={index === activeIndicator ? "page" : undefined}
                className={cn(
                  "h-2 rounded-full transition-all",
                  index === activeIndicator
                    ? "w-6 bg-brand-beige"
                    : "w-2 bg-brand-beige/35 hover:bg-brand-beige/60"
                )}
              />
            )
          })}
        </div>

        <button
          type="button"
          onClick={goNext}
          disabled={isLast || isAnimating}
          aria-label="Next page"
          className="inline-flex size-11 items-center justify-center rounded-full border border-brand-beige/30 text-brand-beige transition-colors enabled:hover:bg-brand-beige/10 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  )
}
