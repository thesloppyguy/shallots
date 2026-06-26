import { cn } from "@/lib/utils"

export function ScriptLabel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        "font-script text-2xl tracking-wide md:text-3xl lg:text-4xl",
        className
      )}
    >
      {children}
    </p>
  )
}

export function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        "font-heading text-4xl font-semibold uppercase tracking-[0.12em] md:text-5xl lg:text-6xl",
        className
      )}
    >
      {children}
    </h2>
  )
}

export function PillLink({
  href,
  children,
  variant = "light",
  className,
}: {
  href: string
  children: React.ReactNode
  variant?: "light" | "dark" | "outline"
  className?: string
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-opacity hover:opacity-85 md:px-8 md:py-3.5 md:text-sm",
        variant === "light" &&
          "bg-brand-cream text-brand-dark",
        variant === "dark" &&
          "bg-brand-dark text-white",
        variant === "outline" &&
          "border border-white/40 bg-transparent text-white hover:bg-white/10",
        className
      )}
    >
      {children}
    </a>
  )
}

export function ImagePlaceholder({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      className={cn("h-full w-full object-cover", className)}
    />
  )
}
