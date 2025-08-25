"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title, onClick }) => {
  const pathname = usePathname(); // get current route

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative block py-2 px-3 sm:text-lg md:text-base tracking-wide transition-colors duration-300 
        ${isActive ? "text-purple-400" : "text-gray-400"} 
        hover:text-white`}
    >
      {title}
      {/* Animated underline */}
      <span
        className={`absolute left-0 bottom-0 h-[2px] w-full transform scale-x-0 bg-gradient-to-r from-purple-400 to-pink-500 transition-transform duration-300 origin-left 
        ${isActive ? "scale-x-100" : "hover:scale-x-100"}`}
      />
    </Link>
  );
};

export default NavLink;
