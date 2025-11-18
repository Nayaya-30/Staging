export default function HowItWorks() {
  const steps = [
    { num: "1", title: "Sign Up Free", desc: "Create your account in seconds. No credit card required for the 14-day free trial." },
    { num: "2", title: "Add Your Products", desc: "Import your inventory via CSV or add products manually. Bulk upload supported." },
    { num: "3", title: "Start Managing", desc: "Track stock, set alerts, generate reports, and optimize your inventory effortlessly." },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Started in Minutes</h2>
        <p className="text-xl text-gray-600 mb-16">Simple setup process to get your inventory management up and running</p>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gray-200 border-2 border-dashed rounded-3xl w-full h-64" />
                <div className="p-8">
                  <div className="w-12 h-12 bg-[#800020] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}