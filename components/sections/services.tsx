import {
  CheckerIcon,
  DataLockIcon,
  DataScientistIcon,
  FraudDetectionIcon,
} from "@/icons";

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
    <div className="bg-[#001024] py-20 text-white lg:py-30">
      <div className="container space-y-15">
        <div className="mx-auto max-w-2xl lg:mx-0 [&>*]:text-center lg:[&>*]:text-left">
          <div className="text-[12px] leading-[1.3] font-bold tracking-[6px] uppercase lg:text-[16px]">
            Services
          </div>
          <div className="mt-2 text-[32px] leading-[1.2] font-semibold lg:mt-4 lg:text-[42px]">
            Your gateway to web3
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-x-12 lg:gap-y-10">
          {items.map(({ title, description, Icon }, idx) => (
            <div
              key={idx}
              className="flex items-start gap-6 rounded-md border border-[#0a2452] bg-[#001838]/50 px-5 py-6 transition-colors duration-300 hover:border-[#1a3a6c]"
            >
              <div className="rounded-md bg-[#00256c] p-3">
                <Icon className="size-[40px] shrink-0 text-white" />
              </div>
              <div className="space-y-2">
                <div className="text-[20px] leading-[1.3] font-semibold text-white">
                  {title}
                </div>
                <div className="text-[14px] leading-[1.4] text-white opacity-75">
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
