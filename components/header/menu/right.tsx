import { FC } from "react";

import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/ui/navigation-menu";

import CTAButton from "./ctaButton";
import DesktopContent from "./desktopContent";
import { items } from "./types";

const RightMenu: FC = () => {
  const rightItems = items.slice(3); // Learn

  return (
    <>
      {rightItems.map((item, idx) => (
        <NavigationMenuItem key={idx} value={item.label}>
          <NavigationMenuTrigger className="h-14 border-b-2 border-transparent bg-transparent px-0 text-base font-light text-black capitalize transition-colors hover:border-black hover:bg-transparent hover:font-bold data-[state=open]:border-black data-[state=open]:font-bold">
            {item.label}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!w-full p-4">
            <DesktopContent item={item} />
          </NavigationMenuContent>
        </NavigationMenuItem>
      ))}
      <li>
        <CTAButton className="min-w-64" />
      </li>
    </>
  );
};

export default RightMenu;
