import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default async function HeroSection() {
  return (
    <div className="relative grid h-screen w-full place-content-center overflow-hidden bg-[#001024]">
      <div className="morphing-gradient-1 absolute -top-4 -right-30 h-60 w-70 rotate-6 rounded-full bg-gradient-to-r from-indigo-800 via-purple-900 to-pink-700 opacity-50"></div>
      <div className="morphing-gradient-2 absolute -top-50 right-100 h-90 w-50 rotate-120 rounded-full bg-gradient-to-r from-indigo-800 via-purple-900 to-indigo-900 opacity-50"></div>
      <div className="absolute inset-0 grid place-content-center">
        <div className="sun-wrapper parent-sun">
          <div className="sun">
            <div className="rotate">
              {Array.from({ length: 10 }).map((_, idx) => (
                <span key={idx}></span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 backdrop-blur-lg" />
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center text-white">
        <div className="text-[2rem] leading-[1.2] lg:text-4xl">
          Compliance-first onchain KYC <br className="block md:hidden" />&
          Identity Platform
        </div>
        <div className="mt-4 text-[16px] leading-[1.3] lg:text-[20px]">
          Seamless onchain KYC with <br className="block md:hidden" />
          borderless digital identity solutions
        </div>
        <div className="mt-10 inline-flex w-[min(100%,279px)] flex-col items-center justify-center gap-2 md:w-full md:flex-row md:gap-4 [&_button]:w-full md:[&_button]:w-auto">
          <Button
            size="xl"
            variant="special"
            className="h-15 gap-2.5 rounded-full !px-8 uppercase transition-all duration-300 ease-in-out"
          >
            Start building
            <ArrowUpRight size={20} />
          </Button>
          <Button
            size="xl"
            variant="ghost"
            className="h-15 gap-2.5 rounded-full !px-8 uppercase transition-all duration-300 ease-in-out"
          >
            Request a demo
          </Button>
        </div>
      </div>
    </div>
  );
}
