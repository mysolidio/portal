import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Targeted User Acquisition",
    description:
      "Use Solid as a powerful Web3 CRM to launch effective go to market strategies.",
  },
  {
    icon: "BadgeCheck",
    title: "Universal KYC",
    description:
      "Users KYC once and are compliant to interact with any dApp on Solana.",
  },
  {
    icon: "Goal",
    title: "Proof of Humanity",
    description:
      "Unique identity can be ensured by linking wallets, restricting Sybil and bot activity.",
  },
  {
    icon: "PictureInPicture",
    title: "Verified Trust",
    description:
      "Link credit/trust data to unlock DeFi borrowing/lending opportunities.",
  },
  {
    icon: "MousePointerClick",
    title: "RWAs",
    description:
      "Securely create RWAs with compliant institutional distribution via eKYC/KYB.",
  },
  {
    icon: "Newspaper",
    title: "Data Quality Control",
    description:
      "Combat fake and deceptive user including AI automation user.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Usecases
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        How customers use our services
      </h2>

      {/*<h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        fugiat, odit similique quasi sint reiciendis quidem iure veritatis optio
        facere tenetur.
      </h3>*/}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
