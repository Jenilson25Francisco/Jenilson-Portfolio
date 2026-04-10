import Link from "next/link";
import { NavItems } from "../NavItems";
import Image from "next/image";

export function Header() {
  return (
    <header className="w-full z-10 h-24 flex items-center justify-between px-5 md:max-w-[1200px] mx-auto">
      <Link href="/#">
        <p className="font-bold text-4xl">
          <Image
            src="/JenilsonFrancisco.png"
            alt="Jenilson Francisco"
            width={175}
            height={44}
          />
        </p>
      </Link>
      <NavItems />
    </header>
  );
}
