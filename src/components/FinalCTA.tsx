import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="bg-[#800020] py-20 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Inventory Management?
        </h2>
        <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
          Join thousands of businesses already using StockKeeper. Start your free trial today!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button size="lg" className="bg-white text-[#800020] hover:bg-gray-100 px-10 h-16 text-lg font-bold rounded-xl shadow-xl">
            Start Your 14-Day Free Trial
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-10 h-16 text-lg font-bold rounded-xl">
            Schedule a Demo
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            Cancel anytime
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            Cancel anytime
          </div>
        </div>

        <div className="mt-12">
          <Badge className="bg-white/20 text-white text-lg px-8 py-3">
            Trusted by 5,000+ businesses worldwide
          </Badge>
        </div>
      </div>
    </section>
  )
}