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

        <div className="relative -mx-4 w-[calc(100%+32px)] shrink-0 lg:-mx-20 lg:w-[calc(100%+160px)]">
          <ul className="scroll-hidden -mb-[3*var(--padding-offset)] flex w-full snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto">
            {useCases.map(({ id, title, description }, idx) => (
              <li
                key={idx}
                className={cn(
                  "border-linear-gradient aspect-square w-[calc(100%-64px)] shrink-0 snap-center p-px shadow [--radius:24px] first:ml-4 last:mr-4 lg:size-[482px] lg:snap-start",
                )}
              >
                <div
                  className="relative flex size-full flex-col justify-between gap-10 rounded-[24px] p-10 text-white"
                  style={{
                    // TODO: Add background image
                    // backgroundImage: `url(/sec-use_case-${idx}.webp)`,
                    background: `radial-gradient(163.67% 163.67% at 50% 146.15%, #492B5C 11.59%, #BFA3D1 63.31%, #C1D2FF 93.59%), url(/sec-use_case-${idx}.webp) lightgray 50% / cover no-repeat`,
                    backgroundBlendMode: "hard-light, normal",
                  }}
                >
                  <div className="text-base font-bold">{id}</div>
                  <div className="-m-10 space-y-2.5 overflow-hidden rounded-b-[24px] bg-linear-[180deg,rgba(35,23,67,0.00)_1.41%,#170E2A_56.17%] p-10">
                    <div className="text-[33px] leading-[1.2]">{title}</div>
                    <div className="text-base opacity-80">{description}</div>
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
