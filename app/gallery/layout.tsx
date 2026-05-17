import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nail Art Gallery | Sun's Nail Studio Wilmington NC",
  description: "Browse Sun's nail art portfolio — acrylic sets, gel manicures, dip powder, seasonal nail art and more. Private nail studio in Wilmington, NC.",
  alternates: {
    canonical: "https://www.sunsnailstudio.com/gallery",
  },
  openGraph: {
    title: "Nail Art Gallery | Sun's Nail Studio Wilmington NC",
    description: "Browse Sun's nail art portfolio — acrylic sets, gel manicures, dip powder, seasonal nail art and more. Private nail studio in Wilmington, NC.",
    url: "https://www.sunsnailstudio.com/gallery",
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

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
