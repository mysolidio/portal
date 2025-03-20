import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import Partners from "@/components/sections/partners";
import Questions from "@/components/sections/questions";
import Services from "@/components/sections/services";
import Solarid from "@/components/sections/solarid";
import Solution from "@/components/sections/solution";

export default function Home() {
  return (
    <div className="h-screen w-full snap-y snap-mandatory overflow-x-hidden scroll-smooth">
      <Header />

      {/* Hero Section - Full screen snap */}
      <section className="min-h-screen snap-start">
        <Hero />
      </section>

      {/* Solution + Partners - Combined snap section */}
      <section className="snap-start">
        <div className="relative">
          <Solution />
          <Partners />
        </div>
      </section>

      {/* Services Section - Separate snap */}
      <section className="snap-start">
        <Services />
      </section>

      {/* FAQ Section - Separate snap */}
      <section className="snap-start">
        <Questions />
      </section>

      {/* CTA + Footer - Combined snap section */}
      <section className="snap-start">
        <div className="relative">
          <Solarid />
          <Footer />
        </div>
      </section>
    </div>
  );
}
