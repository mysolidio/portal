import Image from "next/image";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export default async function PartnersSection({ className }: Props) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div className="container">
        <div className="text-center text-[32px] leading-[1.2] lg:text-[40px] lg:font-light">
          Backed by the best
        </div>
        <div className="relative mt-13 w-[calc(100%+32px)] md:w-[calc(100%+80px)] lg:mt-6">
          <div className="animate-scroll-infinite hover:paused flex w-fit gap-18 lg:gap-28">
            {Array.from({ length: 14 }).map((_, idx) => (
              <div key={idx} className="relative size-[170px] shrink-0">
                {/* Duplicate set of logos for seamless loop */}
                <Image
                  src={`/sec-partners-${idx % 7 === 5 ? "5.webp" : `${idx % 7}.svg`}`}
                  alt="Partner"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
