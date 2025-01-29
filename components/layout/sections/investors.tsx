"use client";

import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";
interface investorsProps {
  icon: string;
  name: string;
}

const investors: investorsProps[] = [
  {
    icon: "Crown",
    name: "Solana Foundation",
  },
  {
    icon: "Crown",
    name: "Cogni",
  }
];

export const InvestorsSection = () => {
  return (
    <section id="investors" className="max-w-[75%] mx-auto pb-6 sm:pb-8">
      <h2 className="text-lg text-primary text-center mb-6 tracking-wider">
        Investors
      </h2>
      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {investors.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
