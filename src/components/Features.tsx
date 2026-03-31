import { FaBarcode, FaExclamationTriangle, FaUsers } from "react-icons/fa";

const features = [
  {
    title: "Barcode Scanner",
    desc: "Instantly scan food products and retrieve data in seconds.",
    icon: <FaBarcode />,
  },
  {
    title: "Allergen Detection",
    desc: "Identify allergens and ingredients that matter to you.",
    icon: <FaExclamationTriangle />,
  },
  {
    title: "Make an Impact",
    desc: "Your shared insights can help someone avoid allergens.",
    icon: <FaUsers />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Powerful <span className="text-[#2ab407]">Features</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-white/10 bg-black/40 hover:border-[#2ab407] hover:shadow-lg hover:shadow-green-500/20 transition duration-300 group"
          >
            <div className="flex items-center gap-3 mb-3">
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#2ab407]/10 text-[#2ab407] text-xl group-hover:scale-110 transition">
                {f.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold">{f.title}</h3>
            </div>

            {/* Description */}
            <p className="text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
