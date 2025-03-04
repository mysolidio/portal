import { FC, memo } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  // NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const items = ["solutions", "use cases", "develop", "learn"];

const HeaderMenu: FC = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((title, idx) => (
          <NavigationMenuItem key={idx} value={title}>
            <NavigationMenuTrigger className="font-inter h-14 w-[140px] text-base font-medium text-white capitalize">
              {title}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="right-0 container flex justify-end bg-transparent text-white">
              <div className="w-[750px] capitalize">{title}!</div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <button className="h-[60px] cursor-pointer rounded-full bg-white px-10 py-5 text-base leading-5 font-medium text-black uppercase">
          Book a demo
        </button>
      </NavigationMenuList>
      <NavigationMenuViewport className="mt-0 !w-screen rounded-none border-0 bg-white/10 backdrop-blur-3xl" />
    </NavigationMenu>
  );
};

export default memo(HeaderMenu);
