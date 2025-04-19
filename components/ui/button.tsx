import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import {
  useCallback,
  ComponentProps,
  Children,
  ReactElement,
  ReactNode,
  useMemo,
  cloneElement,
} from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-hidden cursor-pointer transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default:
          "bg-black border border-[#6B6B6B] text-white hover:bg-linear-(--gradient) hover:shadow-[0px_11px_34px_0px_rgba(255,255,255,0.23)]",
        primary:
          "bg-linear-(--gradient) border border-[#6B6B6B] text-white hover:bg-linear-(--gradient-2) shadow-[0px_11px_34px_0px_rgba(255,255,255,0.23)]",
        // TODO: Deprecated variants, remove them
        special:
          "bg-blue-600 text-white disabled:bg-linear-(--gradient-disabled) hover:bg-blue-500 hover:shadow-[0_0_10px_rgba(168,85,247,0.4)] transition-all",
        "outline-primary":
          "border border-primary text-primary hover:border-[#451093] hover:text-[#451093] disabled:border-[#242424] disabled:text-[#666666]",
        outline:
          "border border-[#666666] text-white hover:border-white hover:bg-white hover:text-[#001024] disabled:border-[#242424] disabled:text-[#666666]",
        link: "text-primary hover:text-[#451093] disabled:text-[#666666]",
        ghost:
          "text-white bg-white/30 backdrop-blur-sm hover:bg-white/50 hover:text-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] disabled:text-[#666666]",
      },
      size: {
        md: "rounded-full h-10 px-6 text-sm font-light",
        special:
          "rounded-full h-16 px-11 text-[18px] leading-[0.371px] font-bold",
        // TODO: Deprecated variants, remove them
        sm: "rounded-full h-9 px-6 text-sm",
        lg: "rounded-full h-11 px-6 text-base",
        xl: "rounded-full h-12 px-6 text-lg font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  const processChild = useCallback(
    (child: ComponentProps<"button">["children"]): ReactNode => {
      return Children.map(child, (_child) => {
        if (typeof _child === "string" || typeof _child === "number") {
          return <span className="flex-1 text-center">{_child}</span>;
        }
        return _child;
      });
    },
    [],
  );

  const processNestedChild = useCallback(
    (child: ComponentProps<"button">["children"]): ReactNode => {
      const element = child as ReactElement<{ children?: ReactNode }>;
      const nestedChild = element.props.children;
      return cloneElement(element, {}, processChild(nestedChild));
    },
    [processChild],
  );

  // Process children to wrap text content in a span
  const processedChildren = useMemo(
    () => (asChild ? processNestedChild(children) : processChild(children)),
    [asChild, children, processChild, processNestedChild],
  );

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {processedChildren}
    </Comp>
  );
}

export { Button, buttonVariants };
