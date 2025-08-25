"use client";
import React from "react";

const upcomingProjects = [
  {
    id: 1,
    title: "Brain Tumor Detection",
    description:
      "Developing a deep learning model to detect and classify brain tumors using MRI scans. The project aims to assist doctors with faster diagnosis.",
    status: "In Progress",
    color: "bg-yellow-600",
  },
  {
    id: 2,
    title: "PDF Reader",
    description:
      "An intelligent PDF reader with advanced features such as text extraction, annotation, and AI-powered content summarization. Designed for hospitals and professionals, it includes explainable AI integration and ready-to-deploy APIs for seamless workflow automation.",
    status: "In Progress",
    color: "bg-purple-600",
  },
  {
    id: 3,
    title: "URL Shortener",
    description:
      "A full-stack project to shorten long URLs with analytics (clicks, locations, device type). Includes custom alias support.",
    status: "In Progress",
    color: "bg-blue-600",
  },
];

export default function UpcomingProjects() {
  return (
    <section id="upcoming" className="w-full py-20 bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          🚀 Upcoming Projects
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#181818] rounded-xl p-6 shadow-lg border border-gray-800 
                         hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${project.color} text-white`}
              >
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
