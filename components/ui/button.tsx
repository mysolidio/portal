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
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-md text-sm font-bold transition-[color,box-shadow] disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-hidden cursor-pointer transition-all",
  {
    variants: {
      variant: {
        default:
          "bg-white border border-black text-black hover:bg-gradient hover:border-[#6B6B6B] hover:text-white",
        primary: "bg-gradient text-white hover:bg-gradient-reverse",
      },
      size: {
        default: "rounded-full h-10 px-6 text-sm",
        special: "rounded-full h-16 px-11 text-[18px] leading-[0.371px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
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
