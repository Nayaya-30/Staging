import Hero from '@/components/Hero'
import StatsStrip from '@/components/StatsStrip'
import FeaturesGrid from '@/components/FeaturesGrid'
import HowItWorks from '@/components/HowItWorks'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'

export default function HomePage() {
	return (
		<>
			<Hero />
			<StatsStrip />
			<FeaturesGrid />
			<HowItWorks />
			<WhyChooseUs />
			<Testimonials />
			<FAQ />
			<FinalCTA />
		</>
	)
}