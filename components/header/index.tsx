import LogoWithText from "@/components/common/logoWithText";

import Menu from "./menu";

export default async function Header() {
  return (
    <header className="fixed z-50 h-20 w-screen border-b border-[#001024] bg-[#001024] backdrop-blur-[60px]">
      <div className="container flex h-20 flex-wrap items-center justify-between">
        <LogoWithText size={32} className="text-white" />
        <Menu />
      </div>
    </header>
  );
}
