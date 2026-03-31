export default function Footer() {
  return (
    <footer className="py-10 px-5 text-center text-gray-400 text-sm border-t border-white/10 bg-black/80">
      {/* Copyright */}
      <div className="mb-4">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#2ab407] font-semibold">SafeBite</span>. All
        rights reserved.
      </div>

      {/* Info Sections */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between gap-2 md:gap-0 text-gray-400 text-xs md:text-sm max-w-3xl mx-auto">
        <div>
          Developed by{" "}
          <span className="text-[#2ab407] font-medium">Concurrent</span>
        </div>
        <div>
          Powered by{" "}
          <span className="text-[#2ab407] font-medium">Open Food Facts</span>
        </div>
      </div>
    </footer>
  );
}
