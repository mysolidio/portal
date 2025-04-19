import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC, useState } from "react";

import { NavigationItemType } from "./types";

interface DesktopContentProps {
  item: NavigationItemType;
}

const DesktopContent: FC<DesktopContentProps> = ({ item }) => {
  const { subItems, description } = item;
  const [activeItem, setActiveItem] = useState(subItems[0]?.label || null);

  const hasDescriptions = subItems.some((item) => item.description);

  if (hasDescriptions) {
    return (
      <div className="mx-auto w-(--header-content-width) text-white">
        <div className="flex gap-10">
          <div className="w-[300px] border-r border-white/10 p-4">
            {activeItem && (
              <>
                <h4 className="text-md mb-1 font-medium">
                  {subItems.find((item) => item.label === activeItem)?.label}
                </h4>
                <p className="text-sm text-white/80">
                  {subItems.find((item) => item.label === activeItem)
                    ?.description || description}
                </p>
              </>
            )}
          </div>
          <div className="grid flex-1 grid-cols-2 gap-x-10 gap-y-2 pt-2 pb-4">
            {subItems.map(
              (
                { label: subLabel, href, description: subDescription },
                subIdx,
              ) => (
                <Link
                  key={subIdx}
                  href={href}
                  className="group flex min-w-[150px] items-center justify-between border-b border-white/20 px-2 py-4 hover:border-white/50"
                  onMouseEnter={() =>
                    subDescription ? setActiveItem(subLabel) : null
                  }
                >
                  {subLabel}
                  <ArrowRight
                    size={20}
                    className="hidden transition-all group-hover:inline-block"
                  />
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-(--header-content-width) text-white">
      <div className="grid grid-cols-2 gap-x-10 gap-y-2 pt-2 pb-4">
        {subItems.map(({ label: subLabel, href }, subIdx) => (
          <Link
            key={subIdx}
            href={href}
            className="group flex items-center justify-between border-b border-white/20 py-4 hover:border-white/50"
          >
            {subLabel}
            <ArrowRight
              size={20}
              className="hidden transition-all group-hover:inline-block"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopContent;
