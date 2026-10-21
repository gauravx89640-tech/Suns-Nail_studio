"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { SiteLayout } from "@/components/site-layout"

const serviceOptions = [
  "Acrylic",
  "Manicure", 
  "Pedicure",
  "Nail Art",
  "Dip Powder",
  "Waxing",
  "Not sure yet"
]

const WEB3FORMS_KEY = "439798e8-33a2-4970-aa2f-8d5b4db3a436"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      })

      if (response.ok) {
        alert("Message sent successfully!")
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        })
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <SiteLayout currentPage="contact">
      {/* Hero Banner */}
      <section className="bg-secondary py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground">
            Get In Touch
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Left Column - Contact Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Send Sun a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-foreground font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-foreground font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-foreground font-medium mb-2">
                    Phone Number <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-foreground font-medium mb-2">
                    What service are you interested in?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-[#B8922E] text-white rounded-full font-bold uppercase text-sm tracking-wide hover:bg-[#9E7924] transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>

              <p className="mt-8 text-foreground italic">
                Prefer a quicker reply? Text or call Sun at 833-517-5239. Sun is sometimes with a client and may not answer calls immediately — texting is always the fastest way to reach her.
              </p>
              
              <p className="mt-4">
                <span className="font-semibold text-foreground">Email: </span>
                <a href="mailto:sun@sunsnailstudio.com" className="text-accent hover:text-[#B8922E] transition-colors">
                  sun@sunsnailstudio.com
                </a>
              </p>
            </div>

            {/* Right Column - Location & Hours */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Find Us
              </h2>

              <address className="text-foreground not-italic leading-relaxed mb-4">
                7122 Market St Suite 170, Studio 119<br />
                Wilmington, NC 28411
              </address>
              <p className="text-foreground italic mb-6">
                Located inside Phenix Salon Suites.
              </p>

              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-3">Hours</h3>
                <div className="space-y-1 text-foreground">
                  <p>Mon – Fri: 10:00am – 6:00pm</p>
                  <p>Sat: 10:00am – 4:00pm</p>
                  <p>Sun: Closed</p>
                </div>
              </div>

              {/* Phenix Exterior Photo */}
              <div className="mb-4 relative h-[250px] rounded-xl overflow-hidden">
                <Image
                  src="/phenix-exterior.png"
                  alt="Phenix Salon Suites exterior building"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-foreground text-sm mb-6">
                Sun&apos;s Nail Studio is located inside Phenix Salon Suites — 7122 Market St, Suite 170, Wilmington, NC
              </p>

              {/* Phenix Lobby Photo */}
              <div className="mb-4 relative h-[350px] rounded-xl overflow-hidden">
                <Image
                  src="/phenix-lobby.png"
                  alt="Phenix Salon Suites welcoming lobby with water wall"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-foreground text-sm mb-6">
                The welcoming lobby inside Phenix Salon Suites
              </p>

              {/* Google Map */}
              <div className="mb-4 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.308888!2d-77.818832!3d34.270218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9f4e2e0c8c0ad%3A0x0!2s7122%20Market%20St%20Suite%20170%2C%20Wilmington%2C%20NC%2028411!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Sun's Nail Studio Location"
                />
              </div>

              <Link
                href="https://maps.google.com/?q=7122+Market+St+Suite+170+Wilmington+NC+28411"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-medium hover:text-[#B8922E] transition-colors"
              >
                Open in Google Maps →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
