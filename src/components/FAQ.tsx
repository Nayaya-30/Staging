// app/(home)/components/FAQ.tsx
import Accordion, { AccordionItem } from '@/components/ui/accordion'
const faqs = [
	{
		question: "How does the free trial work?",
		answer:
			"You get full access to all features for 14 days, no credit card required. After the trial, you can choose a plan that fits your needs or continue with our free tier.",
	},
	{
		question: "Can I import my existing inventory?",
		answer:
			"Yes! We support CSV imports and provide templates and live support to help you get started quickly.",
	},
	{
		question: "Is my data secure?",
		answer:
			"Absolutely. We use bank-level encryption and security measures to protect your data. Your inventory information is backed up daily and stored securely.",
	},
	{
		question: "Do you offer mobile apps?",
		answer:
			"Yes! Our iOS and Android apps let you manage your inventory, scan barcodes, and check stock levels from anywhere.",
	},
	{
		question: "What kind of support do you provide?",
		answer:
			"We offer 24/7 email support, live chat during business hours, and comprehensive documentation. Premium plans include priority support and dedicated account managers.",
	},
	{
		question: "Can I cancel anytime?",
		answer:
			"Yes, you can cancel your subscription at any time with no penalties. Your data will remain accessible, and you can export it whenever needed.",
	},
]

export default function FAQ() {
	return (
		<section className="py-20 bg-white">
			<div className="max-w-4xl mx-auto px-6 text-center">
				<h2 className="text-4xl font-bold text-gray-900 mb-4">
					Frequently Asked Questions
				</h2>
				<p className="text-xl text-gray-600 mb-16">
					Everything you need to know about StockKeeper
				</p>

				{/* Updated to use our new standalone accordion */}
				<Accordion>
					{faqs.map((faq, index) => (
						<AccordionItem
							key={index}
							title={faq.question}
							defaultOpen={index === 0} // First item open by default (optional)
						>
							{faq.answer}
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	)
}