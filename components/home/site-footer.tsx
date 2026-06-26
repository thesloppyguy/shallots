import { ImagePlaceholder } from "@/components/home/shared"
import { siteConfig } from "@/lib/site"

export function SiteFooter() {
  const { address, phone, phoneHref, hours } = siteConfig
  const fullAddress = `${address.street}, ${address.city}, ${address.region} ${address.postalCode}`

  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <ImagePlaceholder
              src="/assets/shallots-logo-white.webp"
              alt={siteConfig.name}
              className="h-12 w-auto object-contain"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/75">
              Shallots is a restaurant, a gathering place, and a celebration of
              modern Indian cuisine in the heart of Austin.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              {fullAddress}
            </a>
            <p className="text-white/75">{hours.weekday}</p>
            <p className="text-white/75">{hours.weekend}</p>
            <a href={`tel:${phoneHref}`} className="block hover:underline">
              {phone}
            </a>
          </div>

          <div className="space-y-3 text-sm">
            <a href="#menu" className="block hover:underline">
              Menu
            </a>
            <a href="#events" className="block hover:underline">
              Events
            </a>
            <a href="#spaces" className="block hover:underline">
              Dining Spaces
            </a>
            <a href="#reserve" className="block hover:underline">
              Reserve
            </a>
            <a href="#" className="block text-white/60 hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-8 text-center text-xs uppercase tracking-[0.18em] text-white/45">
          © {new Date().getFullYear()} {siteConfig.name}. Modern Indian Cuisine,
          Austin TX.
        </p>
      </div>
    </footer>
  )
}
