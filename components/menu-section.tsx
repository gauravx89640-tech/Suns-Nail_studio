import Link from "next/link"
import Image from "next/image"

const bookingUrl = 'https://book.squareup.com/appointments/2v0g4kbfw7z3yp/location/B81EE45QM57NE/services';

const menuItems = [
 { name: "Classic Manicure with Regular Polish", price: "$25.00", time: "45 min" },
  { name: "Classic Manicure with Gel Polish", price: "$45.00", time: "1 hr" },
  { name: "Deluxe Manicure with Gel Polish", price: "$60.00", time: "1 hr" },
  { name: "DP (Dipping Powder)", price: "$55.00", time: "1 hr" },
  { name: "Acrylic Full Set", price: "$65.00", time: "1 hr" },
  { name: "Hard Gel Full Set", price: "$65.00", time: "1 hr" },
  { name: "Gel X Full Set", price: "$65.00", time: "1 hr" },
  { name: "Acrylic Fill In", price: "$55.00", time: "1 hr" },
  { name: "Hard Gel Fill In", price: "$55.00", time: "1 hr" },
  { name: "Gel X Fill In", price: "$55.00", time: "1 hr" },
  { name: "Classic Pedicure with Gel Polish", price: "$55.00", time: "1 hr" },
  { name: "Classic Pedicure with Regular Polish", price: "$45.00", time: "45 min" },
  { name: "Full Set (or DP) & Classic Pedicure with Gel Polish", price: "$120.00", time: "2 hrs" },
  { name: "Classic Manicure & Classic Pedicure with Regular Polish", price: "$70.00", time: "1 hr 30 min" },
  { name: "Classic Manicure & Classic Pedicure with Gel Polish", price: "$100.00", time: "2 hrs" },
  { name: "Full Set (or DP) & Classic Pedicure with Regular Polish", price: "$110.00", time: "2 hrs" },
  { name: "Fill In (or DP) & Classic Pedicure with Gel Polish", price: "$110.00", time: "2 hrs" },
  { name: "Fill In (or DP) & Classic Pedicure with Regular Polish", price: "$100.00", time: "1 hr 45 min" },
  { name: "Hot Stone (add with pedicure service)", price: "$15.00", time: "25 min" },
  { name: "Paraffin Wax (add with any services)", price: "$15.00", time: "20 min" },
  { name: "Nail Removal (with another service $10)", price: "$25.00", time: "30 min" },
  { name: "Gel Polish Change (only on toe)", price: "$25.00", time: "30 min" },
  { name: "Nail Art (or French Tip) starting at $10", price: "Price varies", time: "30 min" },
  { name: "Jelly (add with pedicure service)", price: "$10.00", time: "20 min" },
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
