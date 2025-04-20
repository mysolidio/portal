import Footer from "@/components/footer";
import Header from "@/components/header";
import FAQs from "@/components/sections/faqs";
import GetStarted from "@/components/sections/getStarted";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Solution from "@/components/sections/solution";
import UseCases from "@/components/sections/useCases";

export default function Home() {
  return (
    <div className="h-screen w-full overflow-x-hidden scroll-smooth">
      <Header />

      <Hero />
      <Solution />
      <Services />
      <UseCases />
      <FAQs />
      <GetStarted />

      <Footer />
    </div>
  );
}
