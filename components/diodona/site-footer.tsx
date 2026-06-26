import { MapPin, Phone } from "lucide-react"

import { shallotsImages } from "@/lib/diodona-content"
import { siteConfig } from "@/lib/site"

export function SiteFooter() {
  const { address, phone, phoneHref, hours, mapsUrl, name } = siteConfig

  return (
    <footer
      id="footer"
      className="bg-brand-dark px-6 pt-16 pb-10 text-brand-beige md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1fr_auto_1fr] md:items-start">
          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <h3 className="font-heading text-base tracking-[0.12em] uppercase">
                Our Timings
              </h3>
              <dl className="mt-4 space-y-3">
                {hours.schedule.map((entry) => (
                  <div key={entry.days}>
                    <dt className="font-medium">{entry.days}</dt>
                    <dd className="text-brand-beige/80">{entry.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="space-y-3">
              <a
                href={`tel:${phoneHref}`}
                className="flex items-center gap-2.5 hover:underline"
              >
                <Phone className="size-4 shrink-0" aria-hidden />
                {phone}
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:underline"
              >
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>
                  {address.street},
                  <br />
                  {address.city}, {address.region} {address.postalCode}
                </span>
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={shallotsImages.logo}
              alt={name}
              className="h-auto w-28 brightness-0 invert md:w-32"
            />
          </div>

          <div className="space-y-4 text-sm md:text-right">
            <nav className="flex flex-col gap-2">
              <a href="#menu" className="hover:underline">
                Menu
              </a>
              <a href="#visit" className="hover:underline">
                Visit Us
              </a>
              <a href={`tel:${phoneHref}`} className="hover:underline">
                Reserve
              </a>
            </nav>
            <p className="pt-4 text-xs text-brand-beige/60">
              © {new Date().getFullYear()} {name}. Modern Indian Cuisine, Austin
              TX.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
