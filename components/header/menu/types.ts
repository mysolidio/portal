export type SubItemType = {
  label: string;
  href?: string;
  description?: string;
  shortDescription?: string;
  comingSoon?: boolean;
  newTab?: boolean;
};

export type NavigationItemType = {
  label: string;
  href?: string;
  subItems: SubItemType[];
};

export const items: NavigationItemType[] = [
  {
    label: "Solutions",
    href: "#solutions",
    subItems: [
      {
        label: "KYC Lifecycle Management",
        shortDescription: "Streamlined KYC process from start to finish",
      },
      {
        label: "Onchain KYC SDK",
        shortDescription:
          "Modular SDK for unified Web2 and Web3 interoperability",
      },
      {
        label: "Fraud Detection",
        shortDescription:
          "On/off-chain compliance, AML, KYC & FATF alignment - built for all",
      },
      {
        label: "Periodic AML Compliance Checker",
        shortDescription:
          "Regulatory-grade AML compliance audits and ongoing checks",
      },
    ],
  },
  {
    label: "Use Cases",
    href: "#use-cases",
    subItems: [
      {
        label: "KYC",
        description:
          "Streamline Know Your Customer processes with our secure identity verification system. Seamlessly onboard users while ensuring full compliance with global regulations and standards.",
      },
      {
        label: "Decentralized Finance",
        description:
          "Enable secure, compliant DeFi applications with verified identity. Facilitate lending, borrowing, and trading with minimal friction while maintaining regulatory compliance.",
      },
      {
        label: "National D.I.D",
        description:
          "Support sovereign digital identity solutions for governments and organizations. Create secure, privacy-preserving national ID systems with blockchain verification.",
      },
      {
        label: "Anti-Sybil",
        description:
          "Protect your platform from Sybil attacks with our unique identity verification. Ensure one-person-one-account while preserving user privacy and preventing bot activity.",
      },
    ],
  },
  {
    label: "Develop",
    subItems: [
      {
        label: "Documentation",
        comingSoon: true,
      },
      {
        label: "API Reference",
        comingSoon: true,
      },
    ],
  },
  {
    label: "Learn",
    subItems: [
      {
        label: "Blog",
        shortDescription: "Keep up with Solid news",
      },
      {
        label: "Whitepaper",
        shortDescription: "Learn more about our Vision",
        href: "https://docsend.com/v/mdysq/solid_whitepaper",
        newTab: true,
      },
      {
        label: "Frequently Asked Questions",
        shortDescription: "Answers to common questions about Solid",
        href: "#faqs",
      },
    ],
  },
];
