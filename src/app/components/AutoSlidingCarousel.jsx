"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const AutoSlidingCarousel = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      title: "AI-Powered Resume Screening",
      description:
        "A Streamlit app using NLP & TF-IDF to classify resumes and predict suitable roles for recruiters.",
      link: "https://github.com/shivshankar8ss/resume_screening",
      img: "/images/resume_screening.webp", // add your own image placeholder
    },
    {
      title: "Inventory Management Backend",
      description:
        "A secure REST API built in Node.js + Express.js with JWT auth, MongoDB integration, and unit testing.",
      link: "https://github.com/shivshankar8ss/inventory_management_backend",
      img: "/images/inventory.png",
    },
    {
      title: "Startup Predictive Analysis",
      description:
        "Predictive analysis on startup datasets; includes report, notebook, and demo video.",
      link: "https://github.com/shivshankar8ss/exposys_data_labs",
      img: "/images/startup.avif",
    },
    {
      title: "Signature App",
      description:
        "A lightweight web tool for digitally signing documents, built with vanilla HTML/CSS/JS.",
      link: "https://github.com/shivshankar8ss/signature_app",
      img: "/images/signature.png",
    },
    {
      title: "Iris Dataset Analysis",
      description:
        "Explored and performed operations on the classic Iris dataset using Python & Jupyter Notebook.",
      link: "https://github.com/shivshankar8ss/iris",
      img: "/images/iris.jpeg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);

  return (
    <div className="dark:bg-gray-900 text-gray-800 dark:text-white flex items-center justify-center py-12">
      <div className="max-w-4xl w-full relative">
        <h1 className="text-3xl font-bold text-center text-indigo-400 mb-6">
          Projects
        </h1>
        <div className="overflow-hidden rounded-xl shadow-lg w-full relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 p-6 bg-gray-800/80 text-white"
              >
                <a href={slide.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    width={600}
                    height={400}
                    className="w-full h-64 sm:h-80 object-cover rounded-lg cursor-pointer"
                  />
                </a>
                <h2 className="text-xl font-semibold mt-4">{slide.title}</h2>
                <p className="text-gray-300">{slide.description}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
        >
          ❯
        </button>
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-indigo-400" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoSlidingCarousel;
