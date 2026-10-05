import { MotionConfig } from "framer-motion";
import { Asterisk } from "lucide-react";
import { SiGoogle } from "react-icons/si";
import type { ComponentType } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyBuilt from "./components/WhyBuilt";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Community from "./components/Community";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function GroqMark({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 33 33"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g clipPath="url(#groq-mark)">
        <path fill="#F43E01" d="M.54.39h32v32h-32z" />
        <path
          fill="#fff"
          d="m18.445 4.406-9.468 13.74 7.341.665-1.69 9.578 9.469-13.74-7.342-.664 1.69-9.579Z"
        />
      </g>
      <defs>
        <clipPath id="groq-mark">
          <path fill="#fff" d="M.54.39h32v32h-32z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const ticker: Array<{
  label: string;
  Icon?: ComponentType<{ size?: number; className?: string }>;
}> = [
  { label: "Barcode Scanner" },
  { label: "Allergen Detection" },
  { label: "Community Driven" },
  { label: "Powered by Open Food Facts" },
  { label: "Powered by Groq AI", Icon: GroqMark },
  { label: "Powered by Google Machine Learning", Icon: SiGoogle },
];

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-black text-white antialiased overflow-x-hidden">
        <div aria-hidden className="grain" />
        <Navbar />
        <main>
          <Hero />
          <div
            aria-hidden
            className="relative overflow-hidden border-y border-white/10 bg-black/40 py-4"
          >
            <div className="marquee-track flex w-max items-center">
              {[...ticker, ...ticker].map((t, i) => (
                <span
                  key={i}
                  className="mx-6 flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-white/55"
                >
                  {t.Icon && (
                    <t.Icon
                      size={16}
                      className="shrink-0 text-white/70"
                    />
                  )}
                  {t.label}
                  <Asterisk size={16} className="ml-9 text-[#2ab407]" />
                </span>
              ))}
            </div>
          </div>
          <WhyBuilt />
          <Features />
          <HowItWorks />
          <Community />
          <CTA />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
