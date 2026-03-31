import { FaUsers, FaCommentDots } from "react-icons/fa";

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
      className="py-16 md:py-20 px-4 md:px-6 max-w-6xl mx-auto text-center"
    >
      {/* Title */}
      <div className="flex flex-col items-center mb-10">
        <FaUsers className="text-[#2ab407] w-12 h-12 mb-2" />
        <h2 className="text-2xl md:text-3xl font-bold">
          Community Driven <span className="text-[#2ab407]">Food Safety</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mt-4">
          Share your food experiences, warn others about allergens, and help
          build a safer food ecosystem together.
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible pb-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 md:flex-shrink bg-black/40 border border-white/10 rounded-xl p-6 hover:shadow-lg hover:shadow-green-500/20 transition duration-300"
          >
            <FaCommentDots className="text-[#2ab407] w-6 h-6 mb-2" />
            <p className="text-gray-400 italic text-sm md:text-base">
              “{t.quote}”
            </p>
            <p className="mt-4 text-[#2ab407] font-semibold">— {t.user}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
