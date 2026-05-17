import { Metadata } from "next"
import Image from "next/image"
import { Star } from "lucide-react"
import { SiteLayout } from "@/components/site-layout"

export const metadata: Metadata = {
  title: "About Sun | Private Nail Artist in Wilmington, NC",
  description: "Meet Sun — a private nail artist in Wilmington, NC with 10+ years of experience. Former salon owner now dedicated to one-on-one luxury nail care.",
  alternates: {
    canonical: "https://www.sunsnailstudio.com/about",
  },
  openGraph: {
    title: "About Sun | Private Nail Artist in Wilmington, NC",
    description: "Meet Sun — a private nail artist in Wilmington, NC with 10+ years of experience. Former salon owner now dedicated to one-on-one luxury nail care.",
    url: "https://www.sunsnailstudio.com/about",
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

const stats = [
  { number: "10+", label: "Years of Experience" },
  { number: "4.9★", label: "Average Rating" },
  { number: "500+", label: "Happy Clients" },
]

const testimonials = [
  {
    text: "I was blown away when she was done. They keep catching in the light and are so beautiful and make me happy!",
    author: "Nova",
  },
  {
    text: "Hands down the best place to get a mani/pedi! Sun listens and takes her time to make sure you leave satisfied. I recommend her salon to everyone!",
    author: "Leslee Whitlow",
  },
  {
    text: "Sun is amazing! She listens to what you're wanting. She is so detailed and makes sure you leave with nails you love. The only way I would go anywhere else is if she quit.",
    author: "Tabitha Fowler",
  },
  {
    text: "She takes her time and makes sure each nail is absolutely perfect. I get dipping powder and my nails always last 4+ weeks!",
    author: "Jessica Browning",
  },
  {
    text: "I enjoy the one on one experience.",
    author: "Kim Lentz",
  },
  {
    text: "The best!",
    author: "Madeleine Mauch",
  },
  {
    text: "Sun is amazing, the attention to customer needs is great, and they do incredible work!",
    author: "Josefina Hernandez",
  },
  {
    text: "Always fantastic!!!! Clean, efficient, professional!! So good, definitely worth it — absolutely recommend Sun.",
    author: "Christine Marais",
  },
  {
    text: "Ha ha you can run but you can't hide. I found you!! I recommend everyone get their nails done by Sun.",
    author: "Debra Harris",
  },
  {
    text: "Sun is the best. She does an amazing job on my mani/pedi every time!!",
    author: "Cathy Buck",
  },
  {
    text: "Love her work!! Her nail work is so clean and she has very high knowledge. I highly recommend Sun. Happy nails!",
    author: "Junko Mills",
  },
  {
    text: "Sun is the best!! Best manicure and pedicure in town!",
    author: "Gloomier Yunes-Morillo",
  },
  {
    text: "Sun is simply the best. I have been a client of hers for the past 9 years. She is careful and pays attention to detail. You will not be disappointed.",
    author: "Karen Larue",
  },
  {
    text: "Sun is by far my favorite nail technician. Her attention to detail is amazing. She knows exactly what I want when I come. Customer service is nothing short of excellence.",
    author: "Amanda Bruff",
  },
  {
    text: "Sun is awesome, she always pays extra attention to make my hands and nails look their best! She learned early on what colors, styles and shapes I love and makes sure I leave with a beautiful creative nail style every time!!",
    author: "Bonnie Brown",
  },
]

export default function AboutPage() {
  return (
    <SiteLayout currentPage="about">
      {/* Hero Banner */}
      <section className="bg-secondary py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground">
            Meet Sun
          </h1>
        </div>
      </section>

      {/* Main About Section */}
      <section className="bg-background py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                Welcome to Sun&apos;s Nail Studio — a private, one-on-one nail experience in the heart of Wilmington, NC. Self-care and relaxation should be an integral part of your routine, and Sun&apos;s tranquil, inviting suite is designed to help you escape the hustle of everyday life.
              </p>
              <p>
                With years of experience running her own full-service salon, Sun now dedicates her craft entirely to you. Whether it&apos;s a classic manicure, an intricate nail art set, or a deeply relaxing pedicure — Sun listens, takes her time, and makes sure you leave with nails you love.
              </p>
              <p>
                Services include pedicures, manicures, acrylic full sets, fill-ins, dip powder, LCN, Chrome, Ombre, Pink & White, nail art, and waxing. Come experience the difference a private studio makes.
              </p>
            </div>

            {/* Right Images */}
            <div className="space-y-6">
              {/* Sun's Portrait */}
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/sun-outdoor-portrait.png"
                  alt="Sun, Owner & Nail Artist"
                  fill
                  className="object-cover"
                  style={{ transform: 'rotate(90deg)' }}
                />
              </div>
              <p className="text-center text-foreground italic text-sm">Sun — Owner & Nail Artist</p>
              
              {/* Studio Photo */}
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/images/about-studio.webp"
                  alt="Sun's Nail Studio polish wall and nail station"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="bg-card py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-5xl md:text-6xl font-bold text-accent mb-2">
                  {stat.number}
                </p>
                <p className="text-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sun's Philosophy */}
      <section className="bg-background py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
            Sun&apos;s Philosophy
          </h2>
          <p className="text-foreground text-lg leading-relaxed">
            &ldquo;I left the busy salon world because I wanted to give every client the experience they actually deserve. No rushing, no double-booking, no cutting corners. When you sit in my chair, you have my complete focus — and I don&apos;t let you leave until your nails are exactly right.&rdquo;
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-card py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background p-6 rounded-xl relative">
                {/* Large decorative quotation mark */}
                <div className="absolute top-3 left-5 text-6xl leading-none" style={{ color: '#C9A84C' }}>
                  &ldquo;
                </div>
                
                {/* Review Text */}
                <p className="text-foreground leading-relaxed mb-4 pt-10 text-sm">
                  {testimonial.text}
                </p>
                
                {/* Author & Rating */}
                <div className="border-t border-border pt-3">
                  <p className="font-bold text-foreground mb-1 text-sm">{testimonial.author}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="#C9A84C" className="text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
