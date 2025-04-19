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
    <section className="bg-black py-20 text-white">
      <div className="container space-y-15">
        <div className="mx-auto max-w-6xl [&>*]:text-center">
          <div className="text-xs font-bold tracking-[18px] uppercase lg:text-xl">
            Use Cases
          </div>
          <div className="mt-[22px] text-[32px] leading-[1.2] font-normal lg:mt-4 lg:text-[48px]">
            How customers use our services
          </div>
          <p className="mt-10 text-base leading-[1.5] text-white/80 opacity-80 lg:mt-8 lg:text-[23px]">
            Our platform provides infrastructure and SDKs for applications that
            implement privacy-preserving digital identity, empowering users to
            own their KYC data and share it only with their consent.
          </p>
        </div>

        <div className="relative -mx-4 w-full shrink-0 lg:mx-0">
          <ul className="scroll-hidden -mb-[3*var(--padding-offset)] flex w-full snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto">
            {useCases.map(({ id, title, description }, idx) => (
              <li
                key={idx}
                className={cn(
                  "border-linear-gradient aspect-square w-[calc(100%-32px)] shrink-0 snap-start bg-cover bg-center shadow [--radius:24px] first:ml-4 last:mr-4 lg:!mx-0 lg:size-[482px]",
                )}
                style={
                  {
                    // TODO: Add background image
                    // backgroundImage: `url(/sec-use_case-${idx}.webp)`,
                  }
                }
              >
                <div className="relative flex size-full flex-col justify-between gap-10 p-10 text-white">
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
    </section>
  );
}
