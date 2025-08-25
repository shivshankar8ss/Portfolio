"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Skill", path: "#skill" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavClick = () => {
    setNavbarOpen(false); // Close the menu when a link is clicked
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-gray-800 shadow-md">
        <div className="flex container max-w-7xl mx-auto flex-wrap items-center justify-between text-white px-6 py-4">
          {/* Brand / Logo */}
          <Link
            href="/"
            onClick={handleNavClick}
            className="text-xl font-extrabold bg-gradient-to-r from-teal-400  to-orange-400 bg-clip-text text-transparent"
          >
            Shivshankar
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-gray-500 text-gray-300 hover:text-white hover:border-white transition"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-gray-500 text-gray-300 hover:text-white hover:border-white transition"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-8 text-lg">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    href={link.path}
                    title={link.title}
                    onClick={handleNavClick}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {navbarOpen && (
          <MenuOverlay links={navLinks} closeMenu={handleNavClick} />
        )}
      </nav>
    </>
  );
};

export default Navbar;
