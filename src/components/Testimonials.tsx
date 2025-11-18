import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Michael Chen",
    role: "CEO, TechGear Co.",
    content: "StockKeeper transformed how we manage inventory. We reduced stockouts by 89% and saved over 15 hours per week. The real-time tracking is a game-changer!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Operations Manager, FreshMart",
    content: "The best decision I ever made! I can check stock levels and update inventory from anywhere using the mobile app. It also drastically improved our accuracy.",
    rating: 5,
  },
  {
    name: "David Martinez",
    role: "Founder, SupplyHub",
    content: "Finally, an inventory app with real-time notifications and barcode scanning. It’s incredibly easy to use and our entire team adopted it in under a week.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Loved by Businesses Worldwide</h2>
        <p className="text-xl text-gray-600 mb-16">See what our customers have to say about StockKeeper</p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <Card key={t.name} className="p-8 bg-white border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-shadow">
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-200 border-2 border-dashed rounded-full" />
                <div className="text-left">
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}