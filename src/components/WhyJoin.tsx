import { WHY_JOIN_CARDS } from "../data";
import { Icon } from "./Icons";

export default function WhyJoin() {
  return (
    <section
      id="why-join"
      className="py-24 bg-[#121214] relative overflow-hidden text-zinc-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="why-join-header">
          <span className="text-[#FF4D4D] font-mono text-xs uppercase font-extrabold tracking-[0.25em] block">
            Membership Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Why Join Stride Run Club?
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            We build sustainable habits by combining structural technology, motivational challenges, and standard community engagement.
          </p>
        </div>

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="why-join-cards-grid">
          {WHY_JOIN_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-[#18181C] rounded-2xl p-6 md:p-8 border border-white/5 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 hover:border-[#FF4D4D]/30 flex flex-col justify-between"
              id={`why-join-card-${card.id}`}
            >
              <div className="space-y-6">
                
                {/* Icon wrapper */}
                <div className="h-12 w-12 rounded-xl bg-[#B00000]/15 text-[#FF4D4D] flex items-center justify-center transition-all duration-300 group-hover:bg-[#B00000] group-hover:text-white group-hover:scale-105">
                  <Icon name={card.iconName} className="h-6 w-6" />
                </div>

                {/* Card Title & Content */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-[#FF4D4D] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

              </div>

              {/* Action Prompt decoration */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center text-xs font-mono font-bold text-[#FF4D4D] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Explore Benefit</span>
                <Icon name="ArrowRight" className="ml-1.5 h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
