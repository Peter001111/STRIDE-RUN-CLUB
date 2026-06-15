import { OFFICIAL_LINKS } from "../data";
import { Icon } from "./Icons";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#121212] to-[#0A0A0A]"
    >
      {/* Dynamic background accents for athletic vibe */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#B00000]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[40rem] h-[40rem] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left">
            
            {/* Live badge */}
            <div className="inline-flex self-center lg:self-start items-center space-x-2 px-3 py-1.5 rounded-full bg-[#B00000]/15 border border-[#B00000]/30 text-[#FF4D4D] text-xs font-mono uppercase font-bold tracking-widest animate-pulse" id="hero-live-badge">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B00000] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B00000]"></span>
              </span>
              <span>Join Stride Community Today</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.15]" id="hero-headline">
              Stride Together. <br className="hidden sm:inline" />
              <span className="text-[#FF3E3E] relative inline-block">
                Stronger
                <span className="absolute left-0 bottom-1 w-full h-[6px] bg-[#B00000]/20 -z-10 rounded-full" />
              </span> Every Day.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0" id="hero-subheadline">
              Join a community built around movement, consistency, wellness, and accountability. Whether you walk, run, or simply want to become more active, Stride Run Club helps you keep moving one step at a time.
            </p>

            {/* Buttons Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4" id="hero-actions">
              <a
                href={OFFICIAL_LINKS.whatsappGroup}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#B00000] text-white hover:bg-[#D10000] font-bold text-center tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center justify-center min-w-[220px]"
                id="hero-cta-whatsapp"
              >
                Join Stride Run Club
                <Icon name="ArrowRight" className="ml-2.5 h-5 w-5" />
              </a>
              <button
                onClick={() => scrollToSection("current-challenge")}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 text-white hover:bg-white/15 border-2 border-white/15 font-bold tracking-wider transition-all duration-300 inline-flex items-center justify-center min-w-[220px]"
                id="hero-cta-challenge"
              >
                View Current Challenge
              </button>
            </div>

            {/* Highlights Grid */}
            <div className="pt-8 border-t border-white/10" id="hero-highlights">
              <p className="text-white/40 text-xs font-mono uppercase tracking-[0.2em] font-bold text-center lg:text-left mb-4">
                What We Stride For
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center lg:text-left">
                <div className="flex flex-col items-center lg:items-start p-3 bg-zinc-900/50 rounded-xl border border-white/5">
                  <Icon name="Users2" className="text-[#FF4D4D] h-5 w-5 mb-1" />
                  <span className="text-xs font-bold text-white">Walking Community</span>
                </div>
                <div className="flex flex-col items-center lg:items-start p-3 bg-zinc-900/50 rounded-xl border border-white/5">
                  <Icon name="Flame" className="text-[#FF4D4D] h-5 w-5 mb-1" />
                  <span className="text-xs font-bold text-white">Running Motivation</span>
                </div>
                <div className="flex flex-col items-center lg:items-start p-3 bg-zinc-900/50 rounded-xl border border-white/5">
                  <Icon name="Trophy" className="text-[#FF4D4D] h-5 w-5 mb-1" />
                  <span className="text-xs font-bold text-white">Fitness Challenges</span>
                </div>
                <div className="flex flex-col items-center lg:items-start p-3 bg-zinc-900/50 rounded-xl border border-white/5">
                  <Icon name="Sparkles" className="text-[#FF4D4D] h-5 w-5 mb-1" />
                  <span className="text-xs font-bold text-white">Wellness Support</span>
                </div>
              </div>
            </div>

          </div>

          {/* Visual Presentation Accent Section (Card design / mock tracking info) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]" id="hero-visual-card">
              {/* Outer decorative ring */}
              <div className="absolute inset-x-0 top-0 bottom-0 border-2 border-white/5 rounded-3xl -rotate-3 scale-102 bg-white/5 -z-10" />
              
              {/* Core card representation */}
              <div className="bg-[#161618] text-white rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden border border-white/10">
                {/* Internal gradient sweep */}
                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[#B00000]/15 rounded-full blur-[80px]" />
                
                {/* Header */}
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-6 w-6 rounded-full bg-[#B00000] flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">S</span>
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest font-bold text-zinc-300">Stride Club Leaderboard</span>
                  </div>
                  <span className="text-[10px] font-mono bg-[#B00000]/25 text-[#FF8888] py-0.5 px-2 rounded-full border border-[#B00000]/30 font-semibold">Active</span>
                </div>

                {/* Main visualization stats */}
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-semibold text-white/50 block mb-1">Total Stride Challenge Steps</span>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight">1,482,904</span>
                      <span className="text-[#FF4D4D] font-mono text-xs uppercase font-extrabold tracking-wider animate-pulse">▲ Steps</span>
                    </div>
                  </div>

                  {/* Visual Tracker bar mockup */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-white/70">Daily Community Goal reached</span>
                      <span className="font-bold text-[#FF4D4D]">84%</span>
                    </div>
                    <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-[#B00000] to-orange-500 h-full w-[84%] rounded-full" />
                    </div>
                  </div>

                  {/* Info highlights inside visual */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                      <Icon name="Calendar" className="text-amber-500 h-4 w-4 mb-1" />
                      <span className="text-[11px] font-semibold text-white/50 block">Challenge Period</span>
                      <span className="text-xs font-bold text-white block mt-0.5">June 10 - 30</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                      <Icon name="Footprints" className="text-emerald-500 h-4 w-4 mb-1" />
                      <span className="text-[11px] font-semibold text-white/50 block">Target Daily</span>
                      <span className="text-xs font-bold text-white block mt-0.5">10,000 Steps</span>
                    </div>
                  </div>
                </div>

                {/* Disclaimer info at bottom of card */}
                 <div className="mt-8 pt-4 border-t border-white/10 text-center">
                  <p className="text-[10px] text-white/50 font-mono tracking-wide">
                    ⚠️ Official Live Rankings are hosted in the Pacer app. Always join via WhatsApp prompt verification.
                  </p>
                </div>

              </div>

              {/* Decorative tag overlay */}
              <div className="absolute -bottom-5 -right-5 bg-zinc-900 border-[3px] border-zinc-800 text-white font-display font-bold text-xs tracking-wider uppercase py-2.5 px-5 rounded-xl shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300 cursor-default">
                 Every Step Counts.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
