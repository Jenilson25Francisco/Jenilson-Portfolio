import { HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            width={84}
            height={32}
            alt="Jenilson Francisco"
          />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-2">
          <Link href="/">
            <HomeIcon />
            <span>Home</span>
          </Link>
          <Link href="/"></Link>
        </nav>
      </div>
    </header>
  );
}
