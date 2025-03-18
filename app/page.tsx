import Header from "@/components/header";
import Hero from "@/components/hero";
import Partners from "@/components/sections/partners";
import Services from "@/components/sections/services";
import Solution from "@/components/sections/solution";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Solution />
      <Partners />
      <Services />
    </>
  );
}
