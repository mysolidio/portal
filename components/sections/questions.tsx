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

export default function QuestionsSection() {
  return (
    <div className="bg-[#001024] py-20 text-white lg:py-30">
      <div className="container lg:max-w-5xl">
        <div className="mb-10 space-y-3 text-center">
          <div className="text-[12px] leading-[1.3] font-bold tracking-[4px] uppercase lg:text-[14px]">
            Knowledge Base
          </div>
          <div className="text-center text-[30px] leading-[1.2] font-semibold lg:text-[42px]">
            Frequently Asked Questions
          </div>
        </div>
        <div className="mt-10 space-y-3 lg:mt-6">
          {items.map(({ question, answer }, idx) => (
            <details
              key={idx}
              className="group rounded-md border border-[#0a2452] bg-[#001838]/50 p-4 transition-all hover:border-[#1a3a6c] lg:rounded-lg lg:p-6"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                <div className="text-[16px] leading-[1.3] font-medium group-open:font-bold lg:text-[18px]">
                  {question}
                </div>
                <div className="flex-shrink-0 rounded-md bg-[#00256c]/70 p-1.5 transition-colors group-open:bg-[#0042b0]/70">
                  <ChevronDownIcon className="size-4 shrink-0 transition-transform duration-300 group-open:rotate-180" />
                </div>
              </summary>
              <div className="mt-4 rounded-md bg-[#002047] p-4 text-[15px] leading-relaxed text-slate-200 lg:rounded-md lg:p-5">
                {answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
