import Image from "next/image";

import brandsImage from "@/assets/images/sec-solid-brands.webp";
import phoneImage from "@/assets/images/sec-solid-phone.svg";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export default function SolidSection({ className }: Props) {
  return (
    <section
      className={cn(
        "bg-dark-blue relative mb-0 pt-25 pb-15 text-white lg:pt-16 lg:pb-11",
        className,
      )}
    >
      <div className="container">
        <div className="relative">
          <div className="bg-gradient-reverse bg-clip-text text-[30px] text-transparent [-webkit-text-fill-color:transparent] max-lg:px-5 max-lg:font-bold lg:absolute lg:top-0 lg:left-0 lg:text-[40px]">
            Verify once, onboard <br className="max-lg:hidden" />
            seamlessly to 100s of <br className="max-lg:hidden" />
            Web2 & Web3 apps.
          </div>
          <div className="relative inset-0 w-screen overflow-hidden max-lg:mt-10 max-lg:-ml-4 lg:mx-auto lg:w-full">
            <Image
              src={phoneImage}
              alt="Solid"
              className="mx-auto w-full max-lg:px-10 lg:w-[300px]"
            />
            <Image
              src={brandsImage}
              alt="Brands"
              className="absolute bottom-12 z-10 mx-auto h-[calc(0.5*calc(100vw-80px))] overflow-hidden object-cover lg:bottom-6 lg:h-[150px]"
            />
          </div>
          <div className="*:border-linear-gradient mt-14 space-y-5 text-base leading-[23px] font-bold *:h-[62px] *:place-content-center *:p-[8px_20px] *:text-center *:[--bg:#101E31] *:[--gradient:170deg,#00FFFF,#FFFFFF05,#0073FF] *:[--radius:999px] lg:*:absolute lg:*:min-w-[345px]">
            <div className="lg:top-[94px] lg:right-0">
              Get verified in less than 1-minute.
            </div>
            <div className="lg:top-[192px] lg:right-0">
              Get discounts & rewards to Partner <br />
              Platforms once you sign up.
            </div>
            <div className="lg:top-[282px] lg:left-0">
              Own the data on any chain. <br />
              Use anytime, forever.
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
