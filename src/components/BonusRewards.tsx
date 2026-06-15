import { Icon } from "./Icons";

export default function BonusRewards() {
  return (
    <section
      id="bonus-rewards"
      className="py-24 bg-[#121214] relative overflow-hidden text-zinc-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Explanatory narrative */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <span className="text-[#FF4D4D] font-mono text-xs uppercase font-extrabold tracking-[0.25em] block">
              Random Incentives
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Surprise Bonus Rewards
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-normal">
              During selected challenges, Stride Run Club may announce surprise bonus rewards randomly. These special milestones and prompts will not happen every single day, so members are highly encouraged to stay active, invite friends, and keep participating consistently to catch them!
            </p>
            
            {/* Tiny indicators of how it works */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4" id="bonus-checks">
              <div className="flex items-center space-x-2 text-xs font-semibold text-zinc-300">
                <Icon name="Sparkles" className="text-[#FF4D4D] h-4 w-4 shrink-0" />
                <span>Random Announcements</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-zinc-300">
                <Icon name="Sparkles" className="text-[#FF4D4D] h-4 w-4 shrink-0" />
                <span>Community Growth Triggers</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-zinc-300">
                <Icon name="Sparkles" className="text-[#FF4D4D] h-4 w-4 shrink-0" />
                <span>Instant Flash Grants</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium blockquote layout representational */}
          <div className="lg:col-span-6">
            <div className="bg-[#18181C] rounded-3xl p-8 md:p-10 shadow-md border-l-8 border-[#B00000] border-t border-r border-b border-white/5 relative">
              
              {/* Giant quote background symbol */}
              <span className="absolute right-8 top-4 text-9xl font-serif text-[#FF4D4D]/5 select-none pointer-events-none">
                “
              </span>

              <div className="space-y-4 relative z-10">
                
                {/* Header item */}
                <div className="flex items-center space-x-3 text-[#FF4D4D]">
                  <div className="h-8 w-8 rounded-lg bg-[#B00000]/15 flex items-center justify-center">
                    <Icon name="Trophy" className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">Example Launch Campaign</span>
                </div>

                {/* The core blockquote */}
                <blockquote className="text-lg md:text-xl font-display font-bold text-zinc-200 leading-snug">
                  "Day 1 Bonus: ₦5,000 for the participant with the highest steps by 11:59 PM, provided they invite at least one friend to join the challenge."
                </blockquote>

                {/* Divider */}
                <div className="h-px bg-zinc-800 my-4" />

                <div className="flex items-center space-x-2.5 text-xs text-zinc-400 font-medium">
                  <Icon name="Clock" className="h-4 w-4 text-[#FF4D4D]" />
                  <span>Announced live inside the Stride WhatsApp Group</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
