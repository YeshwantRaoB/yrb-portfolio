import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaShieldAlt, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    description: 'Modern, responsive web applications built with React, Node.js, and Tailwind CSS. From concept to deployment.',
    icon: <FaCode className="text-4xl" />,
    price: 'Custom Quote',
    features: ['Responsive Design', 'Performance Optimized', 'SEO Ready', 'API Integration']
  },
  {
    id: 2,
    title: 'System Administration & DevOps',
    description: 'Linux server management, CI/CD pipelines, containerization, and infrastructure automation.',
    icon: <FaServer className="text-4xl" />,
    price: 'Custom Quote',
    features: ['Server Setup', 'Automation', 'Monitoring', 'Backup Solutions']
  },
  {
    id: 3,
    title: 'Cybersecurity & Hardening',
    description: 'Secure your infrastructure with penetration testing, network hardening, and compliance audits.',
    icon: <FaShieldAlt className="text-4xl" />,
    price: 'Custom Quote',
    features: ['Security Audit', 'Penetration Testing', 'Hardening', 'Compliance']
  },
  {
    id: 4,
    title: 'Database Design & Optimization',
    description: 'PostgreSQL, MongoDB, and cloud databases. Design, migration, and performance optimization.',
    icon: <FaDatabase className="text-4xl" />,
    price: 'Custom Quote',
    features: ['Schema Design', 'Query Optimization', 'Migration', 'Replication']
  },
  {
    id: 5,
    title: 'Cloud Infrastructure',
    description: 'AWS, cloud architecture, serverless solutions, and cost optimization for scalable applications.',
    icon: <FaCloud className="text-4xl" />,
    price: 'Custom Quote',
    features: ['AWS Services', 'Serverless', 'Cost Optimization', 'Auto-scaling']
  },
  {
    id: 6,
    title: 'Consulting & Technical Support',
    description: 'Ongoing technical support, architecture consultation, and code reviews for your projects.',
    icon: <FaTools className="text-4xl" />,
    price: 'Hourly Rate',
    features: ['Code Review', 'Architecture', 'Troubleshooting', '24/7 Support']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div data-aos="fade-up" className="max-w-6xl mx-auto text-center">
        
        {/* Section Header */}
        <motion.h2
          className="text-4xl font-extrabold text-blue-700 dark:text-blue-400 mb-6 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Services I Offer
        </motion.h2>
        
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Comprehensive tech solutions tailored to your business needs. Let's build something exceptional together.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              data-aos="fade-up"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59,130,246,0.15)" }}
            >
              {/* Icon */}
              <motion.div
                className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 10 }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Price */}
              <motion.div
                className="text-lg font-bold text-blue-600 dark:text-blue-400 border-t border-gray-200 dark:border-gray-700 pt-4"
                whileHover={{ scale: 1.05 }}
              >
                {service.price}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
            Need a custom solution? Let's discuss your project!
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition font-semibold text-base"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
