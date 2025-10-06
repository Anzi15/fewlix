"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/projects" },
  { name: "Career", href: "/career" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent px-4 sm:px-6 lg:px-8 py-3">
      <div className="mx-auto max-w-7xl">
        <div className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border border-gray-200 rounded-full shadow-sm">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex-shrink-0"
            >
<img
  src=" Vertical Full Color logo.svg"
  alt="Fewlix"
  className="object-contain cursor-pointer max-h-10 w-auto"
  width={120}
  height={40}
/>

            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                    isActive(item.href)
                      ? "bg-green-400 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Contact Button */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4 group">
              <Link
                href="/contact"
                className="rounded-full border-2 border-gray-300 text-gray-700 bg-transparent px-4 py-2 text-sm lg:text-base transition-all hover:border-green-400 hover:text-green-500"
              >
                GET STARTED
              </Link>
              <button
                className="rounded-full bg-green-400 hover:bg-green-500 text-black p-3 lg:p-4 rotate-[-45deg] group-hover:rotate-0 transition-transform hover:scale-105 hover:shadow-lg"
              >
                <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5 font-extrabold" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-800" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 max-w-sm bg-white shadow-2xl border-l border-gray-200 transform transition-transform duration-500 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <span className="text-lg font-semibold text-gray-800">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        <nav className="flex flex-col space-y-3 p-6">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 text-base font-medium rounded-full transition-colors ${
                isActive(item.href)
                  ? "bg-green-400 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Contact Section */}
          <div className="pt-6 border-t flex items-center justify-between gap-3">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex-1 rounded-full border-2 border-gray-300 text-gray-700 bg-transparent px-4 py-2 text-center text-base transition-all hover:border-green-400 hover:text-green-500"
            >
             GET STARTED
            </Link>
            <button className="rounded-full bg-green-400 hover:bg-green-500 hover:scale-105 hover:shadow-lg text-black p-3 rotate-[-45deg] transition-transform">
              <ArrowRight className="h-5 w-5 font-extrabold" />
            </button>
          </div>
        </nav>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
        />
      )}
    </header>
  );
}
