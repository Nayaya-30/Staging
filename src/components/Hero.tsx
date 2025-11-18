import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PlayCircle, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <Badge className="mb-6 bg-green-100 text-green-700 hover:bg-green-100">
          Start Your 14-Day Free Trial Today
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Manage Your Inventory with Confidence
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          StockKeeper helps businesses track, manage, and optimize their inventory in real-time.
          Say goodbye to stockouts and overstocking with intelligent inventory management.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button size="lg" className="bg-[#800020] hover:bg-[#600018] text-white px-8 h-14 text-lg font-bold rounded-xl">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="border-gray-300 px-8 h-14 text-lg font-bold rounded-xl flex items-center gap-3">
            <PlayCircle className="w-6 h-6" />
            Watch Demo
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            14-day free trial
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            Cancel anytime
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Badge variant="secondary" className="bg-green-50 text-green-700 text-lg px-6 py-3">
            98% Accuracy Rate
          </Badge>
        </div>
      </div>
    </section>
  )
}