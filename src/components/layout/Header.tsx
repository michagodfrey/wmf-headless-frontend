"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Programs",
    href: "/programs",
    dropdown: [
      { name: "For Workplaces", href: "/programs/workplaces" },
      { name: "For Communities", href: "/programs/communities" },
      { name: "For Schools", href: "/programs/schools" },
      { name: "Workshops", href: "/programs/workshops" },
      {
        name: "Comprehensive Support",
        href: "/programs/comprehensive-support",
      },
      { name: "Peer Counseling", href: "/programs/peer-counseling" },
      { name: "Speaking Engagements", href: "/programs/speaking-engagements" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900">
            WMF
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {item.name}
                      </Link>
                      <button
                        className="ml-1 text-gray-600 hover:text-gray-900 transition-colors p-1"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.name ? null : item.name
                          )
                        }
                        aria-label={`Toggle ${item.name} dropdown menu`}
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Dropdown Menu */}
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                        <div className="py-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <span className="sr-only">Open menu</span>
            {/* Add hamburger icon here */}
          </button>
        </div>
      </nav>
    </header>
  );
}
