import Image from "next/image"

export function LogoDivider() {
  return (
    <section id="studio" className="bg-background py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-accent font-semibold mb-3">
            Inside the studio
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground">
            Step inside Sun’s private studio
          </h2>
          <p className="max-w-2xl mx-auto text-foreground text-lg leading-relaxed mt-6">
            Two calm, inviting views of the studio help clients feel comfortable and confident before they arrive.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2rem] shadow-lg h-[420px] lg:h-[620px]">
            <Image
              src="/images/hero-studio.webp"
              alt="Sun's Nail Studio interior with pedicure chair, nail station, and coastal wall art"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative overflow-hidden rounded-[2rem] shadow-lg h-[420px] lg:h-[620px]">
            <Image
              src="/images/about-studio.webp"
              alt="Sun's Nail Studio polish wall and nail station"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}