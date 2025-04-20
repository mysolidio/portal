import DemoButton from "@/common/demoButton";

export default function HeroSection() {
  return (
    <section className="mt-20 bg-white pt-14 pb-5 text-center text-black lg:pt-10">
      <div className="align-middle text-[90px] leading-[136px] font-medium -tracking-[5.63px] text-[#373737] lg:text-[150px] lg:-tracking-[9.63px]">
        Solid
      </div>
      <div className="mt-8 align-middle text-[32px] leading-[30px] font-light tracking-[0.3px] md:mt-14 md:text-[40px]">
        Verify Once. <br className="md:hidden" />
        Use Anywhere.
      </div>
      <div className="mt-6 text-base font-light lg:mt-7 lg:text-[20px]">
        A global standard for digital identity <br className="md:hidden" /> and
        data self sovereignty.
      </div>
      <DemoButton className="mt-16 h-16 px-11 text-lg font-bold lg:mt-20" />
    </section>
  );
}
