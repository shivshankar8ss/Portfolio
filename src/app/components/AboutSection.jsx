"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 space-y-1 text-gray-300 text-sm sm:text-base">
        <li>HTML5, CSS3, TailwindCSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js, Express.js</li>
        <li>MongoDB, MySQL</li>
        <li>Python (NumPy, Pandas, ML,DL,LLM)</li>
        <li>Arduino & IoT (sensors, automation)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 space-y-1 text-gray-300 text-sm sm:text-base">
        <li>
          <strong>B.Tech in Mechatronics & Automation Engineering</strong>
        </li>
        <li>Indian Institute of Information Technology, Bhagalpur (IIIT BH)</li>
        <li>Batch: 2022 – 2026</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4 space-y-1 text-gray-300 text-sm sm:text-base">
        <li>Infosys Springboard Internship – Machine Learning</li>
        <li>Coursera (Machine Learning, Deep Learning Specializations)</li>
        <li>Exposys Data Labs: Internship AI/ML</li>
        <li>Projects on Web Development & AI/ML</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-12 sm:py-16 px-4 sm:px-8 lg:px-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            className="rounded-2xl shadow-lg shadow-indigo-800/40 w-64 sm:w-80 md:w-[350px] lg:w-[420px] xl:w-[450px] h-auto"
            src="/images/shiv.png"
            width={450}
            height={450}
            alt="Shivshankar Kumar"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left flex flex-col h-full">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-400 mb-4">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Hi, I’m <span className="text-cyan-400">Shivshankar Kumar</span>, a
            passionate{" "}
            <strong>Mechatronics & Automation Engineering student</strong> at
            IIIT Bhagalpur. I specialize in{" "}
            <strong>Full-Stack Web Development (MERN)</strong>, and I’m deeply
            interested in <strong>Machine Learning, AI, and Automation</strong>.
            I love building innovative solutions that combine software,
            hardware, and intelligent algorithms to solve real-world problems.
            <br />
          
            <br />
            Beyond projects, I enjoy exploring emerging technologies such as{" "}
            <strong>AI-driven analytics</strong>,{" "}
            <strong>IoT-enabled systems</strong>, and{" "}
            <strong>Shape Memory Alloys (SMA) research</strong>. I am constantly
            learning, experimenting, and pushing the boundaries of what
            technology can achieve. My goal is to build impactful solutions that
            not only solve problems but also create meaningful experiences for
            users.
            <br />
            <br />
            When I’m not coding or experimenting with new tech, I love sharing
            knowledge through tutorials, mentoring juniors, and collaborating on
            open-source projects. I believe in combining creativity with
            technical expertise to drive innovation and make a difference.
          </p>

          {/* Tabs */}
          <div className="flex flex-row flex-wrap gap-3 justify-center md:justify-start mt-8">
            {TAB_DATA.map((t) => (
              <TabButton
                key={t.id}
                selectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {t.title}
              </TabButton>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6 p-4 bg-gray-800/60 rounded-xl shadow-inner text-sm sm:text-base">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
