export type SubItemType = {
  label: string;
  href: string;
  description?: string;
};

export type NavigationItemType = {
  label: string;
  href: string;
  description?: string;
  subItems: SubItemType[];
};

export const items: NavigationItemType[] = [
  {
    label: "Solutions",
    href: "#solutions",
    subItems: [
      {
        label: "KYC Lifecycle Management",
        href: "#kyc-lifecycle-management",
      },
      {
        label: "Onchain KYC SDK",
        href: "#onchain-kyc-sdk",
      },
      {
        label: "Fraud Detection",
        href: "#fraud-detection",
      },
      {
        label: "Periodic AML Compliance Checker",
        href: "#periodic-aml-compliance-checker",
      },
    ],
  },
  {
    label: "Use Cases",
    href: "#use-cases",
    description:
      "Explore how our identity solutions solve real-world challenges across multiple industries with secure, compliant verification processes.",
    subItems: [
      {
        label: "KYC",
        href: "#kyc",
        description:
          "Streamline Know Your Customer processes with our secure identity verification system. Seamlessly onboard users while ensuring full compliance with global regulations and standards.",
      },
      {
        label: "Defi",
        href: "#defi",
        description:
          "Enable secure, compliant DeFi applications with verified identity. Facilitate lending, borrowing, and trading with minimal friction while maintaining regulatory compliance.",
      },
      {
        label: "National DID",
        href: "#digital-national-id",
        description:
          "Support sovereign digital identity solutions for governments and organizations. Create secure, privacy-preserving national ID systems with blockchain verification.",
      },
      {
        label: "Anti-Sybil",
        href: "#anti-sybil",
        description:
          "Protect your platform from Sybil attacks with our unique identity verification. Ensure one-person-one-account while preserving user privacy and preventing bot activity.",
      },
    ],
  },
  {
    label: "Develop",
    href: "#develop",
    subItems: [
      {
        label: "Documentation",
        href: "#documentation",
      },
      {
        label: "API Reference",
        href: "#api-reference",
      },
    ],
  },
  {
    label: "Learn",
    href: "#learn",
    subItems: [
      {
        label: "Blog",
        href: "#blog",
      },
      {
        label: "Whitepaper",
        href: "https://docsend.com/v/mdysq/solid_whitepaper",
      },
      {
        label: "What is Onchain KYC?",
        href: "#what-is-onchain-kyc",
      },
      {
        label: "What is Verifiable Credential?",
        href: "#what-is-verifiable-credential",
      },
    ],
  },
];
