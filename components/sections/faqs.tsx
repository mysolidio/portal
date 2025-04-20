import { ChevronDownIcon } from "lucide-react";

const items = [
  {
    question:
      "What is onchain KYC and how does it differ from traditional KYC?",
    answer:
      "Onchain KYC combines traditional identity verification with blockchain technology, storing verification attestations on the blockchain rather than in centralized databases. This approach enhances security, transparency, and data portability while reducing operational costs. Unlike traditional KYC, onchain solutions provide users with greater control over their identity data and enable seamless verification across multiple platforms without repeating the entire process.",
  },
  {
    question: "How does your solution ensure regulatory compliance?",
    answer:
      "Our KYC infrastructure is designed with compliance at its core, adhering to global standards including FATF recommendations, AML directives, and GDPR requirements. We provide comprehensive audit trails, ongoing monitoring capabilities, and regular updates to keep pace with evolving regulations. Our system allows customization for specific jurisdictional requirements while maintaining the highest standards of data security and privacy protection.",
  },
  {
    question:
      "What security measures are in place to protect sensitive user data?",
    answer:
      "We implement multiple layers of security, including zero-knowledge proofs to validate data without exposing the underlying information, end-to-end encryption for all data transfers, and selective disclosure mechanisms that reveal only necessary information. Our architecture separates identity verification from blockchain attestations, ensuring that sensitive personal data is never stored on-chain, while maintaining cryptographic links to secure verification records.",
  },
  {
    question: "How does your SDK integrate with existing applications?",
    answer:
      "Our SDK is designed for seamless integration with both Web3 and traditional applications through RESTful APIs and blockchain-compatible interfaces. The implementation typically requires minimal code changes and supports various programming languages. We provide comprehensive documentation, ready-to-use UI components, and developer support to ensure smooth integration, regardless of whether you're building a new application or enhancing an existing platform.",
  },
  {
    question:
      "What benefits does a universal identity approach offer to end-users?",
    answer:
      "A universal identity approach eliminates the need for users to repeatedly provide personal information across different services, reducing onboarding friction and improving user experience. Users maintain control over their identity data, choosing what information to share with each service. This approach enhances privacy by minimizing data duplication across systems, while providing users with a comprehensive view of how their identity is being used across various platforms.",
  },
];

export default function FAQsSection() {
  return (
    <section className="relative py-16 text-black lg:py-24">
      <div className="container lg:max-w-5xl">
        <div className="text-center text-[32px] leading-[1.2] lg:text-[48px]">
          Frequently asked questions
        </div>
        <div className="mt-10 space-y-2 lg:mt-6">
          {items.map(({ question, answer }, idx) => (
            <details
              key={idx}
              className="group rounded-[16px] border border-[#252525] p-4 transition-all select-none lg:rounded-[24px] lg:p-6"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                <div className="text-base group-open:font-bold lg:font-bold">
                  {question}
                </div>
                <ChevronDownIcon className="size-4 shrink-0 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="mt-4 rounded-[8px] bg-gradient-to-t from-[#2D2D2D] from-[-300%] to-white p-4 text-sm leading-[1.5] opacity-80 md:backdrop-blur-[6.5px] lg:rounded-[16px] lg:p-6">
                {answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
