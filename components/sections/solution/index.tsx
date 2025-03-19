import Image from "next/image";

import solutionImage from "./solution.webp";

export default function SolutionSection() {
  return (
    <div className="bg-[#001024] pt-20 lg:pt-30">
      <div className="container flex flex-col items-center justify-between gap-15 lg:flex-row">
        <div className="max-w-md text-white lg:max-w-[554px] [&>*]:text-center lg:[&>*]:text-left">
          <div className="text-[12px] leading-[1.3] font-bold tracking-[8px] text-[#21FBFF] uppercase lg:text-[18px]">
            Solution
          </div>
          <div className="mt-2 text-[32px] leading-[1.2] lg:mt-4 lg:text-[48px]">
            Unleash the potential
          </div>
          <div className="mt-4 text-[14px] leading-[1.5] lg:mt-6">
            Primus uses secure zkTLS (zero-knowledge transport layer security)
            and zkFHE (zero-knowledge fully homomorphic encryption) to validate
            arbitrary web data and utilize it in an encrypted form. Cryptography
            ensures the reliability of data and service providers.
          </div>
        </div>

        <div className="text-white">
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
