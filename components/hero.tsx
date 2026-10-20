import Image from 'next/image';

export function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
      {/* Left - Content */}
      <div className="bg-secondary flex items-center justify-center p-8 lg:p-16">
        <div className="max-w-lg">
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Where every<br />set shines.
          </h1>
          <p className="text-foreground text-lg mb-8 leading-relaxed">
            Wilmington NC&apos;s private nail studio. No rush, no crowds — just you, Sun, and your best nails yet.
          </p>
        </div>
      </div>

      {/* Right - Studio Image */}
      <div className="relative h-[400px] lg:h-auto bg-gradient-to-br from-[#F5DFA0] to-[#E8C070]">
        <Image
          src="/gallery/018-silver-glitter.jpg"
          alt="Sun's Nail Studio interior with pedicure chair, nail station, and coastal wall art"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
