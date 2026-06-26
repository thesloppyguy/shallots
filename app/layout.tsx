import {
  Cinzel_Decorative,
  Cormorant_Garamond,
  Geist_Mono,
  Great_Vibes,
  Manrope,
  Marcellus_SC,
} from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { RestaurantJsonLd } from "@/components/restaurant-json-ld"
import { ThemeProvider } from "@/components/theme-provider"
import { siteMetadata } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = siteMetadata

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" })

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
})

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
})

const marcellusSC = Marcellus_SC({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-button",
})

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-US"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        manrope.variable,
        cormorantGaramond.variable,
        cinzelDecorative.variable,
        marcellusSC.variable,
        greatVibes.variable
      )}
    >
      <body>
        <RestaurantJsonLd />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
