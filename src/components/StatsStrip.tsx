import { Users, Package, ShieldCheck, Headphones } from 'lucide-react'

export default function StatsStrip() {
  const stats = [
    { icon: Users, value: '5,000+', label: 'Active Users' },
    { icon: Package, value: '1M+', label: 'Products Tracked' },
    { icon: ShieldCheck, value: '99.9%', label: 'Uptime' },
    { icon: Headphones, value: '24/7', label: 'Support' },
  ]

  return (
    <section className="bg-[#800020] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label}>
              <Icon className="w-10 h-10 mx-auto mb-3 text-red-200" />
              <p className="text-4xl md:text-5xl font-bold">{value}</p>
              <p className="text-red-100 text-lg">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}