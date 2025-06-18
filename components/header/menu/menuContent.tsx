import { Separator } from "@radix-ui/react-separator";
import { ChevronsDown } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { FC, PropsWithChildren, useState } from "react";

import Socials from "@/common/socials";
import { cn } from "@/lib/utils";

import { NavigationItemType, SubItemType } from "./types";

type SubItemProps = Omit<LinkProps, "href"> & {
  data: NavigationItemType["subItems"][0];
  isActive?: boolean;
  isMobile?: boolean;
};
const SubItem: FC<SubItemProps> = ({
  data,
  isActive,
  isMobile,
  onClick,
  onMouseEnter,
  ...props
}) => {
  const { href, label, newTab, shortDescription, comingSoon } = data;
  return (
    <Link
      {...props}
      href={href ?? "#"}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={cn(
        "group border-b-[0.5px] border-[#717171]/50 text-[#AAA]",
        isMobile ? "block space-y-1 pb-1" : "space-y-0.5 pb-3 *:line-clamp-1",
      )}
      onMouseEnter={onMouseEnter}
      onClick={(e) => {
        if (!href) {
          e.preventDefault();
        }
        onClick?.(e);
      }}
    >
      <div
        className={cn(
          "text-base leading-5.5 font-light",
          isActive && "text-gradient",
          isMobile ? "group-hover:font-bold" : "group-hover:text-gradient",
          isMobile && isActive && "font-bold",
        )}
      >
        {label}
      </div>
      {(shortDescription || comingSoon) && (
        <div
          className={cn(
            "text-xs leading-4",
            isMobile ? "font-bold" : "group-hover:text-gradient font-extrabold",
            isActive && (isMobile ? "text-black" : "text-gradient"),
          )}
        >
          {shortDescription || "Coming Soon"}
        </div>
      )}
    </Link>
  );
};

type LayoutProps = PropsWithChildren<{ href?: string }>;
const DesktopLayout: FC<LayoutProps> = ({ children, href }) => {
  return (
    <div className="container pt-5 pb-12">
      <div
        className={cn(
          "flex items-stretch gap-14 px-3 *:odd:self-center",
          !href && "pr-52",
        )}
      >
        <Socials className="flex-col gap-5" />
        <Separator
          orientation="vertical"
          className="h-auto w-[0.5px] bg-[#717171] opacity-50"
        />
        {children}
        {!!href && (
          <>
            <Separator
              orientation="vertical"
              className="h-auto w-[0.5px] bg-[#717171] opacity-50"
            />
            <Link
              href={href}
              className="inline-flex shrink-0 items-center justify-end gap-1 text-xs leading-4 font-bold underline"
            >
              Learn More
              <ChevronsDown className="size-5" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

const MobileLayout: FC<LayoutProps> = ({ children, href }) => {
  return (
    <div className="py-6">
      {children}
      {!!href && (
        <div className="mt-6 text-center">
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-xs leading-4 font-bold underline"
          >
            Learn More
            <ChevronsDown className="size-5" />
          </Link>
        </div>
      )}
    </div>
  );
};

type Props = {
  data: NavigationItemType;
  isMobile?: boolean;
};
const Content: FC<Props> = ({ data, isMobile }) => {
  const { subItems } = data;
  const hasDescriptions = subItems.some((item) => !!item.description);
  const [activeItem, setActiveItem] = useState<SubItemType | null>(
    subItems[0] ?? null,
  );

  if (hasDescriptions) {
    return (
      <div
        className={cn(
          isMobile
            ? "space-y-2.5"
            : "flex max-w-4xl grow content-stretch gap-[52px] *:self-center",
        )}
      >
        {activeItem && (
          <div
            className={cn(
              "*:text-gradient",
              isMobile
                ? "py-2"
                : "w-[290px] shrink-0 border-r-[0.5px] border-[#717171]/50 pr-8",
            )}
          >
            <div className="text-base font-bold">{activeItem.label}</div>
            <p className="text-[13px] font-light">{activeItem.description}</p>
          </div>
        )}
        <div
          className={cn(
            isMobile
              ? "space-y-2.5 *:last:border-b-0"
              : "flex w-[calc(100%-290px-52px)] shrink-0 flex-wrap gap-x-7 gap-y-2 self-start *:min-w-[calc(50%-14px)] max-xl:*:w-full",
          )}
        >
          {subItems.map((subItem, subIdx) => (
            <SubItem
              key={subIdx}
              data={subItem}
              isActive={activeItem?.label === subItem.label}
              isMobile={isMobile}
              onClick={() => setActiveItem(subItem)}
              onMouseEnter={() => setActiveItem(subItem)}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        isMobile
          ? "space-y-2.5 *:last:border-b-0"
          : "flex max-w-4xl grow flex-wrap gap-x-18 gap-y-7 *:min-w-[calc(50%-36px)] max-xl:gap-y-4 max-xl:*:w-full",
      )}
    >
      {subItems.map((subItem, subIdx) => (
        <SubItem
          key={subIdx}
          data={subItem}
          isActive={activeItem?.label === subItem.label}
          isMobile={isMobile}
          onClick={() => setActiveItem(subItem)}
          onMouseEnter={() => setActiveItem(subItem)}
        />
      ))}
    </div>
  );
};

const MenuContent: FC<Props> = ({ data, isMobile }) => {
  if (isMobile) {
    return (
      <MobileLayout href={data.href}>
        <Content data={data} isMobile />
      </MobileLayout>
    );
  }
  return (
    <DesktopLayout href={data.href}>
      <Content data={data} />
    </DesktopLayout>
  );
};

export default MenuContent;
