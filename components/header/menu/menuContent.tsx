import Link, { LinkProps } from "next/link";
import { FC, PropsWithChildren, useState } from "react";

import { ArrowRightGradientIcon } from "@/icons";
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
  onMouseEnter,
  ...props
}) => {
  return (
    <Link
      {...props}
      href={data.href}
      target={data.newTab ? "_blank" : "_self"}
      rel={data.newTab ? "noopener noreferrer" : undefined}
      className={cn(
        "group h-12 space-y-0.5 border-b-[0.5px] border-[#717171] pt-0.5 pb-1.5",
        isMobile ? "block space-y-1 pt-0 pb-1" : "",
      )}
      onMouseEnter={onMouseEnter}
    >
      <div className="flex items-center justify-between *:transition-all">
        <div
          className={cn(
            "group-hover:text-gradient text-base font-light text-[#AAA] group-hover:font-bold",
            isActive && "text-gradient font-bold",
          )}
        >
          {data.label}
        </div>
        <ArrowRightGradientIcon
          className={cn(
            "inline-block size-6 opacity-0 group-hover:opacity-100",
            isActive && "opacity-100",
          )}
        />
      </div>
      {data.comingSoon && (
        <div className="text-xs font-bold text-[#323232]">Coming Soon</div>
      )}
    </Link>
  );
};

const DesktopLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="container pt-2 pb-9 pl-33">{children}</div>;
};

const MobileLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="py-5">{children}</div>;
};

type Props = {
  item: NavigationItemType;
  isMobile?: boolean;
};
const Content: FC<Props> = ({ item, isMobile }) => {
  const { label, description, subItems } = item;
  const [activeItem, setActiveItem] = useState<SubItemType | null>(
    !description ? null : subItems[0],
  );

  const hasDescriptions =
    !!description && subItems.some((item) => item.description);

  if (hasDescriptions) {
    return (
      <div
        className={cn(
          isMobile
            ? "space-y-5"
            : "flex max-w-4xl content-stretch gap-[52px] *:pt-2.5 *:pb-4",
        )}
      >
        {activeItem && (
          <div
            className={cn(
              "*:text-gradient",
              isMobile
                ? "py-2"
                : "w-[290px] shrink-0 border-r-[0.5px] border-black pr-8",
            )}
          >
            <div className="text-base font-bold">
              {activeItem?.label ?? label}
            </div>
            <p className="text-[13px] font-light">
              {activeItem.description ?? description}
            </p>
          </div>
        )}
        <div
          className={cn(
            isMobile
              ? "space-y-5 *:last:border-b-0"
              : "flex w-[calc(100%-290px-52px)] shrink-0 flex-wrap gap-x-11 gap-y-6 self-start *:min-w-56",
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
          ? "space-y-5 *:last:border-b-0"
          : "flex max-w-4xl flex-wrap gap-x-20 gap-y-8 *:min-w-80",
      )}
    >
      {subItems.map((subItem, subIdx) => (
        <SubItem
          key={subIdx}
          data={subItem}
          isActive={activeItem?.label === subItem.label}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
};

const MenuContent: FC<Props> = (props) => {
  if (props.isMobile) {
    return (
      <MobileLayout>
        <Content {...props} />
      </MobileLayout>
    );
  }
  return (
    <DesktopLayout>
      <Content {...props} />
    </DesktopLayout>
  );
};

export default MenuContent;
