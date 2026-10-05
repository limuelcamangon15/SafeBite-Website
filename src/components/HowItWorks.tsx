import { motion, type Variants } from "framer-motion";
import { ScanLine, Search, Share2 } from "lucide-react";

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

const steps = [
  {
    title: "Scan",
    desc: "Use your camera to scan barcodes instantly.",
    icon: ScanLine,
  },
  {
    title: "Analyze",
    desc: "We fetch allergens and ingredients for you.",
    icon: Search,
  },
  {
    title: "Share",
    desc: "Support the community by sharing what you discover.",
    icon: Share2,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="howitworks"
      className="scroll-mt-24 py-16 md:py-24 px-4 md:px-6 bg-black/40 border-y border-white/5"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-6xl mx-auto"
      >
        <motion.p
          variants={item}
          className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#2ab407]"
        >
          03 · The ritual
        </motion.p>
        <motion.h2
          variants={item}
          className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight"
        >
          Three taps to <span className="text-[#2ab407]">peace of mind.</span>
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] backdrop-blur-xl p-6 md:p-7"
            >
              <span
                aria-hidden
                className="absolute -top-2 right-4 font-display text-8xl font-semibold text-white/[0.06] select-none"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#2ab407]/15 text-[#2ab407]">
                  <step.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/60">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
