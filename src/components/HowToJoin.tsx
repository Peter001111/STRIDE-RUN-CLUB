import { useState } from "react";
import { STEP_ITEMS, OFFICIAL_LINKS } from "../data";
import { Icon } from "./Icons";

export default function HowToJoin() {
  const [copied, setCopied] = useState(false);
  const challengeCode = "BBO8QZ35";

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(challengeCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy text", err);
    }
  };

  return (
    <section
      id="how-to-join"
      className="py-24 bg-[#0A0A0A] relative overflow-hidden text-zinc-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-[#FF4D4D] font-mono text-xs uppercase font-extrabold tracking-[0.25em] block">
            Participation Pathway
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            How to Join the Walk Challenge
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Ready to count your steps? Follow our straightforward 6-step setup process to integrate your metrics and join the active leaderboard.
          </p>
        </div>

        {/* Core Steps Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Timeline Visual Cards (Left / Column of 8 spans) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="relative border-l-2 border-zinc-805 ml-4 md:ml-6 pl-6 md:pl-10 space-y-10 py-2">
              {STEP_ITEMS.map((item) => (
                <div key={item.number} className="relative group">
                  
                  {/* Step bubble marker */}
                  <span className="absolute -left-[39px] md:-left-[55px] h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-zinc-700 bg-zinc-900 text-white font-display font-bold text-sm md:text-base flex items-center justify-center transition-all group-hover:bg-[#B00000] group-hover:border-[#B00000] group-hover:text-white shadow-sm">
                    {item.number}
                  </span>

                  {/* Step details card */}
                  <div className={`p-5 md:p-6 rounded-2xl border transition-all duration-300 ${
                    item.highlight 
                      ? "bg-[#B00000]/10 border-[#B00000]/30 shadow-sm"
                      : "bg-[#131315] border-white/5 hover:border-[#FF4D4D]/25"
                  }`}>
                    <h3 className="text-base md:text-lg font-display font-bold text-white">
                      {item.text}
                    </h3>
                    {item.subText && (
                      <p className="text-xs md:text-sm text-zinc-400 mt-2 font-normal leading-relaxed">
                        {item.subText}
                      </p>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Action sidebar: App Stores and Challenge Code Widget (Right / Column of 4 spans) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* Challenge Code Widget */}
            <div className="bg-[#131115] text-white rounded-3xl p-6 md:p-8 shadow-md border border-white/5 relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B00000]/10 rounded-full blur-2xl" />
              
              <span className="text-[10px] font-mono uppercase text-[#FF4D4D] font-bold tracking-widest block mb-1">
                Active Code
              </span>
              <h4 className="text-sm font-display font-bold text-zinc-300">
                Stride Challenge Code
              </h4>

              {/* Core Code block with Copy button */}
              <div className="my-6 bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center">
                <span className="text-3xl md:text-4xl font-mono uppercase font-black text-[#FF4D4D] tracking-wider mb-2">
                  {challengeCode}
                </span>
                <button
                  onClick={handleCopyCode}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all uppercase flex items-center justify-center space-x-2 ${
                    copied 
                      ? "bg-emerald-600 text-white" 
                      : "bg-white text-[#1a1a1a] hover:bg-neutral-200"
                  }`}
                  id="copy-challenge-code-btn"
                >
                  <Icon name={copied ? "Check" : "Copy"} className="h-4 w-4" />
                  <span>{copied ? "Copied Successfully!" : "Copy Code"}</span>
                </button>
              </div>

              <p className="text-[11px] text-white/50 leading-relaxed font-normal">
                Input this combination directly inside the Pacer App to automatically join the Stride active leaderboard dashboard.
              </p>
            </div>

            {/* Direct App Downloads Box */}
            <div className="bg-[#18181C] rounded-3xl p-6 md:p-8 border border-white/5 text-center space-y-5">
              <h4 className="text-base font-display font-bold text-white">
                Download Pacer App
              </h4>
              
              <div className="flex flex-col gap-3">
                <a
                  href={OFFICIAL_LINKS.appleStore}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-zinc-900 text-white border border-zinc-850 hover:border-[#FF4D4D] transition-colors shadow-sm text-sm font-bold"
                  id="apple-store-download"
                >
                  <Icon name="Smartphone" className="h-4.5 w-4.5 mr-2 text-[#FF4D4D]" />
                  Download on iPhone
                </a>
                <a
                  href={OFFICIAL_LINKS.googlePlay}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-zinc-900 text-white border border-zinc-850 hover:border-[#FF4D4D] transition-colors shadow-sm text-sm font-bold"
                  id="android-store-download"
                >
                  <Icon name="Smartphone" className="h-4.5 w-4.5 mr-2 text-[#FF4D4D]" />
                  Download on Android
                </a>
              </div>

              <p className="text-[10px] text-zinc-500 font-mono tracking-wider">
                Compatible with Apple Health &amp; Google Fit
              </p>
            </div>

          </div>

        </div>

        {/* Core Join Button row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-zinc-800 pt-12">
          <a
            href={OFFICIAL_LINKS.whatsappGroup}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#B00000] text-white hover:bg-[#D10000] font-bold tracking-wider transition-colors inline-flex items-center justify-center min-w-[240px]"
            id="how-join-whatsapp-cta"
          >
            Join WhatsApp Group
            <Icon name="MessageSquareText" className="ml-2 h-5 w-5" />
          </a>
          <a
            href={OFFICIAL_LINKS.pacerChallenge}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#18181C] text-white border-2 border-zinc-800 hover:border-[#FF4D4D] font-bold tracking-wider transition-colors inline-flex items-center justify-center min-w-[240px]"
            id="how-join-pacer-cta"
          >
            Join Pacer Challenge
            <Icon name="ExternalLink" className="ml-2 h-5 w-5 text-[#FF4D4D]" />
          </a>
        </div>

      </div>
    </section>
  );
}
