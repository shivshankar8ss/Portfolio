import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, closeMenu }) => {
  return (
    <ul className="flex flex-col gap-6 py-8 items-center bg-gradient-to-b from-gray-900 to-black text-white w-full h-screen fixed top-0 left-0 z-50 animate-fadeIn">
      {links.map((link, index) => (
        <li
          key={index}
          onClick={closeMenu} // Close menu on click
          className="text-lg sm:text-xl font-semibold tracking-wide cursor-pointer transform hover:scale-110 hover:text-purple-400 transition duration-300"
        >
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
