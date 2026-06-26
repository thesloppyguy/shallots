"use client"

import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

export function ImgRotate({
  children,
  className,
  rotate = "-1.9deg",
}: {
  children: React.ReactNode
  className?: string
  rotate?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting)
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "origin-center transition-transform duration-1000 ease-out",
        inView
          ? "translate-y-0 rotate-[var(--rotate)]"
          : "translate-y-[30px] rotate-0",
        className
      )}
      style={{ ["--rotate" as string]: rotate }}
    >
      {children}
    </div>
  )
}

export function ScriptLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="block -rotate-3 text-center [&>span]:font-script [&>span]:text-[clamp(2.8rem,3.2vw,5rem)] [&>span]:leading-[2.2rem]">
      <span>{children}</span>
    </span>
  )
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center md:text-5xl lg:text-6xl">
      {children}
    </h2>
  )
}

export function BigText({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl text-center [&_p]:text-lg [&_p]:leading-relaxed md:[&_p]:text-xl">
      {children}
    </div>
  )
}
