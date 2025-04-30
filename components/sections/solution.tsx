import Image from "next/image";

import { cn } from "@/lib/utils";
import solutionImage0 from "@/public/sec-solution-0.svg";
import solutionImage1 from "@/public/sec-solution-1.webp";

type Props = {
  className?: string;
};

export default function SolutionSection({ className }: Props) {
  return (
    <section className={cn("relative text-black", className)}>
      <div className="container">
        <div className="flex items-center max-md:flex-col md:gap-10 lg:gap-16 xl:gap-24">
          <div className="relative w-full shrink-0 place-items-center gap-5 max-md:p-[16px_24px] md:w-[240px] lg:grid lg:w-[480px] lg:grid-cols-2">
            <Image
              src={solutionImage0}
              alt="Solution 1"
              className="object-contain max-md:w-full"
            />
            <Image
              src={solutionImage1}
              alt="Solution 2"
              className="object-contain max-lg:hidden"
            />
          </div>
          <div className="relative z-1 grow bg-[#F3F5F7] max-md:-mt-[0.34*calc(100vw-80px)] max-md:pt-10 max-md:text-center max-md:before:absolute max-md:before:-top-20 max-md:before:left-0 max-md:before:h-20 max-md:before:w-full max-md:before:bg-linear-to-b max-md:before:from-white/0 max-md:before:to-[#F3F5F7] max-md:before:content-['']">
            <div className="text-sub-heading">Solution</div>
            <div className="mt-8 text-[32px] leading-[1.2] lg:mt-4 lg:text-[64px] lg:leading-[70px] lg:font-light xl:text-[70px] xl:leading-[80px]">
              Universal
              <br />
              Interoperable
              <br />
              Identity
            </div>
            <div className="mt-9 align-middle text-[17px] opacity-80 max-lg:leading-[1.5] lg:mt-4 lg:py-4 lg:text-[20px] lg:font-light">
              Our platform provides infrastructure and SDKs for applications
              that implement privacy-preserving digital identity, empowering
              users to own their KYC data and share it only with their consent.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
