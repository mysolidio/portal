import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

import LogoWithText from "./common/logoWithText";
import Socials from "./common/socials";

const itemGroups = [
  {
    title: "About us",
    items: [
      {
        label: "Blog",
        href: "#blog",
        external: false,
      },
      {
        label: "Whitepaper",
        href: "https://docsend.com/v/mdysq/solid_whitepaper",
        external: false,
      },
      {
        label: "Verifiable Credentials",
        href: "https://www.w3.org/TR/vc-data-model-2.0/",
        external: true,
      },
      {
        label: "Solana Foundation",
        href: "http://solana.com",
        external: true,
      },
    ],
  },
  // {
  //   title: "Other",
  //   items: [
  //     {
  //       label: "Terms & Conditions",
  //       href: "#terms-and-conditions",
  //       external: false,
  //     },
  //     {
  //       label: "Privacy",
  //       href: "#privacy",
  //       external: false,
  //     },
  //     {
  //       label: "Trademark Policy",
  //       href: "#trademark-policy",
  //       external: false,
  //     },
  //     {
  //       label: "Responsible disclosure policy",
  //       href: "#responsible-disclosure-policy",
  //       external: false,
  //     },
  //   ],
  // },
  {
    title: "Resources",
    items: [
      {
        label: "Github",
        href: "https://github.com/mysolidio",
        external: true,
      },
      {
        label: "Docs",
        href: "#",
        external: true,
      },
      {
        label: "Research",
        href: "#",
        external: true,
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#00041F] py-20 text-white">
      <div className="relative container grid grid-cols-1 gap-y-10 px-10 md:grid-cols-[1fr_auto] md:gap-x-15 md:px-4 lg:px-8">
        <div className="place-self-center md:place-self-start">
          <LogoWithText size={48} className="text-white" />
          <Socials
            className="mt-4 gap-2 md:justify-start"
            linkClassName="size-8"
          />
        </div>
        <ul className="flex flex-col gap-6 md:flex-row lg:gap-10">
          {itemGroups.map(({ title, items }, idx) => (
            <Fragment key={idx}>
              <li className="space-y-4">
                <div className="text-[14px] leading-[1.5] text-white/80 capitalize">
                  {title}
                </div>
                <ul className="space-y-2 text-[16px] leading-[1.3] font-medium">
                  {items.map(({ label, href, external }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-2 capitalize"
                      >
                        {label}
                        {external && <ArrowUpRightIcon className="size-5" />}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="h-px bg-[linear-gradient(90deg,#45B2FF_0%,#1453F1_100%)] opacity-20 last:hidden lg:h-full lg:w-px" />
            </Fragment>
          ))}
        </ul>
        <div className="place-self-center text-center text-[14px] leading-[1.5] text-white/40 md:absolute md:bottom-0 md:left-4 md:place-self-start lg:left-8">
          @2025 Solid Labs Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
