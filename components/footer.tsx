import Link from "next/link"

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary">
      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="border-t border-border" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Contact Column */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">Contact</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Have a question or need help booking? Text or email Sun directly.
            </p>
            <p className="font-medium text-foreground">
              <span className="font-semibold">Text: </span>
              <a href="tel:+19103427003" className="hover:text-accent transition-colors">
                910-342-7003
              </a>
            </p>
            <p className="text-sm text-foreground mt-2">
              <span className="font-semibold">Email: </span>
              <a href="mailto:sun@sunsnailstudio.com" className="hover:text-accent transition-colors">
                sun@sunsnailstudio.com
              </a>
            </p>
          </div>

          {/* Location & Hours Column */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">Location & Hours</h3>
            <address className="text-foreground not-italic leading-relaxed mb-4">
              7122 Market Street Suite 170<br />
              Wilmington, NC 28411<br />
              <span className="text-sm">Located inside Phenix Salon Suites</span>
            </address>
            <div className="text-foreground space-y-1 text-sm">
              <p>
                <span className="font-medium">Mon – Fri:</span> 10:00am – 6:00pm
              </p>
              <p>
                <span className="font-medium">Sat:</span> 10:00am – 4:00pm
              </p>
              <p>
                <span className="font-medium">Sun:</span> Closed
              </p>
            </div>
          </div>

          {/* Policies Column */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">Policies</h3>
            <nav className="space-y-3">
              <Link
                href="/booking-policies"
                className="block text-foreground hover:text-accent transition-colors"
              >
                Booking Policies
              </Link>
              <Link
                href="/privacy-policy"
                className="block text-foreground hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 pb-8">
        <p className="text-center text-xs text-foreground">
          © {new Date().getFullYear()} Sun&apos;s Nail Studio · Wilmington, NC. All rights reserved.
        </p>
        <p className="text-center text-xs text-foreground mt-2">
          Designed by <span className="font-medium">Forge Studio</span>
        </p>
      </div>
    </footer>
  )
}
