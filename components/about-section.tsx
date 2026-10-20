import Link from "next/link"
import Image from "next/image"

const bookingUrl = 'https://book.squareup.com/appointments/2v0g4kbfw7z3yp/location/B81EE45QM57NE/services';

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              Meet Sun
            </h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                Welcome to Sun&apos;s Nail Studio — a private, one-on-one nail experience in the heart of Wilmington, NC. Self-care and relaxation should be an integral part of your routine, and Sun&apos;s tranquil, inviting suite is designed to help you escape the hustle of everyday life.
              </p>
              <Link href="/about" className="inline-block text-accent font-medium hover:text-[#B8922E] transition-colors">
                Learn more about Sun →
              </Link>
            </div>
            <Link
              href={bookingUrl}
              className="inline-block mt-8 px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold uppercase text-sm tracking-wide hover:bg-[#B8922E] transition-all hover:scale-105"
            >
              Book With Sun
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/sun-studio-portrait.png"
              alt="Sun at her nail station with teal walls"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
