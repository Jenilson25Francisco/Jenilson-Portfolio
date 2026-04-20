import Image from "next/image";
import Link from "next/link";
import { NavItems } from "../NavItems";

export function Header() {
  return (
    <header className="w-full z-10 h-24 shadow-xl flex items-center justify-between px-5 md:max-w-[1200px] mx-auto">
      <Link href="/">
        <Image
          src="/JenilsonFrancisco.png"
          alt="JenilsonFrancisco"
          width={175}
          height={44}
        />
      </Link>
      <NavItems />
    </header>
  );
}
