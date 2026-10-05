import { motion, type Variants } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

export default function CTA() {
  return (
    <section
      id="cta"
      className="scroll-mt-24 relative overflow-hidden py-16 md:py-24 px-4 md:px-6 text-center border-t border-white/5 bg-gradient-to-b from-black via-[#0b0f0c] to-black"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-[40rem] rounded-full bg-[#2ab407]/10 blur-[100px]"
      />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative max-w-2xl mx-auto"
      >
        <motion.p
          variants={item}
          className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#2ab407]"
        >
          05 · Get the app
        </motion.p>
        <motion.h2
          variants={item}
          className="mt-3 font-display text-4xl md:text-6xl font-semibold tracking-tight"
        >
          Your pocket
          <br />
          <span className="text-[#2ab407]">food detective.</span>
        </motion.h2>
        <motion.p variants={item} className="mt-4 text-[17px] text-white/60">
          Available on Android. iOS coming soon.
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
            href="https://play.google.com/store"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="inline-flex items-center justify-center gap-3 min-h-[52px] px-7 rounded-full bg-[#2ab407] text-black text-[17px] font-semibold shadow-lg shadow-green-500/25"
          >
            <FaGooglePlay size={18} />
            <span>Google Play</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
