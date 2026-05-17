import Link from "next/link"

const bookingUrl = 'https://book.squareup.com/appointments/2v0g4kbfw7z3yp/location/B81EE45QM57NE/services';

export function CTABanner() {
  return (
    <section className="bg-secondary py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
          Ready to shine?
        </h2>
        <p className="text-foreground text-lg mb-8">
          Book your appointment today — spots fill fast.
        </p>
        <Link
          href={bookingUrl}
          className="inline-block px-8 py-4 bg-[#B8922E] text-white rounded-full font-bold uppercase text-sm tracking-wide hover:bg-[#9E7924] transition-all hover:scale-105"
        >
          Book My Appointment
        </Link>
      </div>
    </section>
  )
}
