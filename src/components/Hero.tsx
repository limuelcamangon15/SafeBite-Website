import { FaGooglePlay } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 text-center bg-linear-to-b from-black via-[#0b0f0c] to-black"
    >
      <div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Eat <span className="text-[#2ab407]">Safe.</span>{" "}
          <span className="text-primary">Live Better.</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          Scan food instantly, detect allergens, and make smarter choices with
          SafeBite.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          {/* Play Store Button */}
          <button className="flex items-center gap-3 bg-[#2ab407] text-white px-6 py-3 cursor-pointer rounded-full text-sm font-semibold hover:bg-[#2ab407cc] hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/20">
            <FaGooglePlay size={18} />
            <span>Get on Play Store</span>
          </button>

          {/* Learn More */}
          <button className="flex items-center gap-2 border border-white/20 px-6 py-3 cursor-pointer rounded-full hover:bg-white/10 transition duration-300 group">
            <span>Learn More</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
