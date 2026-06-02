import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Fans from "@/components/Fans";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";

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
      </main>
    </div>
  );
}
