import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className="relative bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        {/* Contact Title */}
        <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>

        {/* Social Icons */}
        <div className="flex gap-6 mb-8">
          <a
            href="https://www.instagram.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors duration-300"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://github.com/Dawit-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/dawitteshome/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors duration-300"
          >
            <FaLinkedin size={30} />
          </a>
        </div>

        {/* Optional Email */}
        <a
          href="mailto:your_email@example.com"
          className="mb-8 text-lg hover:text-amber-400 transition-colors duration-300"
        >
          dawit6595@example.com
        </a>

        {/* Footer Note */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Dawit Teshome. Built with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Contact;
