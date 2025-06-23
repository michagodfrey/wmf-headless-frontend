"use client";

import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    dropdown: [
      { name: "Our Story", href: "/about" },
      { name: "Our Board & Team", href: "/about/board-and-team" },
      { name: "Partners", href: "/about/partners" },
      { name: "Gallery", href: "/about/gallery" },
    ],
  },
  {
    name: "Programs",
    href: "/programs",
    dropdown: [
      { name: "Our Programs", href: "/programs" },
      { name: "For Workplaces", href: "/programs/workplaces" },
      { name: "For Communities", href: "/programs/communities" },
      { name: "For Schools", href: "/programs/schools" },
      { name: "Workshops", href: "/programs/workshops" },
      {
        name: "Comprehensive Support",
        href: "/programs/comprehensive-support",
      },
      { name: "Peer Counseling", href: "/programs/peer-counselling" },
      { name: "Speaking Engagements", href: "/programs/speaking-engagements" },
    ],
  },
  {
    name: "Get Help",
    href: "/get-help",
    dropdown: [
      { name: "Get Help & Support", href: "/get-help" },
      { name: "Affiliated Services", href: "/get-help/affiliates" },
      { name: "Case Studies", href: "/get-help/case-studies" },
    ],
  },
  {
    name: "Get Involved",
    href: "/get-involved",
  },
  { name: "Blog", href: "/blog" },
];

const socialMedia = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/womensmentoringfoundation",
    icon: "facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/womensmentoringfoundation/",
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/womens-mentoring-foundation-ltd/%20",
    icon: "linkedin",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@womensmentoringfoundation",
    icon: "youtube",
  },
];

export default function Header() {
  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "facebook":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      case "instagram":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        );
      case "youtube":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-[#6B7280] hover:text-[#A5375C] transition-colors"
                  aria-label={social.name}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>

            {/* Login and Search */}
            <div className="flex items-center space-x-4">
              <Link
                href="/members/login"
                className="text-sm text-[#6B7280] hover:text-[#A5375C] transition-colors"
              >
                Login
              </Link>
              <button
                className="text-[#6B7280] hover:text-[#A5375C] transition-colors"
                aria-label="Search"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              {/* WMF Logo */}
              <img src="/logo.png" alt="WMF Logo" className="h-12 w-auto" />
              <div className="flex flex-col">
                <span className="text-lg text-[#6B7280] -mt-1">
                  Women&apos;s Mentoring Foundation
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className="text-[#374151] hover:text-[#A5375C] transition-colors font-medium"
                      >
                        {item.name}
                      </Link>
                      <svg
                        className="ml-1 h-4 w-4 text-[#6B7280] transition-colors"
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
                    </div>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-[#E5E7EB] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-sm text-[#374151] hover:bg-[#F9FAFB] hover:text-[#A5375C] transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-[#374151] hover:text-[#A5375C] transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/donate"
              className="bg-[#A5375C] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#C84862] transition-colors"
            >
              Donate
            </Link>
            <Link
              href="/contact"
              className="bg-white text-[#A5375C] border-2 border-[#A5375C] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#DE5762]/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2 text-[#6B7280] hover:text-[#A5375C] transition-colors">
            <span className="sr-only">Open menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation (Hidden by default) */}
      <div className="lg:hidden">{/* Mobile menu content would go here */}</div>
    </header>
  );
}
