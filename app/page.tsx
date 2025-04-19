import Footer from "@/components/footer";
import Header from "@/components/header";
import GetStarted from "@/components/sections/getStarted";
import Hero from "@/components/sections/hero";
import Questions from "@/components/sections/questions";
import Services from "@/components/sections/services";
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
      <GetStarted />

      <section className="snap-start">
        <div className="relative">
          <Footer />
        </div>
      </section>
    </div>
  );
}
