import { motion, type Variants } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { ChevronRight, Star } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-black via-[#0b0f0c] to-black"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[42rem] rounded-full bg-[#2ab407]/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-56 w-[36rem] rounded-full bg-[#2ab407]/10 blur-[100px]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-3xl mx-auto px-4 sm:px-6 pt-32 md:pt-40 pb-16 md:pb-24 text-center"
      >
        <motion.h1
          variants={item}
          className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.02] tracking-tight text-white"
        >
          Eat <span className="text-[#2ab407]">Safe.</span>
          <br />
          Live Better.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 text-lg md:text-xl leading-relaxed text-white/65 max-w-xl mx-auto"
        >
          Scan food instantly, detect allergens, and make smarter choices with
          SafeBite.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3"
        >
          <div className="relative">
            <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap rounded-full border border-white/10 bg-white/10 backdrop-blur-xl px-2.5 py-0.5 text-[11px] font-semibold text-white/70">
              Coming Soon
            </span>
            <button
              type="button"
              disabled
              aria-disabled="true"
              title="SafeBite for iOS is coming soon"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 min-h-[52px] px-7 rounded-full bg-white/10 text-white/40 text-[17px] font-semibold cursor-not-allowed"
            >
              <FaApple size={20} />
              <span>App Store</span>
            </button>
          </div>

          <motion.a
            href="#cta"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="inline-flex items-center justify-center gap-3 min-h-[52px] px-7 rounded-full bg-[#2ab407] text-black text-[17px] font-semibold shadow-lg shadow-green-500/25"
          >
            <FaGooglePlay size={18} />
            <span>Google Play</span>
          </motion.a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <span className="flex items-center gap-0.5" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} className="fill-[#2ab407] text-[#2ab407]" />
            ))}
          </span>
          <a
            href="#howitworks"
            className="group inline-flex items-center gap-1 text-[15px] font-medium text-white/65 hover:text-white transition"
          >
            See how it works
            <ChevronRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
