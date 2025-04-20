import Image from "next/image";

import solutionImage from "@/public/sec-solution.svg";

export default function SolutionSection() {
  return (
    <section className="relative py-5 text-black md:py-0">
      <div className="container">
        <div className="flex items-center gap-10 max-md:flex-col">
          <div className="relative w-full shrink-0 place-items-center md:w-[300px] lg:w-[360px] xl:w-[480px]">
            <Image
              src={solutionImage}
              alt="Solution"
              className="object-contain"
            />
          </div>
          <div className="grow max-md:text-center">
            <div className="text-xs font-bold tracking-[18px] uppercase lg:text-[20px] lg:font-thin">
              Solution
            </div>
            <div className="mt-8 text-[32px] leading-[1.2] lg:mt-4 lg:text-[70px] lg:leading-[80px] lg:font-thin">
              Universal
              <br />
              Interoperable
              <br />
              Identity
            </div>
            <div className="mt-10 align-middle text-[17px] max-lg:leading-[1.5] max-lg:opacity-80 lg:mt-4 lg:py-4 lg:text-[20px] lg:font-thin">
              Solid uses secure zk-snarks to validate arbitrary KYC data and
              utilizes it in an encrypted form. Cryptography ensures the
              reliability of data and service providers.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
