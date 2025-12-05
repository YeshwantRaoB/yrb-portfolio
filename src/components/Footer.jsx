import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 px-6 border-t border-blue-200 dark:border-blue-900">
      <motion.div
        data-aos="fade-up"
        className="max-w-4xl mx-auto flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.p
          data-aos="fade-up"
          className="text-gray-600 dark:text-gray-300 text-base mb-2 font-medium"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()}{' '}
          <span className="font-bold text-blue-700 dark:text-blue-400">
            Yeshwant Rao
          </span>{' '}
          | All rights reserved.
        </motion.p>
        <motion.p
          data-aos="fade-up"
          className="text-xs text-gray-500 dark:text-gray-500 mt-1"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
