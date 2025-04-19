import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import Questions from "@/components/sections/questions";
import Services from "@/components/sections/services";
import Solarid from "@/components/sections/solarid";
import Solution from "@/components/sections/solution";
import UseCasesSection from "@/components/sections/usecases";

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
      <section className="snap-start">
        <Services />
      </section>
      <section className="snap-start">
        <UseCasesSection />
      </section>
      <section className="snap-start">
        <Questions />
      </section>

      <section className="snap-start">
        <div className="relative">
          <Solarid />
          <Footer />
        </div>
      </section>
    </div>
  );
}
