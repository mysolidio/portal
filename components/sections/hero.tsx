import DemoButton from "@/common/demoButton";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export default function HeroSection({ className }: Props) {
  return (
    <section className={cn("relative text-center text-black", className)}>
      <div className="font-poppins align-middle text-[90px] leading-[136px] font-medium -tracking-[5.63px] text-[#373737] lg:text-[150px] lg:-tracking-[9.63px] lg:text-black">
        Solid
      </div>
      <div className="mt-5 align-middle text-[25px] leading-[30px] font-light tracking-[0.3px] capitalize md:mt-10 md:text-[40px]">
        Verify Once. <br className="md:hidden" />
        Use Anywhere.
      </div>
      <div className="mt-6 text-base font-light lg:mt-4 lg:text-[20px]">
        A global standard for digital identity <br className="md:hidden" /> and
        data self sovereignty.
      </div>
      <DemoButton className="mt-10 h-16 px-11 text-base capitalize" />
    </section>
  );
}
