import Image from "next/image";

export default async function PartnersSection() {
  return (
    <section className="relative -mb-5 overflow-hidden pt-20 lg:pt-32">
      <div className="container">
        <div className="text-center text-[32px] leading-[1.2] lg:text-[40px] lg:font-thin">
          Backed by the best
        </div>
        <div className="relative -mx-4 -mt-9 w-[calc(100%+32px)] md:-mx-10 md:w-[calc(100%+80px)] lg:-mt-6">
          <div className="animate-scroll-infinite hover:paused flex w-fit">
            {Array.from({ length: 14 }).map((_, idx) => (
              <div
                key={idx}
                className="relative m-[51px] size-[170px] shrink-0 lg:size-[272px]"
              >
                {/* Duplicate set of logos for seamless loop */}
                <Image
                  src={`/sec-partners-${idx % 7 === 5 ? "4.webp" : `${idx % 7}.svg`}`}
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
