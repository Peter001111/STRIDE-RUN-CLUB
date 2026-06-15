import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyJoin from "./components/WhyJoin";
import Challenge from "./components/Challenge";
import Prizes from "./components/Prizes";
import HowToJoin from "./components/HowToJoin";
import BonusRewards from "./components/BonusRewards";
import Community from "./components/Community";
import Gallery from "./components/Gallery";
import Faq from "./components/Faq";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen font-sans selection:bg-[#B00000] selection:text-white" id="app-root-container">
      {/* Sticky navigation layout */}
      <Header />

      {/* Main Sections flow matching user guidelines */}
      <main id="main-content-flow">
        <Hero />
        <About />
        <WhyJoin />
        <Challenge />
        <Prizes />
        <HowToJoin />
        <BonusRewards />
        <Community />
        <Gallery />
        <Faq />
        <Contact />
      </main>
    </div>
  );
}

