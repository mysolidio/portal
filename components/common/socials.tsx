import { DiscordIcon, TelegramIcon, XIcon } from "@/icons";
import { cn } from "@/lib/utils";

const items = [
  {
    Icon: XIcon,
    href: "https://x.com/mysolid",
  },
  {
    Icon: DiscordIcon,
    href: "https://discord.gg/mysolid",
  },
  {
    Icon: TelegramIcon,
    href: "https://t.me/mysolid",
  },
];

type Props = {
  className?: string;
  iconClassName?: string;
  linkClassName?: string;
};

export default function Socials({
  className,
  iconClassName,
  linkClassName,
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
            "grid size-10 place-content-center rounded-full bg-[#002458] text-white",
            linkClassName,
          )}
        >
          <Icon className={cn("size-4", iconClassName)} />
        </a>
      ))}
    </div>
  );
}
