import { motion, type Variants } from "framer-motion";
import { ScanBarcode, TriangleAlert, Users, ArrowRight } from "lucide-react";

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

const features = [
  {
    title: "Barcode Scanner",
    desc: "Instantly scan food products and retrieve data in seconds.",
    icon: ScanBarcode,
  },
  {
    title: "Allergen Detection",
    desc: "Identify allergens and ingredients that matter to you.",
    icon: TriangleAlert,
  },
  {
    title: "Make an Impact",
    desc: "Your shared insights can help someone avoid allergens.",
    icon: Users,
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-16 md:py-24 px-4 md:px-6">
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
          02 · What it does
        </motion.p>
        <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <motion.h2
            variants={item}
            className="font-display text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Built for the way
            <br />
            you <span className="text-[#2ab407]">shop & snack.</span>
          </motion.h2>
          <motion.a
            variants={item}
            href="#howitworks"
            className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-white/65 hover:text-white transition shrink-0"
          >
            How it works
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </motion.a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group rounded-[28px] border border-white/10 bg-white/[0.06] backdrop-blur-xl p-6 md:p-7"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#2ab407]/15 text-[#2ab407] transition-transform group-hover:scale-110 group-hover:-rotate-6">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/60">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
