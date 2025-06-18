import { cva, VariantProps } from "class-variance-authority";
import { FC, SVGProps } from "react";

import { DiscordIcon, TelegramIcon, XIcon } from "@/icons";
import { cn } from "@/lib/utils";

type Item = {
  Icon: FC<SVGProps<SVGSVGElement>>;
  href?: string;
};
const items: Item[] = [
  {
    Icon: XIcon,
    href: "https://x.com/mysolidio",
  },
  {
    Icon: DiscordIcon,
    // href: "https://discord.gg/GJaBFWCQjZ",
  },
  {
    Icon: TelegramIcon,
    // href: "https://t.me/mysolidio",
  },
];

const iconVariants = cva(
  [
    "grid",
    "size-8",
    "place-content-center",
    "rounded-full",
    "border",
    "transition-colors",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-white",
          "border-black",
          "text-black",
          "hover:bg-black",
          "hover:text-white",
        ],
        light: ["bg-[#f9f9f9]", "border-black", "text-black"],
      },
      disabled: {
        true: [
          "bg-[#CECECE]",
          "border-[#A9A9A9]",
          "text-[#001024]",
          "pointer-events-none",
          "opacity-20",
        ],
        false: null,
      },
    },
    defaultVariants: {
      variant: "default",
      disabled: false,
    },
  },
);

type IconVariantProps = VariantProps<typeof iconVariants>;
type IconProps = IconVariantProps & {
  data: Item;
  className?: string;
};

const Icon: FC<IconProps> = ({ data, className, ...variants }) => {
  if (data.href) {
    return (
      <a
        href={data.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(iconVariants(variants), className)}
      >
        <data.Icon className="size-4" />
      </a>
    );
  }

  return (
    <div
      className={cn(iconVariants({ ...variants, disabled: true }), className)}
    >
      <data.Icon className="size-4" />
    </div>
  );
};

type Props = {
  className?: string;
  iconClassName?: string;
  variant?: IconVariantProps["variant"];
};
export default function Socials({ className, iconClassName, variant }: Props) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      {items.map((item, idx) => (
        <Icon
          key={idx}
          data={item}
          className={iconClassName}
          variant={variant}
        />
      ))}
    </div>
  );
}
