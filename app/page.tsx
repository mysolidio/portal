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
    <>
      <Header />
      <Hero />
      <Solution />
      <Partners />
      <Services />
      {/* Use cases */}
      <Questions />
      <Solarid />
      <Footer />
    </>
  );
}
