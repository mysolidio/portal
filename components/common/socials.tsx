import { DiscordIcon, TelegramIcon, XIcon } from "@/icons";
import { cn } from "@/lib/utils";

const items = [
  {
    Icon: XIcon,
    href: "https://x.com/mysolidio",
  },
  {
    Icon: DiscordIcon,
    href: "https://discord.gg/GJaBFWCQjZ",
  },
  {
    Icon: TelegramIcon,
    href: "https://t.me/mysolidio",
  },
];

type Props = {
  className?: string;
  iconClassName?: string;
  linkClassName?: string;
  dark?: boolean;
};

export default function Socials({
  className,
  iconClassName,
  linkClassName,
  dark,
}: Props) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      {items.map(({ Icon, href }, idx) => (
        <a
          key={idx}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "grid size-8 place-content-center rounded-full",
            dark ? "bg-black text-white" : "bg-[#f9f9f9] text-black",
            linkClassName,
          )}
        >
          <Icon className={cn("size-4", iconClassName)} />
        </a>
      ))}
    </div>
  );
}
