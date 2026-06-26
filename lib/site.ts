import type { Metadata } from "next"

export const siteConfig = {
  name: "Shallots",
  title: "Shallots – Modern Indian Cuisine",
  description:
    "Experience modern Indian cuisine crafted to perfection at Shallots in Austin, TX. Taste an authentic menu curated from across India. Reserve a table or order delivery.",
  tagline: "Modern Indian Cuisine, Crafted to Perfection",
  url: "https://www.shallotsaustin.com",
  locale: "en_US",
  phone: "(512) 638-5029",
  phoneHref: "+15126385029",
  address: {
    street: "12221 Riata Trace Pkwy #190",
    city: "Austin",
    region: "TX",
    postalCode: "78727",
    country: "US",
  },
  hours: {
    weekday: "Monday–Friday, 11 AM – 10 PM",
    weekend: "Saturday & Sunday, 9 AM – 10 PM",
    schedule: [
      { days: "Monday – Friday", hours: "11 AM – 10 PM" },
      { days: "Saturday & Sunday", hours: "9 AM – 10 PM" },
    ],
  },
  instagramUrl: "https://www.instagram.com/shallotsaustin/",
  mapsUrl: "https://maps.app.goo.gl/kgbiZFT5nz44qgdo8?g_st=ic",
  googleReviews: {
    rating: 4.7,
    reviewCount: 502,
  },
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.796347587845!2d-97.74088992361668!3d30.41372487473981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cc750987c939%3A0x600c97693630650!2s12221%20Riata%20Trace%20Pkwy%20%23190%2C%20Austin%2C%20TX%2078727!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
  cuisine: "Indian",
  keywords: [
    "Shallots Austin",
    "Indian restaurant Austin",
    "modern Indian cuisine",
    "Indian food Austin TX",
    "Riata Trace Indian restaurant",
    "Austin Indian dining",
    "Indian restaurant near me Austin",
    "reservations Austin Indian",
  ],
} as const

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "restaurant",
}

export function getRestaurantJsonLd() {
  const { address, phoneHref, url, name, description, cuisine } = siteConfig

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name,
    description,
    url,
    telephone: phoneHref,
    servesCuisine: cuisine,
    priceRange: "$$",
    image: `${url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.42866,
      longitude: -97.75336,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "11:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:00",
        closes: "22:00",
      },
    ],
    hasMenu: url,
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: url,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "FoodEstablishmentReservation",
        name: "Table reservation",
      },
    },
  }
}
