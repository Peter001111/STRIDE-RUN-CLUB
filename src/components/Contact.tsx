import { OFFICIAL_LINKS } from "../data";
import { Icon } from "./Icons";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="bg-[#0A0A0A] text-white pt-24 pb-12 relative overflow-hidden"
    >
      {/* Decorative gradient accents */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#B00000]/5 rounded-br-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B00000]/10 rounded-tl-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch mb-16">
          
          {/* Column 1: Core club pitch and branding (5 spans) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <a href="#home" className="inline-flex items-center space-x-2.5">
                <div className="h-10 w-10 rounded-full bg-[#B00000] flex items-center justify-center">
                  <span className="text-white font-display font-extrabold text-lg">S</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-display font-bold text-lg tracking-wider leading-none">STRIDE</span>
                  <span className="text-[#FF4D4D] font-mono text-[10px] uppercase font-bold tracking-[0.2em] mt-0.5">Run Club</span>
                </div>
              </a>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal max-w-sm">
                A premium fitness and wellness community. Built around walks, continuous runs, structured campaigns, and daily accountability. Move together, grow stronger, and build lasting habits one step at a time.
              </p>
            </div>

            {/* Aesthetic highlight statement */}
            <div className="p-4 bg-white/5 border border-white/5 rounded-2xl max-w-sm">
              <p className="text-xs text-zinc-500 font-mono tracking-wide">
                🗣️ WhatsApp announcements represent our primary verified channel. Beware of unofficial copies.
              </p>
            </div>
          </div>

          {/* Column 2: Digital Contact Cards (7 spans) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <span className="text-[#FF4D4D] font-mono text-xs uppercase font-extrabold tracking-[0.25em] block">
              Direct Communication
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-none">
              Contact Stride Run Club
            </h2>

            {/* Social handles list cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4" id="contact-channels-grid">
              
              {/* WhatsApp direct */}
              <a
                href={OFFICIAL_LINKS.officialWhatsAppContact}
                target="_blank"
                rel="noreferrer"
                className="bg-[#131315] border border-white/5 p-5 rounded-2xl hover:bg-[#B00000]/15 hover:border-[#FF4D4D]/35 transition-all flex flex-col items-center sm:items-start text-center sm:text-left text-white group"
              >
                <div className="h-10 w-10 rounded-xl bg-white/5 text-[#FF4D4D] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon name="Phone" className="h-5 w-5" />
                </div>
                <span className="text-xs font-mono text-white/50 uppercase tracking-widest block font-semibold">WhatsApp</span>
                <span className="text-sm font-bold block mt-1 break-all select-all text-white">{OFFICIAL_LINKS.rawWhatsAppContact}</span>
              </a>

              {/* Instagram Handle */}
              <a
                href={OFFICIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="bg-[#131315] border border-white/5 p-5 rounded-2xl hover:bg-[#B00000]/15 hover:border-[#FF4D4D]/35 transition-all flex flex-col items-center sm:items-start text-center sm:text-left text-white group"
              >
                <div className="h-10 w-10 rounded-xl bg-white/5 text-[#FF4D4D] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon name="Instagram" className="h-5 w-5" />
                </div>
                <span className="text-xs font-mono text-white/50 uppercase tracking-widest block font-semibold">Instagram</span>
                <span className="text-sm font-bold block mt-1 text-white">@striderunclub.ng</span>
              </a>

              {/* TikTok direct */}
              <a
                href={OFFICIAL_LINKS.tiktok}
                target="_blank"
                rel="noreferrer"
                className="bg-[#131315] border border-white/5 p-5 rounded-2xl hover:bg-[#B00000]/15 hover:border-[#FF4D4D]/35 transition-all flex flex-col items-center sm:items-start text-center sm:text-left text-white group"
              >
                <div className="h-10 w-10 rounded-xl bg-white/5 text-[#FF4D4D] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon name="Smartphone" className="h-5 w-5" />
                </div>
                <span className="text-xs font-mono text-white/50 uppercase tracking-widest block font-semibold">TikTok</span>
                <span className="text-sm font-bold block mt-1 text-white">@striderunclub_</span>
              </a>

            </div>

            {/* "Chat on WhatsApp" Button */}
            <div className="pt-4 flex justify-center sm:justify-start">
              <a
                href={OFFICIAL_LINKS.officialWhatsAppContact}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 rounded-full bg-[#B00000] text-white hover:bg-[#D10000] font-bold tracking-wide transition-all shadow-md hover:-translate-y-0.5 inline-flex items-center justify-center"
                id="contact-whatsapp-chat-button"
              >
                <span>Chat on WhatsApp</span>
                <Icon name="MessageSquareText" className="ml-2 h-4.5 w-4.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Footer Area with legal disclosures */}
        <div className="pt-8 border-t border-white/10 text-center sm:flex sm:justify-between sm:text-left text-xs text-white/40 font-mono tracking-wider space-y-4 sm:space-y-0" id="site-footer-elements">
          <p>© {currentYear} Stride Run Club. All Rights Reserved. Stride Together. Stronger Every Day.</p>
          <div className="flex justify-center sm:justify-end space-x-4">
            <span className="text-white/30 border-r border-white/10 pr-4">Active Challenge Version 1.20</span>
            <span>Made with passion for consistency &amp; health.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
