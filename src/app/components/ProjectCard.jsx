import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="mx-[5px] transform transition duration-300 hover:scale-105">
      {/* Image section */}
      <div
        className="h-52 mt-[50px] md:h-72 rounded-t-xl relative group shadow-lg overflow-hidden"
        style={{
          background: `url(${imgUrl}) center / cover no-repeat`,
        }}
      >
        {/* Hover overlay */}
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 mr-3 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center transition-colors group/link"
          >
            <CodeBracketIcon className="h-8 w-8 text-[#ADB7BE] group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center transition-colors group/link"
          >
            <EyeIcon className="h-8 w-8 text-[#ADB7BE] group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      {/* Content section */}
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-5 shadow-lg">
        <h5 className="text-xl font-semibold mb-3 group-hover:text-primary-400 transition">
          {title}
        </h5>
        <p className="text-[#ADB7BE] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
