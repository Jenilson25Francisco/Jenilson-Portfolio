"use client";

import { HomeIcon, MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

export function NavItems() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleNav() {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <nav className="hidden sm:flex items-center gap-2 sm:gap-8">
        <Link href="/" className="flex items-center gap-1 justify-center">
          <HomeIcon />
          <span className="font-semibold text-sm">Home</span>
        </Link>
        <Link href="/about" className="font-semibold text-sm">
          Sobre
        </Link>
        <Link href="/projects" className="font-semibold text-sm">
          Projetos
        </Link>
      </nav>
      <Button
        onClick={handleNav}
        variant="secondary"
        className="sm:hidden cursor-pointer"
      >
        <MenuIcon className="size-4" />
      </Button>
      <div
        className={
          openMenu
            ? "fixed left-0 top-0 w-[65%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end relative">
          <Button
            onClick={handleNav}
            variant="secondary"
            className="cursor-pointer absolute top-2 right-2"
          >
            <X className="size-4" />
          </Button>
        </div>
      </div>
    </>
  );
}
