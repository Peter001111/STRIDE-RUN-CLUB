import { OFFICIAL_LINKS } from "../data";
import { Icon } from "./Icons";

export default function Community() {
  return (
    <section
      id="community"
      className="py-24 bg-[#0A0A0A] relative overflow-hidden text-zinc-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full font-sans">
        
        {/* Curved geometric decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#B00000]/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Decorative tag */}
          <span className="text-[#FF4D4D] font-mono text-xs uppercase font-extrabold tracking-[0.25em] block">
            More Than Just Steps
          </span>
          
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Join the Stride Community
          </h2>

          {/* Sizable narrative Copy */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-3xl mx-auto">
            Stride Run Club is more than a challenge. It is a growing community of people who want to stay active, encourage one another, and become better one step at a time. Join our official WhatsApp group to receive instant challenge updates, daily fitness motivation, community announcements, and continuous wellness support.
          </p>

          {/* Highlight badges grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-4" id="community-perks">
            <div className="bg-[#131315] border border-white/5 rounded-2xl p-4 flex items-center space-x-3 text-left">
              <div className="h-9 w-9 rounded-xl bg-[#B00000]/15 flex items-center justify-center text-[#FF4D4D]">
                <Icon name="MessageSquareText" className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Instant Updates</span>
                <span className="text-[10px] text-zinc-500">WhatsApp alerts &amp; guidelines</span>
              </div>
            </div>

            <div className="bg-[#131315] border border-white/5 rounded-2xl p-4 flex items-center space-x-3 text-left">
              <div className="h-9 w-9 rounded-xl bg-[#B00000]/15 flex items-center justify-center text-[#FF4D4D]">
                <Icon name="Flame" className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Fitness Motivation</span>
                <span className="text-[10px] text-zinc-500">Peer accountability daily</span>
              </div>
            </div>

            <div className="bg-[#131315] border border-white/5 rounded-2xl p-4 flex items-center space-x-3 text-left">
              <div className="h-9 w-9 rounded-xl bg-[#B00000]/15 flex items-center justify-center text-[#FF4D4D]">
                <Icon name="Users2" className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Wellness Support</span>
                <span className="text-[10px] text-zinc-500">Community walk meets</span>
              </div>
            </div>
          </div>

          {/* Primary CTA button */}
          <div className="pt-6">
            <a
              href={OFFICIAL_LINKS.whatsappGroup}
              target="_blank"
              rel="noreferrer"
              className="px-10 py-5 rounded-full bg-[#B00000] text-white hover:bg-[#D10000] font-extrabold tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center min-w-[265px]"
              id="community-primary-whatsapp-btn"
            >
              Join Stride Run Club
              <Icon name="ArrowRight" className="ml-3 h-5.5 w-5.5" />
            </a>
          </div>

          {/* Tiny metrics display underneath */}
          <p className="text-[11px] text-zinc-650 font-mono tracking-widest uppercase">
            ⚡ 100% Free Invitation • No Subscription • All fitness levels welcome
          </p>

        </div>

      </div>
    </section>
  );
}
