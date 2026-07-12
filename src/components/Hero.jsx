import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

const Hero = ({ viewMode }) => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden text-white"
    >
      {/* 🎥 Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover blur-[2px] brightness-[0.8] z-0"
        src="/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 🌌 Overlay for better text contrast */}
      <div data-aos="fade-up" className="absolute inset-0 bg-black/30 dark:bg-black/50 z-10" />

      {/* 🌟 Main Content */}
      <div data-aos="fade-up" className="relative z-20 flex items-center justify-center h-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Heading */}
          <motion.h1
            data-aos="fade-up"
            className="glitch-text text-4xl md:text-6xl font-bold mb-4 leading-tight relative text-blue-400"
            data-text="Hi, I’m Yeshwant Rao"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I’m Yeshwant Rao
          </motion.h1>

          {/* Typing Bio */}
          <motion.div
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-100 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <ReactTyped
              strings={viewMode === 'freelance' ? [
                'Full Stack Developer & System Administrator.',
                'Building Scalable Web Solutions.',
                'Enterprise Security & DevOps Expertise.',
                'Your Trusted Tech Partner.',
                'Let\'s Build Something Amazing Together.'
              ] : [
                'System Administrator & Full Stack Developer.',
                'Tech Enthusiast.',
                'Creator. Problem Solver. Leader.',
                'Building Reliable, Secure Systems',
                'Driven by Curiosity. Focused on Excellence.'
              ]}
              typeSpeed={45}
              backSpeed={25}
              backDelay={1200}
              loop
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
