"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";

import { Menu, X, ArrowUpRight, Search, ChevronDown, Flag } from "lucide-react";
import SearchModal from "./SearchModal";

// NAVIGATION LINKS
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Destinations", href: "/destinations", dropdown: true },
  { name: "Blogs", href: "/blogs" },
  { name: "IELTS Test Preparation", href: "/ielts-test-preparation" },
  { name: "Become a Partner", href: "/become-a-partner" },
  { name: "Contact Us", href: "/contact" },
];

// COUNTRIES
const countries = [
  { name: "United States", code: "us" },
  { name: "United Kingdom", code: "gb" },
  { name: "Canada", code: "ca" },
  { name: "Australia", code: "au" },
  { name: "Germany", code: "de" },
  { name: "Japan", code: "jp" },
  { name: "Brazil", code: "br" },
  { name: "South Africa", code: "za" },
];

// MOBILE QUICK LINKS
const mobileLinks = [
  { name: "Search", href: "/search", icon: Search },
  { name: "Destinations", href: "/destinations", icon: Flag },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  // CLOSE MOBILE MENU
  const closeMenu = () => {
    setIsOpen(false);
    setDropDownOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed top-0 left-0 z-50 w-full border-b border-gray-100 bg-white px-3 pt-3 shadow-md sm:px-6 sm:pt-4"
    >
      {/* MAIN NAVBAR */}
      <nav className="mx-auto flex max-w-8xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-2.5"
        >
          <img
            src="/Logo/OrbisLogo.webp"
            alt="Orbis Logo"
            className="h-15 w-auto object-contain mix-blend-multiply lg:h-20"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.dropdown && setDropDownOpen(true)}
              onMouseLeave={() => link.dropdown && setDropDownOpen(false)}
            >
              <Link
                href={link.href}
                onClick={closeMenu}
                className={`group relative flex items-center gap-1 py-3 text-[14px] font-bold tracking-wide transition-colors duration-300 ${
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href))
                    ? "text-[#0265AA]"
                    : "text-black/85"
                }`}
              >
                {link.name}
                {link.dropdown && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      dropDownOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
                {/* ACTIVE HOVER LINE */}
                <span
                  className={`absolute bottom-1 left-0 h-[2px] rounded-full bg-[#0265AA] transition-all duration-300 ${
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href + "/"))
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />{" "}
              </Link>

              {/* DESKTOP DESTINATIONS DROPDOWN */}
              {link.dropdown && (
                <AnimatePresence>
                  {dropDownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 12, scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full grid w-[480px] grid-cols-2 gap-3 overflow-hidden rounded-xl border border-gray-100 bg-white p-3 shadow-2xl"
                    >
                      {countries.map((country) => (
                        <Link
                          key={country.code}
                          href={`/destinations/${country.code}`}
                          onClick={closeMenu}
                          className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-black/75 transition hover:bg-blue-200"
                        >
                          <img
                            src={`https://flagcdn.com/w40/${country.code}.png`}
                            alt={`${country.name} flag`}
                            width={28}
                            height={20}
                            className="h-5 w-7 rounded-sm object-cover shadow-sm"
                          />

                          {country.name}

                          <ArrowUpRight
                            size={14}
                            className="ml-auto opacity-40"
                          />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-5 lg:flex">
          <button
            aria-label="Search"
            onClick={() => setIsSearchOpen(true)}
            className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#0265AA]/10 bg-[#F6F8FB] px-5 py-3 text-[14px] font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0265AA]/50 hover:bg-blue-100"
          >
            <Search size={19} />
            <span>Search</span>
          </button>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-xl bg-[#0265AA] px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-200 hover:text-[#0265AA]"
          >
            Start Your Journey
          </Link>
        </div>

        {/* MOBILE MENU BUTTONS */}
        <div className="flex gap-2 lg:hidden">
          <button
            type="button"
            aria-label="Search"
            onClick={() => setIsSearchOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 text-black transition hover:bg-gray-100"
          >
            <Search size={19} />
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-black transition hover:bg-gray-100"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={23} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={23} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 -z-10 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="absolute left-3 right-3 top-[76px] max-h-[calc(100vh-100px)] overflow-y-auto rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl sm:left-6 sm:right-6 lg:hidden"
            >
              {/* MOBILE NAVIGATION */}
              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.07,
                      duration: 0.3,
                    }}
                  >
                    {link.dropdown ? (
                      <div className="border-b border-black/10">
                        {/* DESTINATIONS BUTTON */}
                        <button
                          onClick={() =>
                            setMobileDropdownOpen(!mobileDropdownOpen)
                          }
                          className={`flex items-center justify-between border-b border-black/10 py-4 text-base font-medium transition-colors hover:text-[#0265AA] ${
                            pathname === link.href ||
                            (link.href !== "/" &&
                              pathname.startsWith(link.href + "/"))
                              ? "text-[#0265AA]"
                              : "text-black/65"
                          }`}
                        >
                          {link.name}

                          <motion.div
                            animate={{
                              rotate: mobileDropdownOpen ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown size={19} />
                          </motion.div>
                        </button>

                        {/* MOBILE COUNTRIES */}
                        <AnimatePresence>
                          {mobileDropdownOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="grid grid-cols-2 gap-2 pb-4">
                                {countries.map((country) => (
                                  <Link
                                    key={country.code}
                                    href={`/destinations/${country.code}`}
                                    onClick={closeMenu}
                                    className="flex items-center gap-2 rounded-lg bg-gray-50 px-2 py-3 text-xs font-medium text-black/70 transition hover:bg-[#dcfcc6]"
                                  >
                                    <img
                                      src={`https://flagcdn.com/w40/${country.code}.png`}
                                      alt={`${country.name} flag`}
                                      className="h-4 w-6 rounded-sm object-cover"
                                    />

                                    {country.name}

                                    <ArrowUpRight
                                      size={13}
                                      className="ml-auto shrink-0 opacity-40"
                                    />
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="flex items-center justify-between border-b border-black/10 py-4 text-base font-medium text-black/65 transition-colors hover:text-black"
                      >
                        {link.name}
                        <ArrowUpRight size={17} />
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* MOBILE QUICK LINKS */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {mobileLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center gap-2 rounded-xl border border-black/10 bg-gray-50 p-3 text-xs text-black/65 transition hover:bg-[#dcfcc6]"
                    >
                      <Icon size={16} />
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* MOBILE FOOTER */}
              <p className="mt-6 text-center text-[10px] tracking-[0.2em] text-black/40">
                Build Your Future with OrbisNexa Consultancy
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
