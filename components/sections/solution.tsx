import Image from "next/image";

import solutionImage from "@/public/sec-solution.svg";

export default function SolutionSection() {
  return (
    <div className="bg-black py-2.5 text-white">
      <div className="container">
        <div className="flex items-center gap-10 max-lg:flex-col">
          <div className="relative w-full shrink-0 place-items-center lg:w-[360px] xl:w-[480px]">
            <Image
              src={solutionImage}
              alt="Solution"
              className="object-contain"
            />
          </div>
          <div className="grow text-white max-lg:text-center">
            <div className="text-xs font-bold tracking-[18px] uppercase lg:text-[20px] lg:font-thin">
              Solution
            </div>
            <div className="mt-8 text-[32px] tracking-[0.133px] text-white max-lg:leading-[1.2] lg:mt-4 lg:-space-y-6 lg:text-[80px] lg:font-thin lg:*:bg-linear-[180deg,#FFF_60.33%,#000_91.95%] lg:*:bg-clip-text lg:*:[-webkit-text-fill-color:transparent]">
              <div>Universal</div>
              <div>Interoperable</div>
              <div>Identity</div>
            </div>
            <div className="mt-6 text-[17px] text-[#F4F3FF] max-lg:leading-[1.5] max-lg:opacity-80 lg:mt-12 lg:text-[23px] lg:font-thin">
              Solid uses secure zk-snarks to validate arbitrary KYC data and
              utilizes it in an encrypted form. Cryptography ensures the
              reliability of data and service providers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
