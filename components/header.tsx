"use client"

import Link from "next/link"
import { ShoppingBag, Menu, X } from "lucide-react"
import { useState } from "react"

const bookingUrl = 'https://book.squareup.com/appointments/2v0g4kbfw7z3yp/location/B81EE45QM57NE/services';

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

interface HeaderProps {
  currentPage?: string
}

export function Header({ currentPage = "home" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background py-0 border-b-4 sticky top-0.5 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 mb-1">
          {/* Book Button - Hidden on mobile */}
          <Link
            href={bookingUrl}
            className="hidden md:inline-block px-6 py-2 bg-[#B8922E] text-white rounded-full font-bold uppercase text-xs tracking-wide hover:bg-[#9E7924] transition-all hover:scale-105 whitespace-nowrap"
          >
            Book My Appointment
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-accent" />
            ) : (
              <Menu size={24} className="text-accent" />
            )}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center justify-center flex-shrink-0">
            <img
              src="/sun-logo.png"
              alt="Sun's Nail Studio"
              className="h-[200px] w-auto"
            />
          </Link>

          {/* Cart Icon */}
          <div className="relative flex-shrink-0">
            <ShoppingBag size={20} className="text-foreground" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold">
              0
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center gap-6 text-sm font-medium text-foreground py-2">
          {navItems.map((item) => {
            const isActive = currentPage.toLowerCase() === item.name.toLowerCase()
            return (
              <Link 
                key={item.name}
                href={item.href} 
                className={`hover:text-accent transition-colors relative group ${isActive ? 'text-accent' : ''}`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            )
          })}
        </nav>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = currentPage.toLowerCase() === item.name.toLowerCase()
                return (
                  <Link 
                    key={item.name}
                    href={item.href} 
                    className={`text-center py-2 text-lg font-medium transition-colors ${isActive ? 'text-accent' : 'text-foreground hover:text-accent'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <Link
                href={bookingUrl}
                className="mx-auto mt-2 px-6 py-3 bg-[#B8922E] text-white rounded-full font-bold uppercase text-sm tracking-wide hover:bg-[#9E7924] transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book My Appointment
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
