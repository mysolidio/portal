import Image from "next/image";

import phoneImage from "@/assets/images/sec-solid-phone.svg";
import { cn } from "@/lib/utils";

import Brands from "./solid/brands";

type Props = {
  className?: string;
};

export default function SolidSection({ className }: Props) {
  return (
    <section
      className={cn(
        "bg-dark-blue relative mb-0 bg-contain bg-center bg-no-repeat pt-25 pb-15 text-white lg:bg-[url('/sec-solid-bg.svg')] lg:pt-16 lg:pb-11",
        className,
      )}
    >
      <div className="container">
        <div className="relative">
          <div className="text-gradient-reverse text-[clamp(30px,4vw,40px)] max-lg:px-5 max-lg:font-bold lg:absolute lg:top-0 lg:left-0 lg:text-[clamp(30px,2.3vw,40px)]">
            Verify once, onboard <br className="max-lg:hidden" />
            seamlessly <br className="lg:hidden" /> to 100s of{" "}
            <br className="max-lg:hidden" />
            Web2 & Web3 apps.
          </div>
          <div className="relative z-10 mx-auto w-screen max-2xl:inset-x-[calc(50%-50vw)] max-lg:mt-10 lg:mx-auto 2xl:max-w-full">
            <Image
              src={phoneImage}
              alt="Solid"
              className="mx-auto w-full max-lg:max-w-[clamp(340px,55vw,400px)] max-lg:px-5 lg:w-[23%]"
            />
            <div className="absolute bottom-[clamp(24px,6.5%,48px)] z-10 space-y-4 overflow-hidden lg:bottom-[5%] lg:*:*:size-[clamp(48px,4.3vw,64px)] 2xl:max-w-full">
              <Brands brand="top" count={21} className="" />
              <Brands brand="bottom" count={17} reverse />
            </div>
          </div>
          <div className="*:border-linear-gradient mt-14 space-y-5 text-base leading-[23px] font-bold *:h-[62px] *:place-content-center *:p-[8px_16px] *:text-center *:[--bg:#101E31] *:[--gradient:170deg,#00FFFF,#FFFFFF05,#0073FF] *:[--radius:999px] lg:*:absolute lg:*:min-w-[clamp(304px,30%,360px)]">
            <div className="lg:top-[clamp(60px,10%,94px)] lg:right-0">
              Get verified in less than 1-minute.
              <div className="absolute top-[calc(50%-1px)] -left-px h-0.5 w-2/3 -translate-x-full bg-white max-lg:hidden" />
            </div>
            <div className="lg:top-[clamp(160px,25%,192px)] lg:right-0">
              Get discounts & rewards to Partner <br />
              Platforms once you sign up.
              <div className="absolute top-[calc(50%-1px)] -left-px h-0.5 w-2/3 -translate-x-full bg-white max-lg:hidden" />
            </div>
            <div className="lg:top-[clamp(200px,40%,282px)] lg:left-0">
              Own the data on any chain. <br />
              Use anytime, forever.
              <div className="absolute top-[calc(50%-1px)] -right-px h-0.5 w-2/3 translate-x-full bg-white max-lg:hidden" />
            </div>
          </div>
          <div className="mt-10 text-xs text-[#315380] max-lg:hidden">
            * Integrations above are illustrative only. Certain partnerships
            have been secured, with many others well underway.
          </div>
        </div>
      </div>
    </section>
  );
}
