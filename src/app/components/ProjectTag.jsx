import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const baseStyles =
    "rounded-full border-2 px-6 py-2 text-sm sm:text-base md:text-lg font-medium transition-all duration-300";
  const selectedStyles =
    "text-white border-primary-500 bg-primary-500 shadow-md hover:bg-primary-600";
  const unselectedStyles =
    "text-[#ADB7BE] border-slate-600 hover:border-white hover:text-white";

  return (
    <button
      className={`${baseStyles} ${
        isSelected ? selectedStyles : unselectedStyles
      }`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
