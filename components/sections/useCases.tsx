"use client";

import { useRef, MouseEvent, useCallback } from "react";

import { cn } from "@/lib/utils";

const useCases = [
  {
    id: "01",
    title: "Verified Trust",
    description:
      "Streamline Know Your Customer processes with our secure identity verification system. Seamlessly onboard users while ensuring full compliance with global regulations and standards",
  },
  {
    id: "02",
    title: "Web 2 & Web 3 App On-boarding",
    description:
      "Verify your identity once with Solid and onboard seamlessly to hundreds of traditional finance apps, web3 exchanges & dApps, digital banks, insurance platforms, etc.",
  },
  {
    id: "03",
    title: "DeFi",
    description:
      "Enable secure, compliant DeFi applications with verified identity. Facilitate lending, borrowing, and trading with minimal friction while maintaining regulatory compliance.",
  },
  {
    id: "04",
    title: "National DID",
    description:
      "Support sovereign digital identity solutions for governments and organizations. Create secure, privacy-preserving national ID systems with blockchain verification.",
  },
  {
    id: "05",
    title: "Anti-Sybil",
    description:
      "Protect your platform from Sybil attacks with our unique identity verification. Ensure one-person-one-account while preserving user privacy and preventing bot activity.",
  },
];

type Props = {
  className?: string;
};

export default function UseCasesSection({ className }: Props) {
  const scrollRef = useRef<HTMLUListElement>(null);
  const mouseDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const startDragging = useCallback((e: MouseEvent) => {
    mouseDown.current = true;
    if (scrollRef.current) {
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeft.current = scrollRef.current.scrollLeft;
    }
  }, []);

  const stopDragging = useCallback(() => {
    mouseDown.current = false;
  }, []);

  const move = useCallback((e: MouseEvent) => {
    e.preventDefault();
    if (!mouseDown.current || !scrollRef.current) return;

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  return (
    <section className={cn("relative text-black", className)}>
      <div className="container space-y-[54px] lg:space-y-[70px]">
        <div className="mx-auto max-w-6xl *:text-center">
          <div className="text-xs font-bold tracking-[18px] uppercase lg:text-[20px] lg:font-light">
            Use Cases
          </div>
          <div className="mt-[22px] text-[32px] leading-[1.2] lg:mt-7 lg:text-[40px]">
            How customers use our services
          </div>
          <p className="mt-10 text-[17px] leading-[1.5] opacity-80 lg:text-[23px]">
            Our platform provides infrastructure and SDKs for applications that
            implement privacy-preserving digital identity, empowering users to
            own their KYC data and share it only with their consent.
          </p>
        </div>

        <div className="relative -mx-4 w-[calc(100%+32px)] shrink-0 md:-mx-10 md:w-[calc(100%+80px)]">
          <ul
            ref={scrollRef}
            onMouseDown={startDragging}
            onMouseLeave={stopDragging}
            onMouseUp={stopDragging}
            onMouseMove={move}
            className={cn(
              "scroll-hidden relative -mb-[3*var(--padding-offset)] flex w-full scroll-px-4 gap-4 overflow-x-auto lg:gap-5",
              "cursor-grab select-none active:cursor-grabbing",
            )}
          >
            {useCases.map(({ id, title, description }, idx) => (
              <li
                key={idx}
                className="relative z-0 aspect-square w-[calc(100%-64px)] shrink-0 rounded-[24px] shadow first:ml-4 last:mr-4 md:size-[482px]"
              >
                <div
                  className="relative flex size-full flex-col justify-between gap-10 rounded-[24px] bg-cover bg-no-repeat p-7 text-white lg:p-10"
                  style={{
                    backgroundImage: `url(/sec-use_case-${idx}.webp)`,
                  }}
                >
                  <div className="text-xs leading-[1.3] font-bold lg:text-base">
                    {id}
                  </div>
                  <div className="-m-10 space-y-2.5 overflow-hidden rounded-b-[24px] bg-linear-[180deg,rgba(1,7,129,0.00)_1.41%,#010781_56.17%] p-10">
                    <div className="text-[22px] leading-[1.2] lg:text-[32px]">
                      {title}
                    </div>
                    <div className="text-[11px] leading-[1.3] opacity-80 lg:text-[15px]">
                      {description}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
