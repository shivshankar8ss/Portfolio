"use client";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footericon = () => {
  return (
    <div className="flex gap-6 text-2xl">
      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/in/shivshankar-kumar-72811b247/"
        target="_blank"
      >
        <FaLinkedin className="hover:text-indigo-400 transition cursor-pointer" />
      </Link>

      {/* Twitter */}
      <Link href="https://twitter.com/" target="_blank">
        <FaTwitter className="hover:text-sky-400 transition cursor-pointer" />
      </Link>

      {/* Instagram */}
      <Link href="https://www.instagram.com/shivshankar8w/" target="_blank">
        <FaInstagram className="hover:text-pink-500 transition cursor-pointer" />
      </Link>
    </div>
  );
};

export default Footericon;
