import Image from "next/image"
import galleryImages from "@/lib/gallery-data"

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-20 px-4">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4">
            The Work
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        {/* Gallery - Horizontal Scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] w-64 md:w-72 shrink-0 rounded-2xl overflow-hidden snap-center"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Follow Link */}
        <div className="text-center mt-12">
          <a href="https://www.instagram.com/sunniertoday/?__d=1%3Futm_source%3Dig_embed" className="text-accent font-medium hover:text-[#B8922E] transition-colors">
            Follow @sunniertoday →
          </a>
        </div>
      </div>
    </section>
  )
}
