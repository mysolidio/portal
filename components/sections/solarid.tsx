import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default async function SolaridSection() {
  return (
    <div className="relative overflow-hidden bg-[#001024] py-40">
      <div className="absolute inset-0 grid place-content-center">
        <div className="size-[400px] rounded-full bg-linear-[90deg,#FF9500_0%,#FF0088_100%] opacity-40 lg:translate-x-[clamp(0px,calc((50vw-50%)*2/3),100%)]" />
      </div>
      <div className="absolute inset-0 bg-[url('/sec-solarid-bg.png')] bg-contain bg-center bg-repeat mix-blend-screen backdrop-blur-lg" />
      <div className="relative z-10 container text-center text-white">
        <div className="text-[12px] leading-[1.3] font-bold tracking-[8px] text-[#21FBFF] uppercase lg:text-[18px]">
          Solarid
        </div>
        <div className="mt-2 text-[32px] leading-[1.2] lg:mt-4 lg:text-[48px]">
          Ready to get Started?
        </div>
        <div className="mt-15 flex flex-col justify-center gap-4 px-8 md:flex-row lg:mt-10 [&_button]:h-17 [&_button]:w-full [&_button]:rounded-full [&_button]:px-10 [&_button]:py-6 [&_button]:uppercase lg:[&_button]:w-auto">
          <Button
            size="xl"
            variant="special"
            className="bg-white bg-linear-0 text-black hover:text-white"
          >
            Launch App
            <ArrowUpRight size={20} />
          </Button>
          <Button size="xl" variant="outline" className="!border-white">
            Read the docs
          </Button>
          <Button size="xl" variant="outline" className="!border-white">
            Contact us
          </Button>
        </div>
      </div>
    </div>
  );
}
