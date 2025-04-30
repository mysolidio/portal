import Image from "next/image";

import checkIcon from "@/assets/images/checker.svg";
import dataLockIcon from "@/assets/images/dataLock.svg";
import fraudDetectionIcon from "@/assets/images/fraudDetection.svg";
import onchainKycIcon from "@/assets/images/onchainKyc.svg";
import { cn } from "@/lib/utils";

const items = [
  {
    title: (
      <div>
        KYC Lifecycle <br className="lg:hidden" />
        Management
      </div>
    ),
    description: "End-to-end solution for KYC management and use cases.",
    icon: dataLockIcon,
  },
  {
    title: (
      <div>
        Onchain <br className="lg:hidden" />
        KYC SDK
      </div>
    ),
    description: "Easy-to-integrate SDK for Web2 & Web3 applications.",
    icon: onchainKycIcon,
  },
  {
    title: "Fraud Detection",
    description: "Monitors for suspicious activity based on- and off-chain.",
    icon: fraudDetectionIcon,
  },
  {
    title: (
      <div>
        Periodic AML <br className="lg:hidden" />
        Compliance Checker
      </div>
    ),
    description: "Ensures ongoing AML compliance.",
    icon: checkIcon,
  },
];

type Props = {
  className?: string;
};

export default function ServicesSection({ className }: Props) {
  return (
    <section className={cn("relative text-black", className)}>
      <div className="container space-y-10 lg:space-y-15">
        <div className="mx-auto max-w-2xl *:text-center md:mx-0 md:*:text-left">
          <div className="text-sub-heading">Services</div>
          <div className="mt-8 text-[32px] leading-[1.2] font-normal md:mt-4 md:font-light lg:text-[58px]">
            Your gateway to <br className="md:hidden" />
            seamless onboarding
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-x-10 md:gap-y-8 lg:gap-x-[70px]">
          {items.map(({ title, description, icon }, idx) => (
            <div
              key={idx}
              className="flex h-64 flex-col justify-between rounded-[20px] bg-white p-[28px_20px_24px] shadow-[0px_6px_14px_0px_rgba(0,115,255,0.3)] lg:block lg:h-auto lg:p-[30px_28px-32px] lg:shadow-[0px_6px_14px_0px_rgba(0,115,255,0.12)]"
            >
              <div className="mb-5 grid size-12 shrink-0 translate-2.5 rotate-45 place-content-center rounded-[15px] bg-[#F3F5F7] shadow-[3.649px_3.649px_2.919px_0px_rgba(0,115,255,0.20)] lg:mb-6 lg:size-[68px] lg:translate-[13px] lg:shadow-[5px_5px_4px_0px_rgba(0,115,255,0.20)]">
                <Image
                  src={icon}
                  alt={title.toString()}
                  className="size-5 shrink-0 -rotate-45 lg:size-[30px]"
                />
              </div>
              <div className="text-[25px] leading-[1.2] font-normal lg:mt-14 lg:line-clamp-1 lg:text-[30px]">
                {title}
              </div>
              <div className="text-sm leading-[1.5] opacity-60 lg:mt-2">
                {description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
