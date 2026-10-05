import { motion, type Variants } from "framer-motion";
import { Quote } from "lucide-react";

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

const testimonials = [
  {
    quote: "This snack contains hidden peanuts — saved me from a reaction!",
    user: "John Mark Kurt",
  },
  {
    quote:
      "I found out a cereal had allergens that is not listed on the package, avoid this if you are very allergic!",
    user: "Paul Adrianne",
  },
  {
    quote:
      "I ate this food and found out it has a hidden allergen ingredient not listed — be careful everyone!",
    user: "Limuel",
  },
];

export default function Community() {
  return (
    <section
      id="community"
      className="scroll-mt-24 py-16 md:py-24 px-4 md:px-6"
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
          04 · Community
        </motion.p>
        <motion.h2
          variants={item}
          className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl"
        >
          Warnings from people who{" "}
          <span className="text-[#2ab407]">read the label first.</span>
        </motion.h2>
        <motion.p variants={item} className="mt-4 text-[17px] text-white/60 max-w-2xl">
          Share your food experiences, warn others about allergens, and help
          build a safer food ecosystem together.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3">
          {testimonials.map((t) => (
            <motion.figure
              key={t.user}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col rounded-[28px] border border-white/10 bg-white/[0.06] backdrop-blur-xl p-6 md:p-7"
            >
              <Quote
                aria-hidden
                size={28}
                className="fill-[#2ab407]/20 text-[#2ab407]"
              />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-white/75 italic">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                <span
                  aria-hidden
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#2ab407]/15 text-[15px] font-semibold text-[#2ab407]"
                >
                  {t.user.charAt(0)}
                </span>
                <span className="text-[15px] font-semibold text-white">
                  {t.user}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
