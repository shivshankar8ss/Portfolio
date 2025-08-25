"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = [];
    const numParticles = 80;

    class Particle {
      constructor(x, y, radius, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.angle = Math.random() * Math.PI * 2;
      }
      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        if (this.x < 0 || this.x > canvas.width)
          this.angle = Math.PI - this.angle;
        if (this.y < 0 || this.y > canvas.height) this.angle = -this.angle;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        ctx.fill();
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(
        new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 3 + 1,
          Math.random() * 0.5 + 0.2
        )
      );
    }

    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dist = Math.hypot(
            particles[a].x - particles[b].x,
            particles[a].y - particles[b].y
          );
          if (dist < 130) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 130})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Particle Background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left max-w-xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            <span className="text-white">Hi, I am </span>
            <span className="bg-gradient-to-r from-teal-400 via-lime-400 to-orange-400 bg-clip-text text-transparent">
              Shivshankar
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl mb-6 text-gray-200 font-medium">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer 💻",
                2000,
                "AI/ML Engineer🤖",
                2000,
                "Automation Engineer ⚙️",
                2000,
                "Creative Problem Solver 🔥",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-400 via-lime-400 to-orange-400 hover:opacity-90 text-white font-semibold shadow-lg transform hover:scale-105 transition"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1ow7JQv9JaJscFzbCbj8_W8ztItdYLhYV/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-indigo-400 text-indigo-300 hover:bg-indigo-600 hover:text-white font-semibold shadow-lg transform hover:scale-105 transition"
            >
              Download CV
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="rounded-full p-1 bg-gradient-to-r from-teal-400 via-lime-400 to-orange-400 shadow-2xl">
            <Image
              src="/images/shiv.png"
              alt="Shivshankar Kumar"
              width={350}
              height={350}
              className="rounded-full border-4 border-gray-900"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
