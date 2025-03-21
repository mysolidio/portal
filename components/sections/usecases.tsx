const usecases = [
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

export default function UsecasesSection() {
  return (
    <div className="bg-[#001024] py-20 lg:py-30">
      <div className="container">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Column - Header and Description */}
          <div className="flex flex-col">
            <div className="text-[12px] leading-[1.3] font-bold tracking-[6px] text-white uppercase lg:text-[16px]">
              USECASES
            </div>
            <h2 className="mt-4 text-[32px] leading-[1.2] font-semibold text-white lg:text-[42px]">
              How customers
              <br />
              use our services
            </h2>
            <p className="mt-6 max-w-md text-[14px] leading-[1.6] text-white/80 lg:text-[16px]">
              Primus uses secure zkTLS (zero-knowledge transport layer security)
              and zkFHE (zero-knowledge fully homomorphic encryption) to
              validate arbitrary web data and utilize it in an encrypted form.
            </p>
          </div>

          {/* Right Column - Use Case Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {usecases.map((usecase, index) => (
              <div
                key={index}
                className="rounded-md border border-[#0a2452] bg-[#001838]/50 p-6 transition-colors duration-300 hover:border-[#1a3a6c]"
              >
                <div className="mb-3 text-[28px] font-bold text-[#3b82f6]/80">
                  {usecase.id}
                </div>
                <h3 className="mb-3 text-[18px] font-semibold text-white">
                  {usecase.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-white/70">
                  {usecase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
