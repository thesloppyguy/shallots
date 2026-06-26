import { PillLink, SectionHeading } from "@/components/home/shared"
import { deliveryPartners } from "@/lib/home-content"
import { siteConfig } from "@/lib/site"

export function ReserveSection() {
  const { address, phone, phoneHref, hours } = siteConfig
  const fullAddress = `${address.street}, ${address.city}, ${address.region} ${address.postalCode}`

  return (
    <section id="reserve" className="bg-brand-beige text-brand-dark">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading>Book a Table</SectionHeading>
            <p className="mt-6 max-w-md text-base leading-relaxed text-brand-dark/80 md:text-lg">
              Plan your special day with us. Modern Indian cuisine, crafted to
              perfection — whether it&apos;s an intimate dinner, a family
              celebration, or a gathering with friends.
            </p>
            <PillLink href={`tel:${phoneHref}`} variant="dark" className="mt-8">
              Reserve Now
            </PillLink>

            <div className="mt-12 space-y-3 text-sm md:text-base">
              <p>
                <span className="font-semibold uppercase tracking-[0.12em]">
                  Hours
                </span>
              </p>
              <p className="text-brand-dark/80">{hours.weekday}</p>
              <p className="text-brand-dark/80">{hours.weekend}</p>
              <p className="pt-4">
                <a
                  href={`tel:${phoneHref}`}
                  className="font-medium hover:underline"
                >
                  {phone}
                </a>
              </p>
              <p>
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-dark/80 hover:underline"
                >
                  {fullAddress}
                </a>
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <iframe
              title="Shallots location on Google Maps"
              src={siteConfig.mapsEmbedUrl}
              className="h-full min-h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-20 border-t border-brand-dark/10 pt-12">
          <p className="font-heading text-sm uppercase tracking-[0.2em] text-brand-dark/60">
            Our Delivery Partners
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {deliveryPartners.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-brand-dark/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-dark/70 transition-colors hover:border-brand-dark/30 hover:text-brand-dark"
              >
                {partner.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
