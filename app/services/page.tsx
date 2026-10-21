import { Metadata } from "next"
import Link from "next/link"
import { SiteLayout } from "@/components/site-layout"

export const metadata: Metadata = {
  title: "Nail Services & Pricing | Sun's Nail Studio Wilmington NC",
  description: "View all nail services at Sun's Nail Studio in Wilmington, NC. Acrylic full sets from $65, gel manicures from $45, dip powder, pedicures, nail art & waxing.",
  alternates: {
    canonical: "https://www.sunsnailstudio.com/services",
  },
  openGraph: {
    title: "Nail Services & Pricing | Sun's Nail Studio Wilmington NC",
    description: "View all nail services at Sun's Nail Studio in Wilmington, NC. Acrylic full sets from $65, gel manicures from $45, dip powder, pedicures, nail art & waxing.",
    url: "https://www.sunsnailstudio.com/services",
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

const bookingUrl = 'https://book.squareup.com/appointments/2v0g4kbfw7z3yp/location/B81EE45QM57NE/services';

const menuItems = [
  { name: "Classic Manicure with Regular Polish", price: "$25.00", time: "45 min" },
  { name: "Classic Manicure with Gel Polish", price: "$45.00", time: "1 hr" },
  { name: "Deluxe Manicure with Gel Polish", price: "$60.00", time: "1 hr" },
  { name: "DP (Dipping Powder)", price: "$55.00", time: "1 hr" },
  { name: "Acrylic Full Set", price: "$65.00", time: "1 hr" },
  { name: "Hard Gel Full Set", price: "$65.00", time: "1 hr" },
  { name: "Gel X Full Set", price: "$65.00", time: "1 hr" },
  { name: "Acrylic Fill In", price: "$55.00", time: "1 hr" },
  { name: "Hard Gel Fill In", price: "$55.00", time: "1 hr" },
  { name: "Gel X Fill In", price: "$55.00", time: "1 hr" },
  { name: "Classic Pedicure with Gel Polish", price: "$55.00", time: "1 hr" },
  { name: "Classic Pedicure with Regular Polish", price: "$45.00", time: "45 min" },
  { name: "Full Set (or DP) & Classic Pedicure with Gel Polish", price: "$120.00", time: "2 hrs" },
  { name: "Classic Manicure & Classic Pedicure with Regular Polish", price: "$70.00", time: "1 hr 30 min" },
  { name: "Classic Manicure & Classic Pedicure with Gel Polish", price: "$100.00", time: "2 hrs" },
  { name: "Full Set (or DP) & Classic Pedicure with Regular Polish", price: "$110.00", time: "2 hrs" },
  { name: "Fill In (or DP) & Classic Pedicure with Gel Polish", price: "$110.00", time: "2 hrs" },
  { name: "Fill In (or DP) & Classic Pedicure with Regular Polish", price: "$100.00", time: "1 hr 45 min" },
  { name: "Hot Stone (add with pedicure service)", price: "$15.00", time: "25 min" },
  { name: "Paraffin Wax (add with any services)", price: "$15.00", time: "20 min" },
  { name: "Nail Removal (with another service $10)", price: "$25.00", time: "30 min" },
  { name: "Gel Polish Change (only on toe)", price: "$25.00", time: "30 min" },
  { name: "Nail Art (or French Tip) starting at $10", price: "Price varies", time: "30 min" },
  { name: "Jelly (add with pedicure service)", price: "$10.00", time: "20 min" },
]

export default function ServicesPage() {
  return (
    <SiteLayout currentPage="services">
      {/* Hero Banner */}
      <section className="bg-secondary py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
            Services & Pricing
          </h1>
          <p className="text-foreground text-lg max-w-2xl mx-auto">
            Every service is performed one-on-one by Sun, with full attention and zero rushing.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <h3 className="font-medium text-foreground mb-2">{item.name}</h3>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-accent font-semibold">{item.price}</span>
                  <span className="text-muted-foreground">{item.time}</span>
                </div>
                <Link
                  href={bookingUrl}
                  className="text-accent font-medium text-sm hover:text-[#B8922E] transition-colors mt-4 block"
                >
                  Book now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="bg-card py-16 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Not sure what you need?
          </h2>
          <p className="text-foreground mb-8">
            Sun is happy to help you pick the right service for your nails. Just text her at 910-342-7003 and she&apos;ll guide you.
          </p>
          <Link
            href={bookingUrl}
            className="inline-block px-8 py-4 bg-[#B8922E] text-white rounded-full font-bold uppercase text-sm tracking-wide hover:bg-[#9E7924] transition-all hover:scale-105"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </SiteLayout>
  )
}
