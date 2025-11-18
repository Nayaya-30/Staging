import { Card } from '@/components/ui/card'
import { Clock, Bell, Barcode, Smartphone, RefreshCw, Lock } from 'lucide-react'

const features = [
  { icon: Clock, title: "Real-Time Tracking", desc: "Monitor stock levels instantly across all your locations. Get live updates on inventory movements..." },
  { icon: Bell, title: "Smart Alerts", desc: "Receive automatic notifications for low stock, expiring products, and reorder points. Stay ahead..." },
  { icon: Barcode, title: "Barcode Scanning", desc: "Scan products quickly with built-in barcode support. Speed up stock takes and reduce manual entry errors." },
  { icon: Smartphone, title: "Mobile Access", desc: "Manage inventory on the go with our mobile app. Update stock, scan items, and check levels from anywhere." },
  { icon: RefreshCw, title: "Multi-Platform Sync", desc: "Automatically sync inventory across all devices. Your data is always up-to-date, everywhere you work." },
  { icon: Lock, title: "Secure & Reliable", desc: "Bank-level encryption and daily backups keep your data safe. 99.9% uptime guarantee for peace of mind." },
]

export default function FeaturesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need to Manage Inventory</h2>
        <p className="text-xl text-gray-600 mb-16">Powerful features designed to streamline your stock management and boost efficiency</p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="p-8 text-left hover:shadow-xl transition-shadow border-0 bg-gray-50 rounded-3xl">
              <div className="bg-[#F9D0D9] w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-[#800020]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}