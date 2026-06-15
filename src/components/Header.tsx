import { useState, useEffect } from "react";
import { NAVIGATION_ITEMS, OFFICIAL_LINKS } from "../data";
import { Icon } from "./Icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("#home");

  // Track scroll state for glassmorphism background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Basic spy scroll to highlight active menu item
      const sections = NAVIGATION_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveTab(href);
    setIsOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md shadow-lg border-b border-white/5 py-3"
          : "bg-[#0A0A0A]/40 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo representation */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center space-x-2 group focus:outline-none"
            id="header-logo-container"
          >
            <div className="h-10 w-10 rounded-full bg-[#B00000] flex items-center justify-center shadow-md transition-transform group-hover:scale-105" id="logo-badge">
              <span className="text-white font-display font-extrabold text-lg tracking-widest pl-0.5">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-display font-bold text-lg tracking-wider leading-none">STRIDE</span>
              <span className="text-[#FF3E3E] font-mono text-[10px] uppercase font-bold tracking-[0.2em] mt-0.5">Run Club</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`text-sm font-medium tracking-wide transition-colors relative py-1 px-2 ${
                  activeTab === item.href
                    ? "text-[#FF3E3E]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
                {activeTab === item.href && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#B00000] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden lg:block">
            <a
              href={OFFICIAL_LINKS.whatsappGroup}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#B00000] text-white hover:bg-[#D10000] font-medium text-sm tracking-wide transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              id="header-cta"
            >
              Join Stride Club
              <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button toggler */}
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <Icon name={isOpen ? "X" : "Menu"} className="h-6 w-6" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`lg:hidden fixed top-[64px] left-0 w-full bg-[#111111] border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "opacity-100 scale-y-100 visible h-auto" : "opacity-0 scale-y-95 invisible h-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`block px-4 py-3 rounded-xl text-base font-semibold tracking-wide transition-colors ${
                activeTab === item.href
                  ? "bg-[#B00000]/20 text-[#FF4D4D]"
                  : "text-white/80 hover:bg-white/5"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 px-4">
            <a
              href={OFFICIAL_LINKS.whatsappGroup}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#B00000] text-white hover:bg-[#D10000] font-semibold text-center tracking-wide transition-colors"
              id="mobile-header-cta"
            >
              Join Stride Run Club
              <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
