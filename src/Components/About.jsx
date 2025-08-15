import React, { useRef } from 'react';

const ServiceCard = ({ title, description }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Mouse position inside card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Convert position into rotation values
    const rotateX = ((y / rect.height) - 0.5) * 40; // tilt up/down
    const rotateY = ((x / rect.width) - 0.5) * -40; // tilt left/right

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white backdrop-blur-lg p-6 rounded-2xl shadow-lg transition-transform duration-300"
    >
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <p className="text-black leading-relaxed">{description}</p>
    </div>
  );
};

const About = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-start gap-10 px-6 md:px-16 py-16">
      {/* Left Side */}
      <div className="md:w-1/2 space-y-10 text-white">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide mb-4 font-serif">
            Who am I?
          </h1>
          <p className="text-lg leading-relaxed text-gray-200">
            Hi, I’m Dawit, a passionate programmer and aspiring entrepreneur. I’ve been coding for over two years, exploring the world of web development and full-stack solutions. My mission is not just to write code, but to build products and services that make a difference for businesses and people.
          </p>
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4 font-serif">
            My Vision
          </h1>
          <p className="text-lg leading-relaxed text-gray-300">
            I aim to combine technology with entrepreneurship to help businesses improve their online presence and operations. I’m always ready to take on projects, contribute to growth, and create products that make a difference.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2">
        <h1 className="text-5xl font-extrabold mb-8 text-center font-serif text-white">
          Services
        </h1>

        <div className="space-y-6">
          {/* Full Stack - Bigger Box */}
          <ServiceCard
            title="Full-Stack Development"
            description="I handle both frontend and backend development, creating applications that are responsive, scalable, and efficient. Whether building a new platform or improving an existing one, I focus on quality and performance."
          />

          {/* Frontend + Backend */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ServiceCard
              title="Frontend Development"
              description="I design interactive, user-friendly interfaces using modern tools like React and Tailwind CSS. My goal is to ensure users have an engaging and seamless experience across all devices."
            />
            <ServiceCard
              title="Backend Development"
              description="I build robust backend systems, including APIs, databases, and server logic, using Node.js, Express, and MySQL. I ensure your applications run smoothly, securely, and efficiently."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

