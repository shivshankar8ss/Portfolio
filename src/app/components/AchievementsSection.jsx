"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  FaProjectDiagram,
  FaLaptopCode,
  FaCertificate,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

// Simplified AchievementItem component without counter
const AchievementItem = ({ achievement }) => {
  return (
    <div className="bg-gray-800/90 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-start h-full transition-transform duration-300 hover:scale-105">
      {achievement.icon}
      <p className="text-[#ADB7BE] text-lg mt-4 font-semibold text-center">
        {achievement.metric}
      </p>
      <p className="text-gray-400 text-sm text-center mt-4">
        {achievement.description}
      </p>
    </div>
  );
};

const achievementsList = [
  {
    metric: "JEE ADVANCED 2022 Qualified",
    description:
      "Successfully qualified the prestigious Joint Entrance Examination (JEE) Advanced 2022. " +
      "Demonstrated strong problem-solving skills and deep understanding of Physics, Chemistry, and Math.",
    icon: <FaGraduationCap className="text-indigo-400 h-10 w-10 mb-2" />,
  },
  {
    metric: "McKinsey Forward Program",
    description:
      "Completed the McKinsey Forward Program to enhance business acumen and analytical thinking. " +
      "Learned real-world case studies and frameworks to approach complex problems effectively.",
    icon: <FaCertificate className="text-indigo-400 h-10 w-10 mb-2" />,
  },
  {
    metric: "AI/ML Infosys Internship",
    description:
      "Worked as an AI/ML intern at Infosys Springboard, developing predictive machine learning models. " +
      "Implemented data preprocessing, model training, and evaluation for practical AI applications.",
    icon: <FaBriefcase className="text-indigo-400 h-10 w-10 mb-2" />,
  },
  {
    metric: "IIT Guwahati Internship",
    description:
      "Completed a research internship at IIT Guwahati, focusing on AI/ML and automation projects. " +
      "Conducted experiments, analyzed datasets, and contributed to the development of intelligent systems.",
    icon: <FaBriefcase className="text-indigo-400 h-10 w-10 mb-2" />,
  },
  {
    metric: "Exposys Data Labs Internship",
    description:
      "Interned at Exposys Data Labs, working on data analytics and machine learning solutions. " +
      "Built models for real-world datasets and generated actionable insights for clients.",
    icon: <FaBriefcase className="text-indigo-400 h-10 w-10 mb-2" />,
  },
  {
    metric: "ML Certification (Coursera)",
    description:
      "Completed the Machine Learning certification on Coursera to strengthen foundational ML knowledge. " +
      "Gained hands-on experience in supervised and unsupervised learning techniques and model evaluation.",
    icon: <FaLaptopCode className="text-indigo-400 h-10 w-10 mb-2" />,
  },
];

const AchievementsSection = () => {
  return (
    <section
      id="achievements"
      className="py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-r from-gray-900 via-black to-gray-900"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-indigo-400 mb-12">
        Achievements
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="w-full max-w-6xl"
      >
        {achievementsList.map((achievement, index) => (
          <SwiperSlide key={index}>
            <AchievementItem achievement={achievement} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AchievementsSection;
