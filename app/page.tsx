import { Metadata } from "next"
import { SiteLayout } from "@/components/site-layout"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { MenuSection } from "@/components/menu-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { AboutSection } from "@/components/about-section"
import { LogoDivider } from "@/components/logo-divider"
import { Gallery } from "@/components/gallery"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTABanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "Sun's Nail Studio | Private Nail Salon in Wilmington, NC",
  description: "Sun's Nail Studio offers private, one-on-one nail services in Wilmington, NC. Acrylic, gel, dip powder, nail art, pedicures & waxing. Book today.",
  alternates: {
    canonical: "https://www.sunsnailstudio.com",
  },
  openGraph: {
    title: "Sun's Nail Studio | Private Nail Salon in Wilmington, NC",
    description: "Sun's Nail Studio offers private, one-on-one nail services in Wilmington, NC. Acrylic, gel, dip powder, nail art, pedicures & waxing. Book today.",
    url: "https://www.sunsnailstudio.com",
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

export default function Home() {
  return (
    <SiteLayout currentPage="home">
      <Hero />
      <Services />
      <MenuSection />
      <WhyChooseUs />
      <AboutSection />
      <LogoDivider />
      <Gallery />
      <TestimonialsSection />
      <CTABanner />
    </SiteLayout>
  )
}
