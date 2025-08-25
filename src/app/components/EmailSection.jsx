"use client";
import Link from "next/link";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const EmailSection = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (event) => {
    event.preventDefault();
    if (!email || !subject || !message) {
      toast.error("Please fill all fields");
      return;
    }
    const toastId = toast.loading("Sending Email...");
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sender: email, subject, text: message }),
      });

      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      toast.success("Message Sent Successfully ✅", { id: toastId });
      setEmail("");
      setMessage("");
      setSubject("");
    } catch (error) {
      toast.error("Failed to send ❌", { id: toastId });
      console.error("Request failed:", error.message);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 py-16 gap-8 relative px-6 lg:px-16"
    >
      {/* Background Glow */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 to-transparent rounded-full h-80 w-80 z-0 blur-3xl absolute top-2/3 -left-20 transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Contact Info */}
      <div className="z-10">
        <h5 className="text-2xl font-bold text-white mb-4">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-6 max-w-md">
          I&apos;m always open to discussing new opportunities, collaborations,
          or just tech talk. Drop me a message and I&apos;ll get back to you!
        </p>
        <div className="flex flex-row gap-6 text-white text-3xl">
          <Link href="https://github.com/shivshankar8ss" target="_blank">
            <FaGithub className="hover:text-indigo-400 transition cursor-pointer" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/shivshankar-kumar-72811b247/"
            target="_blank"
          >
            <FaLinkedin className="hover:text-indigo-400 transition cursor-pointer" />
          </Link>
          <Link href="https://wa.me/919053823108" target="_blank">
            <FaWhatsapp className="hover:text-green-400 transition cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* Contact Form */}
      <div className="z-10">
        <form className="flex flex-col" onSubmit={handleSendMessage}>
          <label
            htmlFor="email"
            className="text-white block mb-2 text-sm font-medium"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 mb-4 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label
            htmlFor="subject"
            className="text-white block mb-2 text-sm font-medium"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 mb-4 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            placeholder="Enter subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <label
            htmlFor="message"
            className="text-white block mb-2 text-sm font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3 mb-6 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-5 rounded-lg w-full transition shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
      <Toaster />
    </section>
  );
};

export default EmailSection;
