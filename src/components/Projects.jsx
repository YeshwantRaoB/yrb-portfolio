import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../assets/images/1.png';
import img2 from '../assets/images/2.png';
import img3 from '../assets/images/3.png';
import img4 from '../assets/images/4.png';
import img5 from '../assets/images/5.png';
import img6 from '../assets/images/6.webp';
import img16 from '../assets/images/16.webp';
import img21 from '../assets/images/21.png';
import img22 from '../assets/images/22.png';
import img30 from '../assets/images/30.png';
const projects = [
  {
    id: 1,
    title: 'Custom Linux Distro',
    desc: 'Built an Linux Operating System from scratch, (implemented using the "Linux from Scratch" project).',
    details: 'Used Linux From Scratch. Hardened kernel. Included tools like Wireshark, Nmap, and a custom scriptable firewall.',
    images: [
      'https://i0.wp.com/9to5linux.com/wp-content/uploads/2020/03/lfs.jpg?fit=1200%2C800&ssl=1',
      img5,
      img6
    ],
  },
  {
    id: 2,
    title: 'Self-Hosted VPN Server for Secure Private Networking',
    desc: 'Built and deployed a self-hosted VPN server on Linux for encrypted private access and secure remote networking.',
    details: 'A fully functional, self-hosted Virtual Private Network (VPN) solution deployed on a hardened Linux server to ensure secure, encrypted access to private networks. This project demonstrates expertise in system administration, cybersecurity, and networking fundamentals.',
    images: [
      'https://www.paloaltonetworks.com/content/dam/pan/en_US/images/cyberpedia/what-is-a-remote-access-vpn.jpg?imwidth=480',
      img16
    ]
  },
  {
    id: 3,
    title: 'Hand Recognition Software',
    desc: 'Built an resposive and fast AI motion and fine movement recognition software.',
    details: 'Implemented the software on Subway Surfers game as a fun project.',
    images: [
      'https://techcrunch.com/wp-content/uploads/2019/08/handtracking_shot.png',
      img1,
      img2,
      img3,
      img4
    ]
  },
  {
    id: 4,
    title: 'Portfolio Website',
    desc: 'Created a personal portfolio using React and Tailwind CSS.',
    details: 'Showcases my projects, skills, and experience with smooth animations and responsive design.',
    images: [
      'https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/673f2a3b44c1ed4901bb43bb_6386328bea96dffacc89946b_d1.webp'
    ]
  },
  {
    id: 5,
    title: 'KPT Incubation Cell Portal',
    desc: 'Built a responsive web portal for Karnataka Polytechnic’s Incubation Cell using React and Tailwind CSS.',
    details: 'Features program overviews, application guidelines, and an interactive dashboard—complete with smooth animations and mobile‑first design to support student startups and innovation. Link: <a href="https://kpt-incubation-cell.netlify.app/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">https://kpt-incubation-cell.netlify.app/</a>.',
    images: [
      img21
    ]
  },
  {
    id: 6,
    title: 'Amritha Clinic Website',
    desc: 'Crafted a modern, user‑friendly clinic website with React and Tailwind CSS.',
    details: 'Includes service listings, doctor profiles, and an embedded appointment booking form, all optimized for performance, accessibility, and a seamless patient experience across devices. Link: <a href="https://amritha-clinic.netlify.app/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">https://amritha-clinic.netlify.app/</a>',
    images: [
      img22
    ]
  },
  {
    id: 7,
    title: 'SentriPark: Intelligent Campus Vehicle Security Suite',
    desc: 'A cross-platform AI-powered campus vehicle access and monitoring system built with React Native, Express, MongoDB, and OCR-based ALPR.',
    details: 'Automates vehicle entry using real-time license plate recognition, instant admin notifications, and secure cloud media handling. Features include role-based access control with Clerk Auth, JWT-secured APIs, analytics dashboard, bulk user import, and a live backend deployed on Vercel. The entire system is modular, scalable, and being prepared for open-source release. Demo: <a href="https://youtu.be/lfxcjYPZ-yQ" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">https://youtu.be/lfxcjYPZ-yQ</a>',
    images: [
      img30
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  // Reset slideIndex when opening a new project
  React.useEffect(() => {
    setSlideIndex(0);
  }, [selectedProject]);

  return (
    <section id="projects" className="bg-gradient-to-r from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 px-6 border-t border-blue-200 dark:border-blue-900">
      <div data-aos="fade-up" className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-8">Projects</h2>

        <div data-aos="fade-up" className="flex flex-wrap justify-center gap-6">
          {projects.map((project) => (
            <motion.div
              data-aos="fade-up" key={project.id}
              className="w-full md:w-[48%] bg-white dark:bg-gray-800 rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              data-aos="fade-up" className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal */}
            <motion.div
              data-aos="fade-up" className="fixed top-1/2 left-1/2 z-50 w-[90%] md:w-[600px] max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: '-50%', x: '-50%', scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              style={{ transform: 'translate(-50%, -50%)' }}
            >
              <div data-aos="fade-up" className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                  {selectedProject.title}
                </h3>
                <button
                  className="text-gray-500 dark:text-gray-300 text-xl hover:text-red-500"
                  onClick={() => {
                    setSelectedProject(null);
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Render HTML links in details safely */}
              <p className="text-gray-600 dark:text-gray-300 mb-4" dangerouslySetInnerHTML={{ __html: selectedProject.details }} />

              {/* Slideshow or Single Image */}
              <div data-aos="fade-up" className="relative">
                {selectedProject.images.length > 1 ? (
                  <>
                    <motion.img
                      key={selectedProject.images[slideIndex]}
                      src={selectedProject.images[slideIndex]}
                      alt={`Slide ${slideIndex + 1}`}
                      className="w-full h-auto rounded-lg shadow"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.4 }}
                    />
                    {/* Arrows */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSlideIndex((prev) =>
                          prev === 0 ? selectedProject.images.length - 1 : prev - 1
                        );
                      }}
                      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      ◀
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSlideIndex((prev) =>
                          prev === selectedProject.images.length - 1 ? 0 : prev + 1
                        );
                      }}
                      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      ▶
                    </button>
                  </>
                ) : (
                  <img
                    src={selectedProject.images[0]}
                    alt={selectedProject.title}
                    className="w-full h-auto rounded-lg shadow"
                  />
                )}
              </div>

              {selectedProject.images.length > 1 && (
                <p className="text-sm text-center mt-2 text-gray-500 dark:text-gray-400">
                  {slideIndex + 1} / {selectedProject.images.length}
                </p>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
