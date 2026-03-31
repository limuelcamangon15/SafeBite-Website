import { FaBarcode, FaSearch, FaShareAlt } from "react-icons/fa";

const steps = [
  {
    title: "Scan",
    desc: "Use your camera to scan barcodes instantly.",
    icon: <FaBarcode />,
  },
  {
    title: "Analyze",
    desc: "We fetch allergens and ingredients for you.",
    icon: <FaSearch />,
  },
  {
    title: "Share",
    desc: "Support the community by sharing what you discover.",
    icon: <FaShareAlt />,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-black/40">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-12">
          How It <span className="text-[#2ab407]">Works</span>
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-white/10 bg-black/40 hover:border-[#2ab407] hover:shadow-lg hover:shadow-green-500/20 transition duration-300 group"
            >
              {/* Step Number */}
              <div className="text-sm text-gray-500 mb-2">Step {i + 1}</div>

              {/* Icon */}
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-lg bg-[#2ab407]/10 text-[#2ab407] text-xl mb-4 group-hover:scale-110 transition">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm md:text-base">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
