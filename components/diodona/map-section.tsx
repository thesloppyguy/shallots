import { MapPin, Phone } from "lucide-react"

import { SectionTitle } from "@/components/diodona/shared"
import { siteConfig } from "@/lib/site"

export function MapSection() {
  const { address, phone, phoneHref, hours, mapsUrl, mapsEmbedUrl } = siteConfig
  const fullAddress = `${address.street}, ${address.city}, ${address.region} ${address.postalCode}`

  return (
    <section
      id="visit"
      className="bg-brand-beige px-6 py-20 text-brand-dark md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle>Visit Us</SectionTitle>

        <div className="mt-14 flex flex-col gap-10">
          <div className="overflow-hidden rounded-sm border border-brand-dark/10 shadow-xl">
            <iframe
              title={`${siteConfig.name} location on Google Maps`}
              src={mapsEmbedUrl}
              className="aspect-[4/3] w-full border-0 lg:aspect-auto lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <p className="sr-only">{fullAddress}</p>
      </div>
    </section>
  )
}
