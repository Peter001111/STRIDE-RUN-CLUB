import { PRIZE_CARDS } from "../data";
import { Icon } from "./Icons";

export default function Prizes() {
  return (
    <section
      id="challenge-prizes"
      className="py-24 bg-[#121214] relative overflow-hidden text-zinc-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4" id="prizes-title-block">
          <span className="text-[#FF4D4D] font-mono text-xs uppercase font-extrabold tracking-[0.25em] block">
            Campaign Incentives
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            20 Days Walk Challenge Prizes
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Our challenges reward grit, persistent strides, and habit adherence. Here are the official incentives distributed to top performing members.
          </p>
        </div>

        {/* 3 Distinct Premium Prize Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16" id="prizes-cards-grid">
          {PRIZE_CARDS.map((prize, idx) => (
            <div
              key={prize.place}
              className={`bg-[#18181C] rounded-3xl p-8 border shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between ${
                prize.place === "1st Place" ? "border-[#FFD700] ring-4 ring-[#FFD700]/10" : "border-white/5"
              }`}
              id={`prize-card-${idx}`}
            >
              {/* Corner decorative gradient light element */}
              <div
                className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-40 bg-gradient-to-br ${
                  prize.place === "1st Place"
                    ? "from-[#FFD700] to-orange-400"
                    : prize.place === "2nd Place"
                    ? "from-slate-400 to-slate-200"
                    : "from-amber-600 to-amber-800"
                }`}
              />

              <div className="space-y-6 relative z-10">
                {/* Badge placement */}
                <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-mono uppercase font-black tracking-widest ${
                  prize.place === "1st Place"
                    ? "bg-[#FFD700]/15 text-[#FFD700]"
                    : prize.place === "2nd Place"
                    ? "bg-zinc-800 text-zinc-350"
                    : "bg-amber-950/40 text-amber-500"
                }`}>
                  {prize.place}
                </span>

                <div className="space-y-2">
                  <span className="text-[11px] text-zinc-500 font-semibold uppercase tracking-wider block">
                    Cash Reward
                  </span>
                  <p className="text-4xl font-display font-black text-white tracking-tight">
                    {prize.rewardValue}
                  </p>
                </div>

                <div className="space-y-1.5 pt-4 border-t border-zinc-800">
                  <span className="text-[11px] text-zinc-500 font-semibold uppercase tracking-wider block">
                    Assets &amp; Equity Bonus
                  </span>
                  <p className="text-lg font-bold text-[#FF4D4D] font-sans">
                    {prize.shares}
                  </p>
                </div>
              </div>

              {/* Bottom detail */}
              <div className="pt-6 mt-6 border-t border-zinc-800 flex items-center justify-between relative z-10">
                <span className="text-xs text-zinc-400 font-semibold italic">{prize.criteria}</span>
                <Icon
                  name="Trophy"
                  className={`h-5 w-5 ${
                    prize.place === "1st Place"
                      ? "text-[#FFD700]"
                      : prize.place === "2nd Place"
                      ? "text-slate-400"
                      : "text-amber-700"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Note Disclaimer Box (Compliance with STRICT constraints) */}
        <div
          className="max-w-3xl mx-auto bg-[#18181C] border border-white/5 rounded-2xl p-5 md:p-6 text-center shadow-md"
          id="leaderboard-notes-box"
        >
          <div className="flex items-center justify-center space-x-2.5 text-white font-bold text-sm sm:text-base">
            <Icon name="Smartphone" className="h-5 w-5 text-[#FF4D4D] shrink-0 animate-bounce" />
            <span>Leaderboard sync is hosted elsewhere</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 font-medium mt-2 leading-relaxed">
            Challenge ranking and leaderboard updates are available inside the <span className="font-bold underline text-[#FF4D4D]">Pacer App</span>. Direct member telemetry, ranking lists, or metrics are not made public on this website in order to protect participant confidentiality.
          </p>
        </div>

      </div>
    </section>
  );
}
