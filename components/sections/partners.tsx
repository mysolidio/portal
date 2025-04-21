import Image from "next/image";

export default async function PartnersSection() {
  return (
    <section className="relative -mb-5 pt-20 lg:pt-32">
      <div className="container">
        <div className="text-center text-[32px] leading-[1.2] lg:text-[40px] lg:font-thin">
          Backed by the best
        </div>
        <div className="relative -mx-4 -mt-9 w-[calc(100%+32px)] md:-mx-10 md:w-[calc(100%+80px)] lg:-mt-6">
          <div className="scroll-hidden flex w-full snap-x snap-mandatory overflow-x-auto *:-ml-2.5 *:first:ml-[51px] lg:*:ml-2.5">
            {Array.from({ length: 7 }).map((_, idx) => (
              <div
                key={idx}
                className="relative m-[51px] size-[170px] shrink-0 snap-start scroll-mx-10 lg:size-[272px]"
              >
                <Image
                  src={`/sec-partners-${idx === 4 ? "4.webp" : `${idx}.svg`}`}
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
