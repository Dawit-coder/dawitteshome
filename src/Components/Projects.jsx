import React, { useRef, useLayoutEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const thirdRef = useRef(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();

      // Left project animation
      gsap.from(leftRef.current, {
        x: -150,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          once: true,
        },
      });

      // Right project animation
      gsap.from(rightRef.current, {
        x: 150,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          once: true,
        },
      });

      // Third project animation (from bottom)
      gsap.from(thirdRef.current, {
        y: 150,
        autoAlpha: 0,
        duration: 2.2,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
          once: true,
        },
      });
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className="relative text-white py-20 min-h-screen">
      <h2 className="text-5xl font-bold text-center mb-12">Projects</h2>

      {/* Top two projects */}
      <div className="flex flex-col md:flex-row gap-10 px-6 max-w-6xl justify-center mx-auto">
        {/* Left Project */}
        <div
          ref={leftRef}
          className="relative group w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src="/images/velora.png"
            alt="Velora"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition duration-300">
            <a
              href="https://velora.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white text-black rounded-full hover:scale-110 transition"
            >
              <FaExternalLinkAlt size={24} />
            </a>
            <a
              href="https://github.com/Dawit-coder/Velora"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white text-black rounded-full hover:scale-110 transition"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Right Project */}
        <div
          ref={rightRef}
          className="relative group w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src="/images/byteflow.png"
            alt="Byteflow"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition duration-300">
            <a
              href="https://byteflow.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white text-black rounded-full hover:scale-110 transition"
            >
              <FaExternalLinkAlt size={24} />
            </a>
            <a
              href="https://github.com/Dawit-coder/Byteflow"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white text-black rounded-full hover:scale-110 transition"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Third Project */}
      <div
        ref={thirdRef}
        className="relative group w-full max-w-3xl mx-auto mt-10 rounded-xl overflow-hidden shadow-lg"
      >
        <img
          src="/images/flashart.png"
          alt="FlashArt"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition duration-300">
          <a
            href="https://flashart.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white text-black rounded-full hover:scale-110 transition"
          >
            <FaExternalLinkAlt size={24} />
          </a>
          <a
            href="https://github.com/Dawit-coder/FlashArt"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white text-black rounded-full hover:scale-110 transition"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;


