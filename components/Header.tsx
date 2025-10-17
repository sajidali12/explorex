import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo-t.png"
              alt="ExploreX Logo"
              width={280}
              height={84}
              priority
              className="h-16 md:h-20 w-auto cursor-pointer"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-lg text-gray-700 hover:text-[#1565C0] font-medium transition-colors">Home</Link>
            <Link href="/services" className="text-lg text-gray-700 hover:text-[#1565C0] font-medium transition-colors">Services</Link>
            <Link href="/about" className="text-lg text-gray-700 hover:text-[#1565C0] font-medium transition-colors">About</Link>
            <Link href="/contact" className="text-lg bg-[#00E600] hover:bg-[#4AFF4A] text-white px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg">Contact Us</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
