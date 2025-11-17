export default function FeaturesSection() {

	rerurn(
		<section id="features" className="py-16 md:py-20 bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				<div className="text-center mb-10 md:mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
						Whats Coming in StockKeeper
					</h2>
					<p className="text-base text-gray-600">
						Powerful features designed to revolutionize inventory management
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					<IconCard
						icon={FaChartLine}
						title="Real-Time Tracking"
						description="Monitor stock levels, movements, and supply chain status across all locations instantly."
						isBenefit={false}
					/>
					<IconCard
						icon={MdNotifications}
						title="Smart Alerts"
						description="Automatic notifications for low stock, expiry dates, and optimal reorder points."
						isBenefit={false}
					/>
					<IconCard
						icon={FaBarcode}
						title="Barcode Scanning"
						description="Integrated barcode/QR code support with your phone for all major inventory actions."
						isBenefit={false}
					/>
					<IconCard
						icon={FaMobileScreen}
						title="Mobile First"
						description="Dedicated iOS and Android apps for managing inventory anywhere, anytime."
						isBenefit={false}
					/>
				</div>
			</div>
		</section>
      {/* Form */ }
		< section className = "py-16 md:py-24 bg-gray-50" id = "join" >
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
			<h2 className="text-3xl md:text-4xl font-extrabold mb-2">
				Secure Your Spot Today
			</h2>
			<p className="text-md text-gray-600 mb-10 md:mb-12">
				Join 2,847 businesses already on the waitlist!
			</p>

			<Card className="bg-white p-5 md:p-10 shadow-xl">
				<form
					onSubmit={handleFormSubmit}
					className="space-y-4 md:space-y-6"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label className="block text-sm font-medium text-gray-700 text-left mb-1">
								Full Name
							</label>
							<Input
								type="text"
								placeholder="John Doe"
								required
								className="placeholder:text-gray-400"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 text-left mb-1">
								Email Address
							</label>
							<Input
								type="email"
								placeholder="john@company.com"
								required
								className="placeholder:text-gray-400"
							/>
						</div>
					</div>

					<div className="grid grid-cols-1">
						<div>
							<label className="block text-sm font-medium text-gray-700 text-left mb-1">
								Company Name (Optional)
							</label>
							<Input
								type="text"
								placeholder="Your Company"
								className="placeholder:text-gray-400"
							/>
						</div>
					</div>

					{/* Submit Button */}
					<Button
						type="submit"
						className="w-full text-base md:text-lg py-3.5 mt-2 flex items-center justify-center gap-2"
						style={{ backgroundColor: PRIMARY_COLOR }}
					>
						<FaRocketAlt size={20} className="mr-1" />
						Join the Waitlist Now
					</Button>
					<p className="text-sm text-gray-500 mt-4">
						Well notify you as soon as we launch. No spam, ever.
					</p>
					<div className="pt-6 border-t border-gray-100 mt-6">
						<div
							className={`
              grid grid-cols-2 gap-y-4 max-w-sm mx-auto
              md:flex md:justify-around md:max-w-full md:mx-0
            `}
						>
							{[
								"50% Off",
								"Priority Access",
								"Exclusive Features",
								"Free Trial",
							].map((benefit) => (
								<div
									key={benefit}
									className="flex flex-col items-center shrink-0 md:w-auto"
								>
									<span className="h-6 w-6 sm:h-5 sm:w-5 rounded-full bg-[#34D399] text-white flex items-center justify-center mb-1">
										<Check className="h-4 w-4 sm:h-3 sm:w-3" />
									</span>
									<span className="text-sm text-[#4B5563] mt-1 font-medium text-center px-1">
										{benefit}
									</span>
								</div>
							))}
						</div>
					</div>
				</form>
			</Card>
		</div>
      </section >
		)
}