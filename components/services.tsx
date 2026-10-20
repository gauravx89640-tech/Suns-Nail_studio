import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Acrylic",
    image: "/gallery/003-cherry-checkered.jpg",
  },
  {
    title: "Manicure & Pedicure",
    image: "/gallery/018-silver-glitter.jpg",
  },
  {
    title: "Nail Art",
    image: "/gallery/006-pink-swirl.jpg",
  },
]

const bookingUrl = 'https://book.squareup.com/appointments/2v0g4kbfw7z3yp/location/B81EE45QM57NE/services';

export function Services() {
  return (
    <section id="services" className="bg-card py-20 px-4">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-center mb-12">
          <span className="font-serif text-5xl md:text-6xl font-bold text-foreground">Popular</span>
          <span className="font-serif text-5xl md:text-6xl font-light ml-3 text-foreground">Services</span>
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-lg shadow-black/10 ring-1 ring-border transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link href="/services" className="text-accent font-medium hover:text-[#B8922E] transition-colors">
            View all services →
          </Link>
        </div>
      </div>
    </section>
  )
}
