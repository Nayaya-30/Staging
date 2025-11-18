import { CheckCircle2 } from 'lucide-react'

const benefits = [
  { icon: CheckCircle2, color: "text-green-600", title: "Reduce Stockouts by 89%", desc: "Never run out of popular items..." },
  { icon: CheckCircle2, color: "text-blue-600", title: "Save 10+ Hours Per Week", desc: "Automate manual processes..." },
  { icon: CheckCircle2, color: "text-purple-600", title: "Cut Costs by 30%", desc: "Optimize stock levels..." },
  { icon: CheckCircle2, color: "text-orange-600", title: "Improve Accuracy to 99%", desc: "Eliminate human error..." },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Businesses Choose StockKeeper</h2>
        <p className="text-xl text-gray-600 mb-16">Join thousands of businesses that have transformed their inventory management</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {benefits.map(({ icon: Icon, color, title, desc }) => (
            <div key={title} className="text-left">
              <Icon className={`w-10 h-10 ${color} mb-4`} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}