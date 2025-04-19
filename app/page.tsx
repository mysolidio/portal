import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import Questions from "@/components/sections/questions";
import Services from "@/components/sections/services";
import Solarid from "@/components/sections/solarid";
import Solution from "@/components/sections/solution";
import UseCases from "@/components/sections/useCases";

export default function Home() {
  return (
    <div className="h-screen w-full overflow-x-hidden scroll-smooth">
      <Header />
      <Hero />
      <section className="snap-start">
        <div className="relative">
          <Solution />
        </div>
      </section>
      <Services />
      <UseCases />
      <Questions />

      <section className="snap-start">
        <div className="relative">
          <Solarid />
          <Footer />
        </div>
      </section>
    </div>
  );
}
