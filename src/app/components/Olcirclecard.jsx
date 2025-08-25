"use client";

import {
  FaBicycle,
  FaCar,
  FaHelicopter,
  FaPlane,
  FaRocket,
  FaBus,
} from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  { icon: <FaBicycle />, title: "Step 1" },
  { icon: <FaCar />, title: "Step 2" },
  { icon: <FaHelicopter />, title: "Step 3" },
  { icon: <FaPlane />, title: "Step 4" },
  { icon: <FaRocket />, title: "Step 5" },
  { icon: <FaBus />, title: "Step 6" },
];

const accentColors = [
  "#b8df4e",
  "#4cbccb",
  "#7197d3",
  "#ae78cb",
  "#7dc7a4",
  "#f078c2",
];

export default function OlCircleCards() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8">
      <h1 className="text-4xl font-extrabold mb-12 text-white tracking-wide">
        🚀 Our Process
      </h1>

      <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {steps.map((step, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative w-72 h-72 bg-gray-900 rounded-2xl shadow-lg flex flex-col items-start justify-center p-8 overflow-hidden group"
            style={{
              "--accent-color": accentColors[index % accentColors.length],
            }}
          >
            {/* Accent Border */}
            <div className="absolute inset-0 rounded-full border-[1rem] border-gray-800 group-hover:border-[var(--accent-color)] transition-colors duration-500"></div>

            {/* Background Number */}
            <div className="absolute inset-0 flex items-center justify-center text-[10rem] font-extrabold text-[var(--accent-color)] opacity-10 select-none">
              {index + 1}
            </div>

            {/* Icon */}
            <div className="w-16 h-16 text-4xl text-[var(--accent-color)] flex items-center justify-center mb-4">
              {step.icon}
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-white mb-2">{step.title}</h2>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              porro.
            </p>
          </motion.li>
        ))}
      </ol>

      {/* Footer Credit */}
      <div className="mt-12 text-center">
        <a
          href="https://www.freepik.com/premium-vector/vector-infographic-design-template-with-icons-8-options-steps_10571883.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          Inspired by Freepik
        </a>
      </div>
    </div>
  );
}
