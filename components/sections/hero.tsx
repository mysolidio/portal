import DemoButton from "@/common/demoButton";

export default function HeroSection() {
  return (
    <section className="bg-black pt-14 pb-20 text-center text-white lg:pt-20">
      <div className="font-poppins bg-black bg-[linear-gradient(180deg,_#464646_-15.58%,_#FFF_-2.18%,_#FFF_55.92%,_#000_113.31%)] bg-clip-text text-[130px] leading-[200px] font-medium -tracking-[9.63px] [-webkit-text-fill-color:transparent] lg:text-[220px]">
        Solid
      </div>
      <div className="mt-8 text-[32px] font-light tracking-[0.3px] lg:text-6xl">
        Verify Once.
      </div>
      <div className="mt-2.5 text-base font-light lg:mt-4 lg:text-[23px]">
        A global standard for digital identity and data self sovereignty.
      </div>
      <DemoButton className="mt-16 h-16 px-11 text-lg font-bold lg:mt-20" />
    </section>
  );
}
