import { INFO_CARDS, OFFICIAL_LINKS } from "../data";
import { Icon } from "./Icons";

export default function Challenge() {
  return (
    <section
      id="current-challenge"
      className="py-24 bg-[#0A0A0A] relative overflow-hidden text-zinc-300"
    >
      {/* Dynamic background shape */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#B00000]/5 to-transparent rounded-tr-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-[#B00000]/15 border border-[#B00000]/30 text-[#FF4D4D] text-[11px] font-mono uppercase font-extrabold tracking-wider" id="active-challenge-badge">
            🏆 Active Campaign
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Current Challenge: <span className="text-[#FF4D4D]">20 Days Walk Challenge</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Our current campaign is the Stride 20 Days Walk Challenge. The campaign is specifically engineered to help members build consistency, stay active daily, and qualify for awards.
          </p>
        </div>

        {/* Informative Core description with 5 columns card Layout */}
        <div className="bg-[#131315] text-white rounded-3xl p-8 md:p-12 shadow-xl border border-white/5 relative mb-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B00000]/10 rounded-full blur-[80px]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left side text summary inside the dark banner */}
            <div className="lg:col-span-4 space-y-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
              <span className="text-[10px] font-mono uppercase text-[#FF4D4D] font-extrabold tracking-widest block">
                Challenge Vision
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white leading-tight">
                Walk 10,000 Steps Daily
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                Participants are encouraged to hit a daily benchmark of 10k steps. The journey helps transform physical steps into durable daily fitness habit loops.
              </p>
            </div>

            {/* Right side 5-card info grid */}
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {INFO_CARDS.map((card) => (
                  <div
                    key={card.id}
                    className="bg-[#1E1E22]/50 rounded-2xl p-4 border border-zinc-800 hover:bg-[#1E1E22] transition-colors flex flex-col justify-between"
                  >
                    <div className="h-8 w-8 rounded-lg bg-white/10 text-white flex items-center justify-center mb-4">
                      <Icon name={card.iconName} className="h-4.5 w-4.5 text-[#FF4D4D]" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider block">
                        {card.label}
                      </span>
                      <span className="text-sm font-bold text-white block truncate">
                        {card.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Buttons Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto" id="challenge-ctas">
          <a
            href={OFFICIAL_LINKS.pacerChallenge}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-1/2 px-8 py-4 rounded-full bg-[#B00000] text-white hover:bg-[#D10000] font-bold text-center tracking-wider transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center"
            id="challenge-cta-pacer"
          >
            Join Pacer Challenge
            <Icon name="ExternalLink" className="ml-2 h-4.5 w-4.5" />
          </a>
          <a
            href={OFFICIAL_LINKS.whatsappGroup}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-1/2 px-8 py-4 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 border-2 border-zinc-850 font-bold text-center tracking-wider transition-all duration-300 inline-flex items-center justify-center"
            id="challenge-cta-whatsapp"
          >
            Join WhatsApp Group
            <Icon name="MessageSquareText" className="ml-2 h-4.5 w-4.5 text-[#FF4D4D]" />
          </a>
        </div>

      </div>
    </section>
  );
}
