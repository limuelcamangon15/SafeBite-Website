import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/safebite-no-bg.png";

const links = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#howitworks" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center gap-1.5">
          <img src={logo} alt="SafeBite Logo" className="w-9 h-9" />
          <span className="font-display text-xl font-semibold tracking-tight text-[#2ab407]">
            Safe<span className="text-white">Bite</span>
          </span>
        </a>

        <div className="hidden md:flex gap-8 text-[15px] text-white/70">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="py-2 hover:text-white transition">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <motion.a
            href="#cta"
            whileTap={{ scale: 0.96 }}
            className="hidden sm:inline-flex items-center justify-center min-h-[44px] bg-[#2ab407] text-black px-5 rounded-full text-[15px] font-semibold"
          >
            Get App
          </motion.a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-white hover:bg-white/10 transition"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-black/60 backdrop-blur-xl"
          >
            <div className="px-4 py-3 flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3.5 px-2 text-[17px] text-white/80 border-b border-white/5 last:border-0 active:bg-white/5 rounded-lg"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-2 mb-2 inline-flex items-center justify-center min-h-[50px] bg-[#2ab407] text-black rounded-full text-[17px] font-semibold"
              >
                Get App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
