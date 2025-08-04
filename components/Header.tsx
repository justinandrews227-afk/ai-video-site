import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-white/10">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={28} height={28} />
          <span className="font-semibold tracking-wide">AI Video Studio</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/(site)/work">Work</Link>
          <Link href="/(site)/about">About</Link>
          <Link href="/(site)/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
