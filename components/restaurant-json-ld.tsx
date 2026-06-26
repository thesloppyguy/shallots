import { getRestaurantJsonLd } from "@/lib/site"

export function RestaurantJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getRestaurantJsonLd()),
      }}
    />
  )
}
