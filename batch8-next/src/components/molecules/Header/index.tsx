"use client";
import Logo from "@components/atoms/Logo";
import Menu from "@components/atoms/Menu";
import Theme from "@components/atoms/Theme";
import SidebarIc from "@components/atoms/SidebarIc";
import { usePathname } from "next/navigation";
import Logout from "@components/atoms/Logout";
import Sidebar from "../Sidebar";

const withoutMenu = /^\/login|register$/i;

export default function Header() {
  const pathName = usePathname();
  // if (pathName === '/login') return null
  if (withoutMenu.test(pathName)) return null;

  return (
    <header className="flex flex-row custom-shadow">
      {/* sidebar icon */}
      {/* <Sidebar /> */}

      {/* logo */}
      <Logo />

      {/* theme */}
      <Theme />

      {/* menu */}
      <Menu />
      
    </header>
  );
}
