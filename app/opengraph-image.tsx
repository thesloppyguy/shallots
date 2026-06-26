import { ImageResponse } from "next/og"

import { siteConfig } from "@/lib/site"

export const alt = siteConfig.title
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(135deg, hsl(8, 44%, 9%) 0%, hsl(320, 20%, 10%) 50%, hsl(8, 44%, 9%) 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          color: "hsl(30, 33%, 96%)",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            letterSpacing: "0.08em",
            marginBottom: 24,
          }}
        >
          {siteConfig.name.toUpperCase()}
        </div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.9,
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 22,
            opacity: 0.75,
          }}
        >
          Austin, Texas
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
