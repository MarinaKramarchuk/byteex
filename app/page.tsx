
import About from "@/components/sections/About";
import Benefits from "@/components/sections/Benefits";
import Fans from "@/components/sections/Fans";
import FAQ from "@/components/sections/FAQ";
import FinalSection from "@/components/sections/FinalSection";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import InfoBanner from "@/components/sections/InfoBanner";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="w-full">
        <Hero />
        <Benefits />
        <About />
        <HowItWorks />
        <Fans />
        <FAQ />
        <InfoBanner />
        <FinalSection />
      </main>
    </div>
  );
}
