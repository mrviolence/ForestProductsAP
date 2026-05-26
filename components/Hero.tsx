'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900 overflow-hidden pt-16">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')]"></div>
      </div>

      {/* Animated background circles */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 bg-earth-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-earth-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center md:text-left md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-montserrat font-bold text-white mb-6 leading-tight"
          >
            Premium Timber & Forest Products
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-cream mb-8 leading-relaxed"
          >
            Reliable forestry supplies and sustainable tree planting solutions for a greener future
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-earth-700 hover:bg-earth-900 text-white px-8 py-3 rounded-lg font-poppins font-semibold text-lg transition-colors"
            >
              View Products
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-earth-700 text-earth-700 hover:bg-earth-700 hover:text-white px-8 py-3 rounded-lg font-poppins font-semibold text-lg transition-all"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>

        {/* Right side - Image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:block md:w-1/2 relative h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-forest-900"></div>
          <div className="w-full h-full bg-gradient-to-br from-earth-700 to-forest-900 rounded-3xl flex items-center justify-center overflow-hidden">
            <div className="text-center text-cream opacity-50">
              <div className="text-6xl mb-4">🌲</div>
              <p>Forest Image</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ChevronDown size={32} className="text-earth-700" />
      </motion.div>
    </section>
  );
};

export default Hero;
