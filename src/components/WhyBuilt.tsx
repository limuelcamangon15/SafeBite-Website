import { motion, type Variants } from "framer-motion";
import { Database, Brain, Zap } from "lucide-react";

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

const stack = [
  {
    icon: Database,
    name: "Open Food Facts",
    role: "The open food product database.",
  },
  {
    icon: Brain,
    name: "Google Machine Learning",
    role: "Ingredient and allergen intelligence.",
  },
  {
    icon: Zap,
    name: "Groq AI",
    role: "Real-time reasoning at scan speed.",
  },
];

export default function WhyBuilt() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
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
          01 · Why we built this
        </motion.p>
        <motion.h2
          variants={item}
          className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl"
        >
          Labels don&apos;t tell the{" "}
          <span className="text-[#2ab407]">whole story.</span>
        </motion.h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2 max-w-4xl">
          <motion.p
            variants={item}
            className="text-[17px] leading-relaxed text-white/65"
          >
            Too many reactions start with a label that looked safe. Hidden
            ingredients, vague warnings, and fine print turn everyday shopping
            into a gamble for anyone with food allergies.
          </motion.p>
          <motion.p
            variants={item}
            className="text-[17px] leading-relaxed text-white/65"
          >
            We built SafeBite to close that gap — open food data, warnings
            from a community that reads labels first, and machine
            intelligence that makes sense of it all in seconds.
          </motion.p>
        </div>

        <motion.p
          variants={item}
          className="mt-12 text-[13px] font-semibold uppercase tracking-[0.2em] text-white/55"
        >
          Powered by
        </motion.p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {stack.map(({ icon: Icon, name, role }) => (
            <motion.div
              key={name}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center gap-4 rounded-[28px] border border-white/10 bg-white/[0.06] backdrop-blur-xl p-5"
            >
              <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-2xl bg-[#2ab407]/15 text-[#2ab407]">
                <Icon size={21} />
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-white">{name}</h3>
                <p className="mt-0.5 text-[15px] leading-snug text-white/60">
                  {role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
