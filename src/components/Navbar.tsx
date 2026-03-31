export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero">
          <h1 className="text-xl font-bold text-[#2ab407]">
            Safe<span className="text-white">Bite</span>
          </h1>
        </a>

        <div className="hidden md:flex gap-6 text-sm">
          <a href="#features" className="hover:text-primary">
            Features
          </a>
          <a href="#howitworks" className="hover:text-primary">
            How it Works
          </a>
          <a href="#community" className="hover:text-primary">
            Community
          </a>
        </div>

        <button className="bg-primary text-black px-4 py-2 rounded-lg cursor-pointer bg-[#2ab407] hover:bg-[#2ab407a4] text-sm font-semibold hover:scale-105 transition">
          Get App
        </button>
      </div>
    </nav>
  );
}
