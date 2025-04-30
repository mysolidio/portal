import Footer from "@/components/footer";
import Header from "@/components/header";
import FAQs from "@/components/sections/faqs";
import Hero from "@/components/sections/hero";
import Partners from "@/components/sections/partners";
import Services from "@/components/sections/services";
import Solid from "@/components/sections/solid";
import Solution from "@/components/sections/solution";
import UseCases from "@/components/sections/useCases";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Hero className="mt-4 lg:mt-12" />
      <Solution className="mt-2.5 lg:mt-25" />
      <Partners className="mt-16 lg:mt-32" />
      <Services className="mt-16 lg:mt-30" />
      <Solid className="mt-24 lg:mt-25" />
      <UseCases className="mt-20 lg:mt-25" />
      <FAQs className="mt-18 lg:mt-30" />
      <Footer className="mt-20 lg:mt-33" />
    </div>
  );
}
