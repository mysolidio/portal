import {
  CheckerIcon,
  DataLockIcon,
  DataScientistIcon,
  FraudDetectionIcon,
} from "@/icons";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "KYC Lifecycle Management",
    description: "Manages the life cycle of KYC processes.",
    Icon: DataLockIcon,
  },
  {
    title: "Onchain KYC SDK",
    description: "Easy-to-integrate SDK for Web3 applications.",
    Icon: DataScientistIcon,
  },
  {
    title: "Fraud Detection",
    description: "Monitors for suspicious activity based onchain activity.",
    Icon: FraudDetectionIcon,
  },
  {
    title: "Periodic AML Compliance Checker",
    description: "Ensures ongoing AML compliance.",
    Icon: CheckerIcon,
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-black py-20 text-white">
      <div className="container space-y-15">
        <div className="mx-auto max-w-2xl lg:mx-0 [&>*]:text-center lg:[&>*]:text-left">
          <div className="text-xs font-bold tracking-[18px] uppercase lg:text-xl lg:font-light">
            Services
          </div>
          <div className="mt-8 text-[32px] leading-[1.2] font-normal lg:mt-4 lg:text-[58px] lg:font-light">
            Your gateway to web3
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-x-10 md:gap-y-6 lg:gap-x-[72px]">
          {items.map(({ title, description, Icon }, idx) => (
            <div
              key={idx}
              className={cn(
                "relative z-1 rounded-[21px] border border-transparent bg-[#151513] p-7 lg:space-y-8",
                "before:absolute before:inset-0 before:-z-[1] before:rounded-[21px]",
                "before:bg-[linear-gradient(118.71deg,_#FFFFFF_11.96%,_#212121_45.04%,_#BDBDBD_66.69%,_#232323_75.79%,_#646464_86.15%)]",
                "after:absolute after:inset-[1px] after:z-[-1] after:rounded-[20px] after:bg-[#151513]",
                "space-y-[42px]",
              )}
            >
              <Icon className="size-[65px] shrink-0 lg:size-[100px]" />
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
    </div>
  );
}
