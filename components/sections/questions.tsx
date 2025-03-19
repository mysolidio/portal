import { ChevronDownIcon } from "lucide-react";

const items = Array.from({
  length: 5,
}).fill({
  question:
    "Primus uses secure zkTLS (zero-knowledge transport layer security)",
  answer:
    "Primus uses secure zkTLS (zero-knowledge transport layer security) and zkFHE (zero-knowledge fully homomorphic encryption) to validate arbitrary web data and utilize it in an encrypted form. Primus uses secure zkTLS (zero-knowledge transport layer security) and zkFHE (zero-knowledge fully homomorphic encryption) to validate arbitrary web data and utilize it in an encrypted form. Primus uses secure zkTLS (zero-knowledge transport layer security) and zkFHE (zero-knowledge fully homomorphic encryption) to validate arbitrary web data and utilize it in an encrypted form. Primus uses secure zkTLS (zero-knowledge transport layer security) and zkFHE (zero-knowledge fully homomorphic encryption) to validate arbitrary web data and utilize it in an encrypted form.",
}) as { question: string; answer: string }[];

export default function QuestionsSection() {
  return (
    <div className="bg-[#001024] py-20 text-white lg:py-30">
      <div className="container lg:max-w-5xl">
        <div className="text-center text-[32px] leading-[1.2] lg:text-[48px]">
          Frequently asked questions
        </div>
        <div className="mt-10 space-y-2 lg:mt-6">
          {items.map(({ question, answer }, idx) => (
            <details
              key={idx}
              className="group rounded-[16px] border border-[#082659] p-4 lg:rounded-[24px] lg:p-6"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6">
                <div className="text-[16px] leading-[1.3] group-open:font-bold lg:font-bold">
                  {question}
                </div>
                <ChevronDownIcon className="size-4 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="mt-4 rounded-[8px] bg-[linear-gradient(0deg,#002A72_0%,_rgba(0,80,216,0)_100%)] p-4 text-[14px] leading-[1.5] lg:rounded-[16px] lg:p-6">
                {answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
