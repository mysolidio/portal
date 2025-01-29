import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is the digital identity service secure?",
    answer: "Yes, our platform uses advanced encryption and decentralized protocols to ensure your identity and data are fully protected.",
    value: "item-1",
  },
  {
    question: "How does data sovereignty work with your service?",
    answer:
      "With our service, you have complete control over your personal data. You own your identity and can decide how and where it's shared in the web3 ecosystem.",
    value: "item-2",
  },
  {
    question: "Can I use this service across different platforms?",
    answer:
      "Absolutely! Our digital identity service is built to be interoperable across various decentralized platforms and web3 applications.",
    value: "item-3",
  },
  {
    question: "How does the service ensure privacy?",
    answer: "We use cryptographic methods to secure user data, ensuring that only you have access to your personal information and identity.",
    value: "item-4",
  },
  {
    question: "Is my data shared with third parties?",
    answer: "No, you retain full ownership and control over your data. We never share your information without your explicit consent.",
    value: "item-5",
  },

];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
