import DemoButton from "@/common/demoButton";
import SolidChrome from "@/common/solidChrome";

export default function HeroSection() {
  return (
    <section className="mt-20 bg-black pt-14 pb-20 text-center text-white lg:pt-20">
      <SolidChrome className="mx-auto h-[130px] lg:h-[200px]" />
      <div className="mt-8 text-[32px] font-light tracking-[0.3px] lg:text-6xl">
        Verify Once, Use Anywhere
      </div>
      <div className="mt-2.5 text-base font-light lg:mt-4 lg:text-[23px]">
        A global standard for digital identity and data self sovereignty.
      </div>
      <DemoButton className="mt-16 h-16 px-11 text-lg font-bold lg:mt-20" />
    </section>
  );
}
