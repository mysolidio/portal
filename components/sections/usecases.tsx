import { cn } from "@/lib/utils";

const useCases = [
  {
    id: "01",
    title: "KYC",
    description:
      "Streamline Know Your Customer processes with our secure identity verification system. Seamlessly onboard users while ensuring full compliance with global regulations and standards.",
  },
  {
    id: "02",
    title: "DeFi",
    description:
      "Enable secure, compliant DeFi applications with verified identity. Facilitate lending, borrowing, and trading with minimal friction while maintaining regulatory compliance.",
  },
  {
    id: "03",
    title: "National DID",
    description:
      "Support sovereign digital identity solutions for governments and organizations. Create secure, privacy-preserving national ID systems with blockchain verification.",
  },
  {
    id: "04",
    title: "Anti-Sybil",
    description:
      "Protect your platform from Sybil attacks with our unique identity verification. Ensure one-person-one-account while preserving user privacy and preventing bot activity.",
  },
];

export default function UseCasesSection() {
  return (
    <div className="bg-[#001024] py-20 lg:py-30">
      <div className="container">
        <div className="flex flex-col justify-between gap-16 lg:flex-row">
          {/* Left Column - Header and Description */}
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:text-left">
            <div className="text-[12px] leading-[1.3] font-bold tracking-[6px] text-white uppercase lg:text-[16px]">
              Use Cases
            </div>
            <h2 className="mt-4 text-[32px] leading-[1.2] font-semibold text-white lg:text-[42px]">
              How customers
              <br />
              use our services
            </h2>
            <p className="mt-6 text-[14px] leading-[1.6] text-white/80 lg:text-[16px]">
              Our platform provides infrastructure and SDKs for applications
              that implement privacy-preserving digital identity, empowering
              users to own their KYC data and share it only with their consent.
            </p>
          </div>
          <div className="relative -mx-4 w-[calc(100%+32px)] shrink-0 lg:mx-0 lg:w-[min(720px,60%)]">
            <ul className="lg:card-stack scroll-hidden -mb-[3*var(--padding-offset)] flex aspect-square w-full snap-x snap-mandatory scroll-px-4 gap-2 overflow-x-auto">
              {useCases.map(({ id, title, description }, idx) => (
                <li
                  key={idx}
                  className={cn(
                    "lg:card-stack-item aspect-square w-[calc(100%-32px)] shrink-0 snap-start rounded-[24px] bg-cover bg-center shadow first:ml-4 last:mr-4 lg:!mx-0 lg:w-[calc(100%-3*var(--padding-offset))]",
                  )}
                  style={{
                    ["--index" as string]: idx,
                    backgroundImage: `url(/sec-use_case-${idx}.webp)`,
                  }}
                >
                  <div className="relative flex size-full flex-col justify-between gap-10 rounded-[24px] bg-[linear-gradient(180deg,rgba(29,221,227,0)_0%,#002BFF_100%)] p-10 text-white mix-blend-hard-light">
                    <div className="text-[16px] leading-[1.3] font-bold">
                      {id}
                    </div>
                    <div className="space-y-2.5">
                      <div className="line-clamp-1 text-[32px] leading-[1.2]">
                        {title}
                      </div>
                      <div className="line-clamp-2 text-[16px] leading-[1.3] opacity-80">
                        {description}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
