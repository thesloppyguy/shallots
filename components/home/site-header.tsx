"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

import { ImagePlaceholder, PillLink } from "@/components/home/shared"
import { navLinks } from "@/lib/home-content"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a href="#" className="relative z-50 block w-28 md:w-36">
            <ImagePlaceholder
              src="/assets/shallots-logo-white.webp"
              alt={siteConfig.name}
              className="h-auto w-full object-contain"
              priority
            />
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="relative z-50 inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white md:px-8 md:py-3 md:text-sm"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
            Menu
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-brand-dark/95 transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!open}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-heading text-3xl uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70 md:text-4xl"
            >
              {link.label}
            </a>
          ))}
          <PillLink
            href="#reserve"
            variant="light"
            className="mt-4"
          >
            Reserve
          </PillLink>
        </nav>
      </div>
    </>
  )
}
