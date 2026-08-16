"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const links = [
  { name: "HOME", href: "/" },
  { name: "WORK", href: "/work" },
  { name: "SKILLS", href: "/skills" },
  { name: "CONTACT", href: "/contacts" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`bg-[#141414] border-b border-gray-800 relative ${inter.className}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-5">
        {/* Logo */}
        <Link
  href="/"
  className="flex items-center gap-4 group"
  aria-label="Go to homepage"
>
  <Image
    src="/logo.png"
    alt="Logo"
    width={28}
    height={24}
    className="w-6 h-5 md:w-7 md:h-6 transition-transform duration-300 group-hover:scale-105"
  />

  <span className="w-px h-5 bg-gray-500"></span>

  <span className="text-white text-xs md:text-sm tracking-[0.2em] font-semibold transition-colors duration-300 group-hover:text-[#a78bfa]">
    PORTFOLIO
  </span>
</Link>

        {/* Liens desktop */}
        <div className="hidden md:flex gap-10">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-[0.15em] font-medium transition-colors ${
                  isActive ? "text-[#a78bfa]" : "text-white hover:text-[#a78bfa]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Bouton burger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-6"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span
            className={`h-0.5 bg-white transition-transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 bg-white transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 bg-white transition-transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-6 px-6 pb-6 bg-[#141414] border-t border-gray-800 pt-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm tracking-[0.15em] font-medium ${
                  isActive ? "text-[#a78bfa]" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}