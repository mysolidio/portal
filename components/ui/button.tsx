import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-hidden cursor-pointer transition-colors transition-shadow",
  {
    variants: {
      variant: {
        special:
          "bg-purple-600 text-white disabled:bg-linear-(--gradient-disabled) hover:bg-purple-500 hover:shadow-[0_0_10px_rgba(168,85,247,0.4)] transition-all",
        primary:
          "bg-primary text-white disabled:bg-[#242424] disabled:text-[#666666] hover:bg-[#451093]",
        "outline-primary":
          "border border-primary text-primary hover:border-[#451093] hover:text-[#451093] disabled:border-[#242424] disabled:text-[#666666]",
        outline:
          "border border-[#666666] text-white hover:border-white hover:bg-white hover:text-[#001024] disabled:border-[#242424] disabled:text-[#666666]",
        link: "text-primary hover:text-[#451093] disabled:text-[#666666]",
        ghost:
          "text-white bg-white/30 backdrop-blur-sm hover:bg-white/50 hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] disabled:text-[#666666]",
      },
      size: {
        sm: "rounded-md h-9 px-6 text-sm has-[>svg]:px-2.5",
        md: "rounded-md h-10 px-6 text-sm has-[>svg]:px-3",
        lg: "rounded-md h-11 px-6 text-base has-[>svg]:px-3.5",
        xl: "rounded-md h-12 px-6 text-base has-[>svg]:px-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
