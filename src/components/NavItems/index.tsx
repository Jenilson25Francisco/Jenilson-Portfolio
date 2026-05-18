"use client";

import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

export function NavItems() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleNav() {
    setOpenMenu(!openMenu);
  }

  function handelNavigateToContact() {
    setOpenMenu(false);
    document.getElementById("contact")?.scrollTo({});
  }

  return (
    <>
      <nav className="hidden sm:flex items-center sm:gap-4">
        <Link href="/" className="font-semibold text-sm">
          Home
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
        <div className="flex w-full items-center relative justify-end">
          <Button
            onClick={handleNav}
            variant="secondary"
            className="cursor-pointer absolute right-2 top-2"
          >
            <X className="size-4" />
          </Button>
        </div>

        <nav className="flex flex-col gap-4 mt-12 p-5">
          <Link href="/" className="font-semibold text-sm">
            {/** biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <li onClick={() => setOpenMenu(false)} className="cursor-pointer">
              Home
            </li>
          </Link>
          <Link href="/about" className="font-semibold text-sm cursor-pointer">
            Sobre
          </Link>
          <Link
            href="/projects"
            className="font-semibold text-sm cursor-pointer"
          >
            Projetos
          </Link>
        </nav>
      </div>
    </>
  );
}
