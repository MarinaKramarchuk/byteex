import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="w-full">
        <Hero />
        <Benefits />
        <About />
      </main>
    </div>
  );
}
