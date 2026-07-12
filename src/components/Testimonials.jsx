import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Ramesh Kumar',
    role: 'Startup Founder',
    company: 'Tech Innovations',
    text: 'Yeshwant delivered an exceptional web platform for our business. His attention to detail, technical expertise, and ability to understand our requirements were outstanding. Highly recommended!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=12'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Project Manager',
    company: 'Digital Solutions Ltd',
    text: 'Working with Yeshwant was a game-changer for our infrastructure. His DevOps solutions improved our system reliability by 40%. Professional, responsive, and truly dedicated.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=47'
  },
  {
    id: 3,
    name: 'Arun Singh',
    role: 'CTO',
    company: 'Enterprise Systems',
    text: 'Exceptional cybersecurity expertise. Yeshwant performed a comprehensive security audit and implemented critical hardening measures. Our system is now significantly more secure. Great work!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=33'
  },
  {
    id: 4,
    name: 'Neha Gupta',
    role: 'Business Owner',
    company: 'E-Commerce Store',
    text: 'From concept to launch, Yeshwant handled everything with professionalism. The website is fast, secure, and beautiful. Couldn\'t ask for better support and delivery!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=28'
  },
  {
    id: 5,
    name: 'Vikram Patel',
    role: 'Operations Director',
    company: 'Manufacturing Corp',
    text: 'Outstanding technical support and consulting. Yeshwant\'s recommendations helped us streamline our cloud infrastructure and reduce costs significantly. Five stars!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=50'
  },
  {
    id: 6,
    name: 'Sophia Das',
    role: 'HR Manager',
    company: 'Human Resources Inc',
    text: 'Excellent communication and timely delivery. Yeshwant understood our needs perfectly and delivered a solution that exceeded expectations. Looking forward to future projects!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=21'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div data-aos="fade-up" className="max-w-6xl mx-auto text-center">
        
        {/* Section Header */}
        <motion.h2
          className="text-4xl font-extrabold text-blue-700 dark:text-blue-400 mb-6 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Client Testimonials
        </motion.h2>
        
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Real feedback from clients I&apos;ve worked with. Your success is my success.
        </motion.p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              data-aos="fade-up"
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 dark:text-gray-200 mb-6 text-sm leading-relaxed italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-600">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
