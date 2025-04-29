import Image from "next/image";

import checkIcon from "@/assets/images/checker.svg";
import dataLockIcon from "@/assets/images/dataLock.svg";
import fraudDetectionIcon from "@/assets/images/fraudDetection.svg";
import onchainKycIcon from "@/assets/images/onchainKyc.svg";

const items = [
  {
    title: "KYC Lifecycle Management",
    description: "Manages the life cycle of KYC processes.",
    icon: dataLockIcon,
  },
  {
    title: "Onchain KYC SDK",
    description: "Easy-to-integrate SDK for Web3 applications.",
    icon: onchainKycIcon,
  },
  {
    title: "Fraud Detection",
    description: "Monitors for suspicious activity based onchain activity.",
    icon: fraudDetectionIcon,
  },
  {
    title: "Periodic AML Compliance Checker",
    description: "Ensures ongoing AML compliance.",
    icon: checkIcon,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-10 text-black lg:py-0">
      <div className="container space-y-10 lg:space-y-15">
        <div className="mx-auto max-w-2xl *:text-center md:mx-0 md:*:text-left">
          <div className="text-xs font-light tracking-[18px] uppercase lg:text-xl">
            Services
          </div>
          <div className="mt-8 text-[32px] leading-[1.2] font-normal md:mt-4 md:font-light lg:text-[58px]">
            Your gateway <br className="md:hidden" />
            to web3
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-x-10 md:gap-y-6 lg:gap-x-[72px]">
          {items.map(({ title, description, icon }, idx) => (
            <div
              key={idx}
              className="border-linear-gradient space-y-[42px] p-7 [--radius:20px] max-lg:px-5 lg:space-y-8"
            >
              <Image
                src={icon}
                alt={title}
                className="size-[65px] shrink-0 lg:size-[100px]"
              />
              <div className="space-y-2">
                <div className="text-[25px] leading-[1.2] font-normal text-white lg:text-[32px]">
                  {title}
                </div>
                <div className="text-sm text-white opacity-60">
                  {description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
