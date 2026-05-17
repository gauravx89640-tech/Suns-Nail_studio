export function WhyChooseUs() {
  const reasons = [
    {
      number: "01",
      title: "Tired of rushed, disappointing salons?",
      description: "Sun previously owned a thriving full-service salon — and left it behind to give you something better. Every set gets her full, unhurried attention. No shortcuts, no assembly line."
    },
    {
      number: "02",
      title: "A private suite, made for you.",
      description: "Located inside Phenix Salon Suites in Wilmington, NC, Sun's studio is calm, quiet, and completely one-on-one. Just you, Sun, and nails you'll actually love."
    },
    {
      number: "03",
      title: "Results that speak for themselves.",
      description: "From dip powder that lasts 4+ weeks to hand-painted nail art that turns heads, Sun's work is precise, creative, and deeply personal."
    },
  ]

  return (
    <section className="bg-card py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {reasons.map((reason) => (
          <div
            key={reason.number}
            className="flex gap-6 md:gap-10 py-12 border-b border-border last:border-b-0"
          >
            {/* Number */}
            <span className="font-serif text-6xl md:text-8xl font-extralight text-accent/30 shrink-0">
              {reason.number}
            </span>

            {/* Content */}
            <div className="pt-2 md:pt-4">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-3 text-foreground">
                {reason.title}
              </h3>
              <p className="text-foreground leading-relaxed max-w-xl">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
