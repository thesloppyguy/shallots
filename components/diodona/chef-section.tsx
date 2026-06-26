"use client"

import { useEffect } from "react"

import {
  ImgRotate,
  ScriptLabel,
  SectionTitle,
} from "@/components/diodona/shared"
import { shallotsImages } from "@/lib/diodona-content"

export function ChefSection() {
  useEffect(() => {
    const targetSections = document.querySelectorAll(".change-background-body")

    function getClosestSectionToCenter() {
      const viewportCenter = window.innerHeight * 0.6
      let closestSection: Element | null = null
      let closestDistance = Infinity

      targetSections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const sectionCenter = rect.top + rect.height / 2
        const distance = Math.abs(viewportCenter - sectionCenter)

        if (
          distance < closestDistance &&
          rect.top < window.innerHeight &&
          rect.bottom > 0
        ) {
          closestDistance = distance
          closestSection = section
        }
      })

      return closestSection
    }

    function onScroll() {
      const activeSection = getClosestSectionToCenter()
      document.body.classList.remove("bg-brand-dark")
      if (activeSection) {
        document.body.classList.add("bg-brand-dark")
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    onScroll()
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      document.body.classList.remove("bg-brand-dark")
    }
  }, [])

  return (
    <>
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle>Our Kitchen</SectionTitle>
          <p className="mt-8 text-lg leading-relaxed">
            The brigade at Shallots is guided by experience and curiosity —
            transforming fresh, seasonal ingredients into dishes that reflect a
            deep connection to the culinary traditions of India. From
            time-honored recipes to modern interpretations, every detail is
            considered: slow cooking, balanced flavors, and pairings that
            elevate the quality of each ingredient.
          </p>
        </div>
      </section>

      <section className="change-background-body px-6 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 md:gap-8">
          <ImgRotate rotate="-1.47deg">
            <div className="overflow-hidden shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={shallotsImages.chefEzio}
                alt="Chef at Shallots kitchen"
                className="h-auto w-full object-cover"
              />
            </div>
          </ImgRotate>
          <ImgRotate rotate="-0.2deg">
            <div className="overflow-hidden shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={shallotsImages.piatti1}
                alt="Dish from Shallots"
                className="h-auto w-full object-cover"
              />
            </div>
          </ImgRotate>
          <div className="relative">
            <ImgRotate rotate="1deg">
              <div className="overflow-hidden shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shallotsImages.piatti2}
                  alt="Signature dish from Shallots"
                  className="h-auto w-full object-cover"
                />
              </div>
            </ImgRotate>
            <div className="pointer-events-none absolute right-0 bottom-4 left-0 text-center md:bottom-8">
              <ScriptLabel>
                dishes from
                <br />
                our kitchen
              </ScriptLabel>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
