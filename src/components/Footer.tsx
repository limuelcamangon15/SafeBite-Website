const links = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#howitworks" },
  { label: "Community", href: "#community" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black/80">
      <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-5 px-4 md:px-6 pt-10 pb-4 text-center">
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 text-[15px] text-white/60">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-2 py-2 hover:text-white transition"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="text-sm text-white/60">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#2ab407] font-semibold">SafeBite</span>. All
          rights reserved.
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-1 sm:gap-6 text-[13px] text-white/60">
          <div>
            Developed by{" "}
            <span className="text-[#2ab407] font-medium">Concurrent</span>
          </div>
          <div>
            Powered by{" "}
            <span className="text-[#2ab407] font-medium">Open Food Facts</span>
          </div>
        </div>
      </div>

      <div aria-hidden className="relative select-none overflow-hidden">
        <p className="font-display text-center text-[19vw] leading-[0.8] font-semibold tracking-tight text-white/[0.04] translate-y-[12%]">
          SafeBite
        </p>
      </div>
    </footer>
  );
}
