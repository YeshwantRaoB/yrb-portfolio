import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaClock, FaCode, FaHeadset } from 'react-icons/fa';

const engagementModels = [
  {
    id: 1,
    title: 'Project-Based',
    description: 'Perfect for specific projects with defined scope and deliverables.',
    icon: <FaCode className="text-3xl" />,
    price: 'Custom Quote',
    duration: 'Variable',
    features: [
      'Detailed project specification',
      'Milestone-based delivery',
      'Regular progress updates',
      'Source code ownership',
      'Deployment support',
      'Post-launch support (7 days)'
    ],
    bestFor: 'Website development, web app launches, system migrations'
  },
  {
    id: 2,
    title: 'Hourly Consulting',
    description: 'Flexible engagement for code reviews, consulting, and troubleshooting.',
    icon: <FaClock className="text-3xl" />,
    price: '₹1,500-2,500/hr',
    duration: 'Flexible',
    features: [
      'Pay for hours used',
      'No long-term commitment',
      'Code reviews included',
      'Technical consultation',
      'Architecture guidance',
      'Quick turnaround'
    ],
    bestFor: 'Code reviews, consulting, debugging, architecture advice'
  },
  {
    id: 3,
    title: 'Retainer (Part-time)',
    description: 'Ongoing support and maintenance for your systems.',
    icon: <FaHeadset className="text-3xl" />,
    price: '₹30,000-90,000/mo',
    duration: 'Monthly',
    features: [
      '10-20 hours per month',
      'Priority support',
      'Maintenance & updates',
      'Performance optimization',
      'Security monitoring',
      'Monthly reports'
    ],
    bestFor: 'Ongoing maintenance, continuous improvement, support'
  }
];

const processSteps = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'Let\'s discuss your project needs, goals, timeline, and budget.',
    duration: '30 minutes'
  },
  {
    step: 2,
    title: 'Proposal & Quote',
    description: 'I\'ll provide a detailed proposal with timeline, deliverables, and costs.',
    duration: '1-2 days'
  },
  {
    step: 3,
    title: 'Project Planning',
    description: 'We\'ll align on requirements, milestones, and communication channels.',
    duration: 'As needed'
  },
  {
    step: 4,
    title: 'Execution & Delivery',
    description: 'Development with regular updates and milestone reviews.',
    duration: 'Project dependent'
  },
  {
    step: 5,
    title: 'Launch & Support',
    description: 'Deployment, testing, and post-launch support to ensure success.',
    duration: '7+ days'
  }
];

export default function Engagement() {
  const [selectedModel, setSelectedModel] = useState(0);

  return (
    <section id="engagement" className="py-20 px-6 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div data-aos="fade-up" className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-extrabold text-blue-700 dark:text-blue-400 mb-6 tracking-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Engagement Models
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choose the model that best fits your project needs. All models include professional support and quality assurance.
          </motion.p>
        </div>

        {/* Engagement Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {engagementModels.map((model, index) => (
            <motion.div
              key={model.id}
              data-aos="fade-up"
              className={`rounded-xl p-8 cursor-pointer transition-all duration-300 ${
                selectedModel === index
                  ? 'bg-blue-600 text-white shadow-2xl scale-105 ring-2 ring-blue-300'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md hover:shadow-lg'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedModel(index)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Icon */}
              <div className={`mb-4 ${selectedModel === index ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`}>
                {model.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold mb-2">{model.title}</h3>
              <p className={`text-sm mb-4 ${selectedModel === index ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                {model.description}
              </p>

              {/* Price */}
              <div className="text-2xl font-bold mb-1">{model.price}</div>
              <div className={`text-xs mb-4 ${selectedModel === index ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                {model.duration}
              </div>

              {/* Best For */}
              <div className={`text-xs p-3 rounded ${selectedModel === index ? 'bg-blue-500' : 'bg-gray-100 dark:bg-gray-700'}`}>
                <strong>Best for:</strong> {model.bestFor}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features of Selected Model */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-10 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            What's included in {engagementModels[selectedModel].title}?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {engagementModels[selectedModel].features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <FaCheck className="text-green-500 text-lg flex-shrink-0 mt-1" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Process Timeline */}
        <div className="text-center mb-12">
          <motion.h3
            className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            My Process
          </motion.h3>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                className="flex flex-col items-center mb-8 md:mb-0 flex-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Circle Badge */}
                <motion.div
                  className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.step}
                </motion.div>

                {/* Content */}
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 max-w-xs">
                  {item.description}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {item.duration}
                </p>

                {/* Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block text-2xl text-blue-400 mt-6">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-3">Ready to get started?</h3>
          <p className="mb-6 text-blue-100">
            Let's discuss your project and find the perfect engagement model for you.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
