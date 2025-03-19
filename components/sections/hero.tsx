import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default async function HeroSection() {
  return (
    <div className="relative grid h-screen w-full place-content-center overflow-hidden bg-[#001024]">
      {/* Video background */}
      <div className="absolute inset-0 grid place-content-center">
        <div className="size-[400px] rounded-full bg-linear-[90deg,#FF9500_0%,#FF0088_100%] opacity-50" />
      </div>
      <div className="absolute inset-0 backdrop-blur-lg" />
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center text-white">
        <div className="text-[32px] leading-[1.2] lg:text-[60px]">
          Digital Identity <br className="block md:hidden" />& Data Sovereignty
        </div>
        <div className="mt-4 text-[16px] leading-[1.3] lg:text-[20px]">
          We&apos;re Global Standard for Digital Identity{" "}
          <br className="block md:hidden" />
          and Data Self-Sovereignty in Web3
        </div>
        <div className="mt-10 inline-flex w-[min(100%,279px)] flex-col items-center justify-center gap-2 md:w-full md:flex-row md:gap-4 [&_button]:w-full md:[&_button]:w-auto">
          <Button
            size="xl"
            variant="special"
            className="h-15 gap-2.5 rounded-full bg-white bg-linear-0 !px-8 text-black uppercase hover:text-white"
          >
            Start building
            <ArrowUpRight size={20} />
          </Button>
          <Button
            size="xl"
            variant="outline"
            className="h-15 gap-2.5 rounded-full !border-white bg-white/10 !px-8 uppercase"
          >
            Request a demo
          </Button>
        </div>
      </div>
    </div>
  );
}
