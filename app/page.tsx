import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { InvestorsSection } from "@/components/layout/sections/investors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Solid - Digital Identity and Data Sovereignty",
  description: "Digital Identity and Data Sovereignty",
  openGraph: {
    type: "website",
    url: "https://solidlabsinc.io",
    title: "Solid - Digital Identity and Data Sovereignty",
    description: "Digital Identity and Data Sovereignty",
    images: [
      {
        url: "https://solidlabsinc.io/solid-lg.png",
        width: 500,
        height: 500,
        alt: "Solid logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://solidlabsinc.io",
    title: "Solid - Digital Identity and Data Sovereignty",
    description: "Digital Identity and Data Sovereignty",
    images: [
      "https://solidlabsinc.io/solid-lg.png",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <InvestorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <TestimonialSection />
      <TeamSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
