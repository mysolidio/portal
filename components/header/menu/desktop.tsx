import { ComponentProps, FC } from "react";

import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenu,
  NavigationMenuViewport,
} from "@/ui/navigation-menu";

import DesktopContent from "./desktopContent";
import { items } from "./types";

const DesktopMenu: FC<ComponentProps<typeof NavigationMenu>> = (props) => {
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-12">
        {items.map((item, idx) => (
          <NavigationMenuItem key={idx} value={item.label}>
            <NavigationMenuTrigger className="h-14 border-b-2 border-transparent bg-transparent px-0 text-base font-light text-black capitalize transition-colors hover:border-black hover:bg-transparent hover:font-bold data-[state=open]:border-black data-[state=open]:font-bold">
              {item.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="!w-full p-0">
              <DesktopContent item={item} />
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <NavigationMenuViewport className="z-30 mt-4 !w-screen rounded-none border-0 bg-[#F3F5F7]" />
    </NavigationMenu>
  );
};

export default DesktopMenu;
