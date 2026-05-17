"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SiteLayout } from "@/components/site-layout"

const bookingUrl = 'https://book.squareup.com/appointments/2v0g4kbfw7z3yp/location/B81EE45QM57NE/services';

const categories = ["All", "Acrylic", "Nail Art", "Manicure & Pedicure", "Seasonal"]

const galleryImages = [
  // Acrylic
  { src: "/gallery/001-black-flame.jpg", alt: "Black matte flame nails", category: "Acrylic" },
  { src: "/gallery/002-leopard-print.jpg", alt: "Leopard print nails", category: "Acrylic" },
  { src: "/gallery/003-cherry-checkered.jpg", alt: "Red checkered cherry acrylic nails", category: "Acrylic" },
  { src: "/gallery/004-coffee-theme.webp", alt: "Coffee cappuccino theme with leopard spots and geometric patterns", category: "Acrylic" },
  
  // Nail Art
  { src: "/gallery/005-ghost-checkered.jpg", alt: "White checkered ghost nails", category: "Nail Art" },
  { src: "/gallery/006-pink-swirl.jpg", alt: "Pink swirl abstract nails", category: "Nail Art" },
  { src: "/gallery/007-sunflower.jpg", alt: "Yellow sunflower nails", category: "Nail Art" },
  { src: "/gallery/008-neon-leaves.jpg", alt: "Neon bright color leaf nails", category: "Nail Art" },
  { src: "/gallery/009-lavender-gems.jpg", alt: "Lavender shimmer gem nails", category: "Nail Art" },
  { src: "/gallery/010-star-sparkle.jpg", alt: "Black star sparkle nails", category: "Nail Art" },
  { src: "/gallery/011-gray-ombre.jpg", alt: "Gray ombre wavy pattern nails", category: "Nail Art" },
  { src: "/gallery/012-red-cherries.jpg", alt: "Deep red metallic with hand-painted cherry design", category: "Nail Art" },
  { src: "/gallery/013-red-green-art.jpg", alt: "Red and green hand-painted nail art", category: "Nail Art" },
  { src: "/gallery/014-eyelash-art.jpg", alt: "White with black eyelash nail art", category: "Nail Art" },
  { src: "/gallery/015-rainbow-gradient.jpg", alt: "Rainbow gradient hand-painted nails", category: "Nail Art" },
  { src: "/gallery/016-blue-flowers.jpg", alt: "Nude with light blue flowers and gold leaves", category: "Nail Art" },
  { src: "/gallery/017-blue-branches.jpg", alt: "Light blue with navy hand-painted branches", category: "Nail Art" },
  
  // Manicure & Pedicure
  { src: "/gallery/018-silver-glitter.jpg", alt: "Silver white glitter nails", category: "Manicure & Pedicure" },
  { src: "/gallery/019-pink-shimmer.jpg", alt: "Natural pink shimmer nails", category: "Manicure & Pedicure" },
  { src: "/gallery/020-daisy-french.jpg", alt: "White daisy dot french nails", category: "Manicure & Pedicure" },
  { src: "/gallery/021-brown-ombre.jpg", alt: "Nude with brown ombre and gold accents", category: "Manicure & Pedicure" },
  { src: "/gallery/022-brown-glitter.jpg", alt: "Brown ombre with glitter accent nails", category: "Manicure & Pedicure" },
  
  // Seasonal
  { src: "/gallery/023-blue-winter.jpg", alt: "Blue glitter winter nails", category: "Seasonal" },
  { src: "/gallery/024-snowflake-gold.jpg", alt: "Gold glitter snowflake nails", category: "Seasonal" },
  { src: "/gallery/025-spider-web.jpg", alt: "Orange Halloween spider web nails", category: "Seasonal" },
  { src: "/gallery/026-pumpkin-face.webp", alt: "Orange pumpkin face Halloween nails", category: "Seasonal" },
  { src: "/gallery/027-valentine-hearts.jpg", alt: "Pink Valentine hearts nails", category: "Seasonal" },
  { src: "/gallery/028-heart-flower.jpg", alt: "Red heart flower Valentine nails", category: "Seasonal" },
  { src: "/gallery/029-blood-drip.jpg", alt: "Halloween white and red blood drip nails", category: "Seasonal" },
  { src: "/gallery/030-christmas-tree.jpg", alt: "Dark green Christmas tree and gold nails", category: "Seasonal" },
  { src: "/gallery/031-christmas-plaid.jpg", alt: "Red and green Christmas plaid nails", category: "Seasonal" },
  { src: "/gallery/032-fall-leaves.jpg", alt: "Orange with hand-painted fall leaf design", category: "Seasonal" },
  { src: "/gallery/033-ghost-drip.webp", alt: "Halloween ghost faces with blood drip effects", category: "Seasonal" },
  { src: "/gallery/034-pumpkin-spiders.webp", alt: "Halloween jack-o-lantern pumpkins with spiders", category: "Seasonal" },
]

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter)

  return (
    <SiteLayout currentPage="gallery">
      {/* Hero Banner */}
      <section className="bg-background py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
            The Work
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-foreground text-lg max-w-2xl mx-auto">
            Every set is handcrafted by Sun. Browse her latest work below.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-background px-4 pb-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                  activeFilter === category
                    ? "bg-[#B8922E] text-white"
                    : "bg-card border border-accent text-accent hover:bg-accent hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-secondary py-12 px-4">
        <div className="container mx-auto text-center">
          <p className="text-foreground text-lg mb-6">
            Love what you see? Book your appointment and let Sun create your perfect set.
          </p>
          <Link
            href={bookingUrl}
            className="inline-block px-8 py-4 bg-[#B8922E] text-white rounded-full font-bold uppercase text-sm tracking-wide hover:bg-[#9E7924] transition-all hover:scale-105"
          >
            Book My Appointment
          </Link>
        </div>
      </section>
    </SiteLayout>
  )
}
