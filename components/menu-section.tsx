import Link from "next/link"
import Image from "next/image"

const bookingUrl = 'https://book.squareup.com/appointments/2v0g4kbfw7z3yp/location/B81EE45QM57NE/services';

const menuItems = [
  { name: "Manicure & Pedicure of Choice", price: "Price varies", time: "2 hrs" },
  { name: "Classic Manicure with Gel Polish", price: "$45.00", time: "1 hr" },
  { name: "Deluxe Manicure With Gel Polish", price: "$60.00", time: "1 hr" },
  { name: "Full Set, LCN or Acrylic", price: "$65.00", time: "1 hr" },
  { name: "Fill In LCN or Acrylic", price: "$55.00", time: "1 hr" },
  { name: "Dipping Powder with Tips", price: "$60.00", time: "1 hr" },
  { name: "Dipping Powder", price: "$55.00", time: "1 hr" },
  { name: "Ombre Full Set", price: "$65.00", time: "1 hr" },
  { name: "Classic Pedicure with Gel Polish", price: "$55.00", time: "1 hr" },
  { name: "Dip Powder Nails & Pedicure of Choice", price: "Price varies", time: "2 hrs" },
  { name: "Jelly Pedicure with Gel Polish", price: "$65.00", time: "1 hr" },
  { name: "Charcoal Detox Pedicure / Gel Polish", price: "$75.00", time: "1 hr" },
  { name: "Classic Pedicure with Regular Polish", price: "$45.00", time: "1 hr" },
  { name: "Jelly Pedicure with Regular Polish", price: "$50.00", time: "1 hr" },
  { name: "Charcoal Detox Pedicure / Reg Polish", price: "$60.00", time: "1 hr" },
  { name: "Acrylic Full Set & Pedicure of Choice", price: "Price varies", time: "2 hrs" },
  { name: "Acrylic Fill In & Pedicure of Choice", price: "Price varies", time: "2 hrs" },
]

export function MenuSection() {
  return (
    <section className="bg-background py-20 px-4">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-center text-foreground mb-16">
          The Menu
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <h3 className="font-medium text-foreground mb-2">{item.name}</h3>
              <div className="flex justify-between items-center text-sm">
                <span className="text-accent font-semibold">{item.price}</span>
                <span className="text-muted-foreground">{item.time}</span>
              </div>
              <Link
                href={bookingUrl}
                className="text-accent font-medium text-sm hover:text-[#B8922E] transition-colors mt-4 block"
              >
                Book now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
