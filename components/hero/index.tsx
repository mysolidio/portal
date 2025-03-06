import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default async function HeroSection() {
  return (
    <div className="relative grid h-screen w-screen place-content-center overflow-hidden bg-[#001024]">
      {/* Video background */}
      <div className="absolute inset-0 grid place-content-center">
        <div className="size-[min(90vw,620px)] rounded-full bg-linear-[90deg,#FF9500_0%,#FF0088_100%] opacity-50" />
      </div>
      <div className="absolute inset-0 backdrop-blur-lg" />
      <div className="relative z-10 flex flex-col items-center justify-center space-y-6 text-center text-white">
        <div className="text-[60px] leading-[72px]">
          Digital Identity & Data Sovereignty
        </div>
        <div className="text-[20px] leading-[26px] font-medium">
          We&#39;re Global Standard for Digital Identity and Data
          Self-Sovereignty in Web3
        </div>
        <div className="inline-flex items-center gap-2">
          <Button className="h-15 gap-2.5 rounded-full bg-white !px-8 py-5 text-base leading-5 font-medium text-black uppercase hover:bg-white">
            Start building
            <ArrowUpRight size={20} />
          </Button>
          <Button
            variant="outline"
            className="h-15 gap-2.5 rounded-full bg-white/10 !px-8 py-5 text-base leading-5 font-medium text-white uppercase hover:bg-white/10 hover:text-white"
          >
            Request a demo
          </Button>
        </div>
      </div>
    </div>
  );
}
