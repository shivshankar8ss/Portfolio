"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaClock, FaUserTie } from "react-icons/fa";

export default function Whyus() {
  const features = [
    {
      icon: <FaLaptopCode />,
      title: "Latest Technology",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <FaClock />,
      title: "Time Efficiency",
      color: "from-green-400 to-green-600",
    },
    {
      icon: <FaUserTie />,
      title: "Expert Developer",
      color: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <section className="text-gray-200 mt-24 px-6">
      <h2 className="flex justify-center mb-14 text-4xl font-extrabold text-white sm:text-5xl">
        Why Me?
      </h2>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#1E1E1E] rounded-2xl shadow-lg p-8 text-center border border-gray-700 hover:border-gray-500"
          >
            <div
              className={`w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r ${feature.color} text-white text-4xl mb-6`}
            >
              {feature.icon}
            </div>
            <h3 className="text-2xl font-semibold">{feature.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
