"use client"

import { useEffect, useState } from "react"

import { shallotsImages } from "@/lib/diodona-content"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const headerNavClass = "relative z-[60] rounded-full border transition-colors"

export function SiteHeader() {
  const [onBeigeSection, setOnBeigeSection] = useState(false)

  useEffect(() => {
    const header = document.querySelector("header")
    const spacesSection = document.querySelector("#spaces")
    if (!header || !spacesSection) return

    const headerHeight = header.getBoundingClientRect().height

    function onScroll() {
      const rect = spacesSection!.getBoundingClientRect()
      setOnBeigeSection(rect.top <= headerHeight)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navTone = onBeigeSection
    ? "border-brand-beige text-brand-beige"
    : "border-white text-white"

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-[50px]">
        <a
          href="#"
          className="relative z-[60] block w-[80px] rounded-full border-2 border-white/50 p-2"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={shallotsImages.logo}
            alt="Shallots"
            className="h-auto w-full"
          />
        </a>
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={cn(
              headerNavClass,
              "flex size-10 items-center justify-center",
              navTone
            )}
          >
            <InstagramIcon className="size-5" />
          </a>
          <a
            href="#menu"
            className={cn(
              headerNavClass,
              "w-[116px] px-6 py-2.5 text-center md:px-6 md:py-3",
              navTone
            )}
          >
            Menu
          </a>
        </div>
      </div>
    </header>
  )
}
