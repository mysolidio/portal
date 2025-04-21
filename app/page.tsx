import Footer from "@/components/footer";
import Header from "@/components/header";
import FAQs from "@/components/sections/faqs";
import Hero from "@/components/sections/hero";
import Partners from "@/components/sections/partners";
import Services from "@/components/sections/services";
import Solution from "@/components/sections/solution";
import UseCases from "@/components/sections/useCases";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 size-full bg-[url('/bg-dots.webp'),_url('/bg-center_top.webp')] bg-[size:auto_789px,_100%_auto] bg-[position:center_1510px,_center_1400px] bg-no-repeat lg:bg-[position:center_920px,_center_top]" />
      {/* <div className="absolute inset-0 size-full bg-[url('/bg-top_right.webp'),_url('/bg-middle_left.webp')] bg-[size:auto_auto,_auto_auto] bg-[position:top_right,_left_1780px] bg-no-repeat max-lg:hidden" /> */}

      <Header />
      <Hero />
      <Solution />
      <Partners />
      <Services />
      <UseCases />
      <FAQs />
      <Footer />
    </div>
  );
}
