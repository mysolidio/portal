import Image from "next/image";

import solutionImage from "@/public/sec-solution-2.png";

export default function SolutionSection() {
  return (
    <div className="bg-[#0F172A] pt-20 pb-5 lg:pt-30">
      <div className="container flex flex-col items-center justify-between gap-15 lg:flex-row lg:items-end">
        <div className="max-w-md text-white lg:max-w-[554px] [&>*]:text-center lg:[&>*]:text-left">
          <div className="text-[12px] leading-[1.3] font-bold tracking-[8px] uppercase lg:text-[18px]">
            Solution
          </div>
          <div className="mt-2 text-[32px] leading-[1.2] lg:mt-4 lg:text-[48px]">
            Universal, Interoperable Identity
          </div>
          <div className="mt-4 text-[14px] leading-[1.5] lg:mt-6">
            Solid uses secure zk-snark to validate arbitrary KYC data and
            utilize it in an encrypted form. Cryptography ensures the
            reliability of data and service providers.
          </div>
        </div>

        <div className="mt-10 flex items-end justify-center text-white lg:mt-0">
          <Image
            src={solutionImage}
            alt="Solution"
            className="w-full max-w-md lg:max-w-[551px]"
          />
        </div>
      </div>
    </div>
  );
}
