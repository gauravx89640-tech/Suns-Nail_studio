import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact & Location | Sun's Nail Studio Wilmington NC",
  description: "Contact Sun's Nail Studio in Wilmington, NC. Text or call 833-517-5239. Located at 7122 Market St Suite 170 inside Phenix Salon Suites. Book online today.",
  alternates: {
    canonical: "https://www.sunsnailstudio.com/contact",
  },
  openGraph: {
    title: "Contact & Location | Sun's Nail Studio Wilmington NC",
    description: "Contact Sun's Nail Studio in Wilmington, NC. Text or call 833-517-5239. Located at 7122 Market St Suite 170 inside Phenix Salon Suites. Book online today.",
    url: "https://www.sunsnailstudio.com/contact",
    siteName: "Sun's Nail Studio",
    images: [
      {
        url: "https://www.sunsnailstudio.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
