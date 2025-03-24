import { cn } from "@/lib/utils";

const useCases = [
  {
    id: "01",
    title: "Verified Trust",
    description:
      "Link credit/trust data to unlock DeFi borrowing/lending opportunities.",
  },
  {
    id: "02",
    title: "Universal KYC",
    description:
      "Users KYC once and are compliant to interact with any dApp on Solana.",
  },
  {
    id: "03",
    title: "Proof of Humanity",
    description:
      "Unique identity can be ensured by linking wallets, restricting Sybil and bot activity.",
  },
  {
    id: "04",
    title: "Verified Trust",
    description:
      "Link credit/trust data to unlock DeFi borrowing/lending opportunities.",
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
              Primus uses secure zkTLS (zero-knowledge transport layer security)
              and zkFHE (zero-knowledge fully homomorphic encryption) to
              validate arbitrary web data and utilize it in an encrypted form.
            </p>
          </div>

          {/* Right Column - Use Case Cards */}
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
