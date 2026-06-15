import { Icon } from "./Icons";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#0E0E10] relative overflow-hidden text-zinc-300"
    >
      {/* Decorative vector background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#B00000]/10 to-transparent rounded-bl-full -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Bold Statement & Brand Vibe */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#FF4D4D] font-mono text-xs uppercase font-extrabold tracking-[0.25em] block">
              Movement &amp; Habit Building
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              About <br />
              <span className="text-[#FF4D4D]">Stride Run Club</span>
            </h2>
            
            {/* Visual spacer bar */}
            <div className="h-1.5 w-16 bg-[#B00000] rounded-full" />
            
            {/* Quote block style */}
            <p className="font-display text-lg sm:text-xl font-medium text-zinc-300 italic leading-relaxed pt-2">
              "We believe fitness becomes easier, more rewarding, and infinitely more consistent when people do it together."
            </p>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-8" id="about-narrative">
            <div className="text-base sm:text-lg text-zinc-400 leading-relaxed space-y-6">
              <p>
                Stride Run Club is a fitness and wellness community created to encourage people to move more, stay active, and build healthier daily habits through walking, running, and community-driven challenges.
              </p>
              <p>
                Through motivation, accountability, and friendly challenges, members are encouraged to stay consistent, track their progress, and celebrate every step forward. Whether you seek high-intensity runs, casual weekend walk &amp; talk sessions, or virtual accountability groups, Stride provides the structured framework to support your pace.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10" id="about-pillars">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-white">
                  <Icon name="CheckCircle2" className="text-[#FF4D4D] h-4 w-4 shrink-0" />
                  <span className="font-display font-bold text-sm">Consistency</span>
                </div>
                <p className="text-xs text-zinc-400">Focus on daily efforts rather than immediate velocity.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-white">
                  <Icon name="CheckCircle2" className="text-[#FF4D4D] h-4 w-4 shrink-0" />
                  <span className="font-display font-bold text-sm">Accountability</span>
                </div>
                <p className="text-xs text-zinc-400">Shared leaderboards, chat prompts, and direct support.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-white">
                  <Icon name="CheckCircle2" className="text-[#FF4D4D] h-4 w-4 shrink-0" />
                  <span className="font-display font-bold text-sm">Rewards</span>
                </div>
                <p className="text-xs text-zinc-400">Celebrate milestones with tangible wellness-oriented prizes.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
