"use client";
import { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
} from "react-icons/si";

export default function SkillsCircle() {
  const categories = [
    {
      name: "Software Development",
      skills: [
        { name: "HTML", percentage: 97, color: "#FF6464", icon: <FaHtml5 /> },
        { name: "CSS", percentage: 95, color: "#2965f1", icon: <FaCss3Alt /> },
        {
          name: "Tailwind CSS",
          percentage: 90,
          color: "#38BDF8",
          icon: <SiTailwindcss />,
        },
        { name: "React", percentage: 85, color: "#61DBFB", icon: <FaReact /> },
        {
          name: "JavaScript",
          percentage: 92,
          color: "#F7DF1E",
          icon: <SiJavascript />,
        },
        {
          name: "NodeJs",
          percentage: 95,
          color: "#3C873A",
          icon: <FaNodeJs />,
        },
        {
          name: "ExpressJs",
          percentage: 85,
          color: "#888888",
          icon: <SiExpress />,
        },
        {
          name: "MongoDb",
          percentage: 89,
          color: "#4DB33D",
          icon: <SiMongodb />,
        },
        { name: "SQL", percentage: 80, color: "#336791", icon: <FaDatabase /> },
      ],
    },
    {
      name: "AI / ML",
      skills: [
        {
          name: "Python",
          percentage: 95,
          color: "#3776AB",
          icon: <FaPython />,
        },
        {
          name: "TensorFlow",
          percentage: 85,
          color: "#FF6F00",
          icon: <SiTensorflow />,
        },
        {
          name: "PyTorch",
          percentage: 80,
          color: "#EE4C2C",
          icon: <SiPytorch />,
        },
        {
          name: "Scikit-Learn",
          percentage: 88,
          color: "#F7931E",
          icon: <SiScikitlearn />,
        },
        {
          name: "Data Analysis",
          percentage: 90,
          color: "#4CAF50",
          icon: <FaDatabase />,
        },
        {
          name: "Algebra",
          percentage: 85,
          color: "#A855F7",
          icon: <FaPython />,
        },
        {
          name: "Statistics",
          percentage: 88,
          color: "#C084FC",
          icon: <FaDatabase />,
        },
      ],
    },
  ];

  const [animated, setAnimated] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Software Development");

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <section id="skill" className="py-20 bg-[#121212] text-white">
      <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>

      {/* Category Buttons */}
      <div className="flex justify-center gap-6 mb-12">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat.name)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeCategory === cat.name
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-gray-400"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-items-center">
        {categories
          .find((cat) => cat.name === activeCategory)
          .skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <svg className="absolute w-28 h-28 -rotate-90">
                  {/* Background Circle */}
                  <circle
                    cx="50%"
                    cy="50%"
                    r="40%"
                    stroke="#2d2d2d"
                    strokeWidth="8"
                    fill="none"
                  />
                  {/* Progress Circle */}
                  <circle
                    cx="50%"
                    cy="50%"
                    r="40%"
                    stroke={skill.color}
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={
                      animated
                        ? 2 * Math.PI * 40 * (1 - skill.percentage / 100)
                        : 2 * Math.PI * 40
                    }
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 1.5s ease-in-out" }}
                  />
                </svg>
                {/* Icon in center */}
                <div className="text-4xl" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
              </div>
              <span className="mt-3 font-semibold">{skill.name}</span>
              <span className="text-sm text-gray-400">{skill.percentage}%</span>
            </div>
          ))}
      </div>
    </section>
  );
}
