import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ_ITEMS } from "../data";
import { Icon } from "./Icons";

type FaqCategory = "all" | "joining" | "challenge" | "pacer" | "community";

const CATEGORIES: { value: FaqCategory; label: string; icon: string }[] = [
  { value: "all", label: "All Questions", icon: "HelpCircle" },
  { value: "joining", label: "Joining the Club", icon: "Users2" },
  { value: "challenge", label: "Walk Challenges", icon: "Trophy" },
  { value: "pacer", label: "Pacer Tracking", icon: "Smartphone" },
  { value: "community", label: "Our Community", icon: "MessageSquareText" },
];

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFaqs = activeCategory === "all"
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-[#0A0A0A] relative overflow-hidden text-zinc-300"
    >
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-[#B00000]/5 to-transparent rounded-br-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B00000]/5 rounded-tl-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#FF4D4D] font-mono text-xs uppercase font-extrabold tracking-[0.25em] block">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about joining Stride Run Club, link synchronizations, daily step counting, and active challenge campaigns.
          </p>
        </div>

        {/* Categories Pills Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="faq-categories-list">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => {
                  setActiveCategory(cat.value);
                  setExpandedId(null); // Collapse when switching categories config
                }}
                className={`flex items-center space-x-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 transform focus:outline-none ${
                  isActive
                    ? "bg-[#B00000] text-white shadow-md scale-102"
                    : "bg-[#18181C] text-zinc-400 hover:bg-zinc-800 border border-white/5"
                }`}
                id={`faq-filter-btn-${cat.value}`}
              >
                <Icon name={cat.icon} className="h-4 w-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Collapsible Accordion Stream */}
        <div className="space-y-4" id="faq-accordion-stream">
          <AnimatePresence initial={false}>
            {filteredFaqs.map((faq) => {
              const isOpen = expandedId === faq.id;
              
              return (
                <div
                  key={faq.id}
                  className={`bg-[#131115] rounded-2xl border transition-colors duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#FF4D4D]/30 bg-[#18181C] shadow-lg"
                      : "border-white/5 hover:border-[#FF4D4D]/20"
                  }`}
                  id={faq.id}
                >
                  
                  {/* Accordion Toggle Header */}
                  <button
                    onClick={() => toggleExpand(faq.id)}
                    className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D4D]/50"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${faq.id}`}
                  >
                    <span className="text-sm md:text-base font-display font-bold text-white pr-4">
                      {faq.question}
                    </span>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-[#B00000] text-white rotate-180" : "bg-[#18181C] border border-white/5 text-zinc-400"
                    }`}>
                      <Icon name="ChevronDown" className="h-4 w-4" />
                    </div>
                  </button>

                  {/* Accordion Body wrapper */}
                  <div
                    id={`faq-panel-${faq.id}`}
                    role="region"
                    aria-labelledby={faq.id}
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[500px] border-t border-zinc-800" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 py-5 md:px-8 md:py-6 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                      {faq.answer}
                    </div>
                  </div>

                </div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Still Have Questions segment */}
        <div className="mt-16 text-center bg-[#131115] rounded-3xl p-8 border border-white/5 shadow-md" id="faq-support-panel">
          <div className="flex items-center justify-center space-x-2 text-white mb-3">
            <Icon name="MessageSquareText" className="text-[#FF4D4D] h-5 w-5" />
            <h3 className="font-display font-bold text-base sm:text-lg">Still have more specific questions?</h3>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto mb-6">
            We are here to help guide you directly into the Pacer app or solve any verification issues. Click below to start a live query with the Stride Run Club administrators.
          </p>
          <a
            href="https://wa.me/2349028091233"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#B00000] text-white hover:bg-[#D10000] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            id="faq-chat-admin-btn"
          >
            <span>Ask Stride Admin on WhatsApp</span>
            <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
