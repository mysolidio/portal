import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import LogoWithText from "@/components/common/logoWithText";
import { Button } from "@/components/ui/button";

const links = [
  {
    href: "https://app.mysolid.io",
    text: "Launch App",
  },
  {
    href: "#docs",
    text: "Read the docs",
  },
  {
    href: "https://forms.gle/ax3Ds57nmMHQY97d7",
    text: "Contact Us",
    newTab: true,
  },
];

export default function GetStartedSection() {
  return (
    <section className="bg-[#121212] py-20 text-white">
      <div className="container space-y-10 text-center max-lg:px-10">
        <LogoWithText size={52} />
        <div className="text-[32px] leading-[1.2] lg:text-[48px] lg:font-medium">
          Ready to get Started?
        </div>
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-[14px] [&>a,button]:w-full [&>a,button]:max-w-[274px] [&>a,button]:uppercase">
          {links.map(({ href, text, newTab }, idx) => (
            <Button
              asChild
              variant={idx ? "default" : "primary"}
              size="special"
              key={href}
            >
              <Link href={href} target={newTab ? "_blank" : undefined}>
                {text}
                <ArrowUpRight className="size-6" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
