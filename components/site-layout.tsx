"use client"

import { AnnouncementBar } from "@/components/announcement-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Script from "next/script"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "NailSalon",
  "name": "Sun's Nail Studio",
  "url": "https://www.sunsnailstudio.com",
  "telephone": "+1833-517-5239",
  "email": "sun@sunsnailstudio.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "7122 Market St Suite 170, Studio 119",
    "addressLocality": "Wilmington",
    "addressRegion": "NC",
    "postalCode": "28411",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.270218,
    "longitude": -77.818832
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "10:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "16:00"
    }
  ],
  "priceRange": "$$",
  "image": "https://www.sunsnailstudio.com/og-image.jpg"
}

interface SiteLayoutProps {
  children: React.ReactNode
  currentPage?: string
}

export function SiteLayout({ children, currentPage = "home" }: SiteLayoutProps) {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen flex flex-col">
        <AnnouncementBar />
        <Header currentPage={currentPage} />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
