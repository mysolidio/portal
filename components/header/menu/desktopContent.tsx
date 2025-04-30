import Link, { LinkProps } from "next/link";
import { FC, useState } from "react";

import { ArrowRightGradientIcon } from "@/icons";

import { NavigationItemType, SubItemType } from "./types";

interface DesktopContentProps {
  item: NavigationItemType;
}

type Props = Omit<LinkProps, "href"> & {
  data: NavigationItemType["subItems"][0];
};
const SubItem: FC<Props> = ({ data, onMouseEnter, ...props }) => {
  return (
    <Link
      {...props}
      href={data.href}
      target={data.newTab ? "_blank" : "_self"}
      rel={data.newTab ? "noopener noreferrer" : undefined}
      className="group h-12 space-y-0.5 border-b-[0.5px] border-black pt-0.5 pb-1.5"
      onMouseEnter={onMouseEnter}
    >
      <div className="flex items-center justify-between *:transition-all">
        <div className="group-hover:text-gradient text-base font-light text-[#AAA] group-hover:font-bold">
          {data.label}
        </div>
        <ArrowRightGradientIcon className="inline-block size-6 opacity-0 group-hover:opacity-100" />
      </div>
      {data.comingSoon && (
        <div className="text-xs font-bold text-[#323232]">Coming Soon</div>
      )}
    </Link>
  );
};

const DesktopContent: FC<DesktopContentProps> = ({ item }) => {
  const { label, description, subItems } = item;
  const [activeItem, setActiveItem] = useState<SubItemType | null>(
    !description ? null : subItems[0],
  );

  const hasDescriptions =
    !!description && subItems.some((item) => item.description);

  if (hasDescriptions) {
    return (
      <div className="container pt-2 pb-9 pl-33">
        <div className="flex max-w-4xl content-stretch gap-[52px] *:pt-2.5 *:pb-4">
          {activeItem && (
            <div className="*:text-gradient w-[290px] shrink-0 border-r-[0.5px] border-black pr-8">
              <div className="text-base font-bold">
                {activeItem?.label ?? label}
              </div>
              <p className="text-[13px] font-light">
                {activeItem.description ?? description}
              </p>
            </div>
          )}
          <div className="flex w-[calc(100%-290px-52px)] shrink-0 flex-wrap gap-x-11 gap-y-6 self-start *:min-w-56">
            {subItems.map((subItem, subIdx) => (
              <SubItem
                key={subIdx}
                data={subItem}
                onMouseEnter={() => setActiveItem(subItem)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-33 pt-2 pb-11">
      <div className="flex max-w-4xl flex-wrap gap-x-20 gap-y-8 *:min-w-80">
        {subItems.map((subItem, subIdx) => (
          <SubItem key={subIdx} data={subItem} />
        ))}
      </div>
    </div>
  );
};

export default DesktopContent;
