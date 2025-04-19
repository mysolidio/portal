import DemoButton from "@/common/demoButton";

export default function HeroSection() {
  return (
    <section className="bg-black py-36 text-center text-white">
      <div className="font-poppins inline-block bg-black bg-[linear-gradient(180deg,_#464646_-15.58%,_#FFF_-2.18%,_#FFF_55.92%,_#000_113.31%)] bg-clip-text align-middle text-[220px] leading-[200px] font-medium -tracking-[9.63px] [-webkit-text-fill-color:transparent]">
        Solid
      </div>
      <div className="mt-8 text-6xl font-light tracking-[0.371px]">
        Verify Once.
      </div>
      <div className="mt-4 text-[23px] font-light">
        A global standard for digital identity and data self sovereignty.
      </div>
      <DemoButton className="mt-12 h-16 px-11 text-lg font-bold" />
    </section>
  );
}
