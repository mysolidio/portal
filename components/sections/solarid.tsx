import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default async function SolaridSection() {
  return (
    <div className="relative overflow-hidden bg-[#001024] py-24 lg:py-28">
      <div className="absolute inset-0 grid place-content-center">
        <div className="size-[400px] rounded-full bg-linear-[90deg,#FF9500_0%,#FF0088_100%] opacity-20 blur-sm lg:translate-x-[clamp(0px,calc((50vw-50%)*2/3),100%)]" />
      </div>
      <div className="absolute inset-0 bg-[url('/sec-solarid-bg.png')] bg-contain bg-center bg-repeat mix-blend-screen backdrop-blur-lg" />

      <div className="relative z-10 container mx-auto max-w-3xl text-center text-white">
        <div className="inline-flex items-center justify-center">
          <div className="rounded-full border border-[#21FBFF]/20 bg-[#00256c]/30 px-3 py-1 text-[12px] font-medium tracking-[6px] uppercase lg:text-[14px]">
            Solid
          </div>
        </div>

        <h2 className="mx-auto mt-5 max-w-2xl text-[32px] leading-[1.2] font-semibold lg:mt-6 lg:text-[40px]">
          Ready to Get Started with us?
        </h2>

        <div className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.6] text-white opacity-90">
          Implement our secure, compliant identity verification solution with
          comprehensive support from our expert team.
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 md:flex-row md:gap-4 lg:mt-10">
          <Button
            size="lg"
            variant="special"
            className="w-full max-w-[200px] rounded-full bg-white px-5 py-2.5 text-[14px] font-medium text-[#001024] transition-all duration-300 hover:bg-[#e6f2ff] hover:text-[#001a3d]"
          >
            Launch App
            <ArrowUpRight size={16} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full max-w-[200px] rounded-full border border-white px-5 py-2.5 text-[14px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#001024]"
          >
            View Documentation
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full max-w-[200px] rounded-full border border-white px-5 py-2.5 text-[14px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#001024]"
          >
            Contact Our Team
          </Button>
        </div>
      </div>
    </div>
  );
}
