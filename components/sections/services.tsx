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
    title: "KYC Lifecycle Management",
    description: "Manages the life cycle of KYC processes.",
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
        <div className="[&>*]:text-center lg:[&>*]:text-left">
          <div className="text-[12px] leading-[1.3] font-bold tracking-[8px] text-[#21FBFF] uppercase lg:text-[18px]">
            Services
          </div>
          <div className="mt-2 text-[32px] leading-[1.2] lg:mt-4 lg:text-[48px]">
            Your gateway to web3
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-x-20 lg:gap-y-15">
          {items.map(({ title, description, Icon }, idx) => (
            <div
              key={idx}
              className="flex items-start gap-8 px-4 lg:flex-col lg:px-0"
            >
              <Icon className="size-[50px] shrink-0 lg:size-[100px]" />
              <div className="space-y-2">
                <div className="text-[24px] leading-[1.2] font-medium">
                  {title}
                </div>
                <div className="text-[14px] leading-[1.3] opacity-60">
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
