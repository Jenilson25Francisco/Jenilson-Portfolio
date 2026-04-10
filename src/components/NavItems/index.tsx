import { HomeIcon } from "lucide-react";
import Link from "next/link";

export function NavItems() {
  return (
    <nav className="flex items-center gap-2 md:gap-8">
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
  );
}
