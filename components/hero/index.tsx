import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default async function HeroSection() {
  return (
    <div className="grid h-screen w-screen place-content-center bg-[#001024]">
      {/* Video background */}
      <div className="size-[min(90vw,620px)] rounded-full bg-linear-[90deg,#731EC8_0%,#2D84BB_100%] backdrop-blur-[80px]" />
      <div className="absolute inset-auto size-full place-content-center space-y-6 text-center text-white backdrop-blur-lg">
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
