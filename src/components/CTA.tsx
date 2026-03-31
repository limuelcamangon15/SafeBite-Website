import { FaGooglePlay } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="py-20 px-6 text-center bg-gradient-to-r from-[#0b0f0c] via-[#0b0f0c]/80 to-[#2ab407]/10">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Start Making <span className="text-[#2ab407]">Safer Food Choices</span>{" "}
        Today
      </h2>

      {/* Download Button */}
      <button className="flex items-center justify-center gap-3 mx-auto bg-[#2ab407] text-black px-8 py-4 rounded-full font-semibold text-sm md:text-base hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/20">
        <FaGooglePlay size={20} />
        <span>Download SafeBite</span>
      </button>
    </section>
  );
}
