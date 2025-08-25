import React from "react";
import Footericon from "./Footericons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-gray-700 text-white">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Email */}
        <a
          href="mailto:shivshankar.2201193me@iiitbh.ac.in"
          className="text-lg font-medium hover:text-indigo-400 transition"
        >
          shivshankar.2201193me@iiitbh.ac.in
        </a>

        {/* CopyRight */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">Shivshankar Kumar</span> |
          Building scalable apps & intelligent solutions.
        </p>

        {/* Social Icons */}
        <Footericon />
      </div>
    </footer>
  );
};

export default Footer;
