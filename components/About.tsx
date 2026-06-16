'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-forest-900 mb-6">
            About Us
          </h2>
          <div className="w-24 h-1 bg-earth-700 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full h-96 overflow-hidden rounded-3xl relative shadow-xl border-4 border-earth-700/10"
          >
            <Image
              src="/images/about_forest.png"
              alt="Sustainable Tree Seedlings"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-montserrat font-bold text-forest-900 mb-4">
              Sustainable Forestry Since 2010
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Forest Supplies is a leading provider of premium timber products and sustainable forestry solutions. With over a decade of experience, we are committed to providing high-quality forest products while maintaining environmental responsibility.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-earth-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-forest-900">Sustainable Practices</h4>
                  <p className="text-gray-600">Eco-friendly harvesting and reforestation programs</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-earth-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-forest-900">Quality Products</h4>
                  <p className="text-gray-600">Premium timber poles, firewood, and forest supplies</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-earth-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-forest-900">Expert Team</h4>
                  <p className="text-gray-600">Experienced forestry professionals at your service</p>
                </div>
              </div>
            </div>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-earth-700 hover:bg-earth-900 text-white px-8 py-3 rounded-lg font-poppins font-semibold transition-colors"
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 bg-forest-900 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="text-center">
            <p className="text-5xl font-bold text-earth-600 mb-2">500+</p>
            <p className="text-cream">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-earth-600 mb-2">1000+</p>
            <p className="text-cream">Hectares Planted</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-earth-600 mb-2">100%</p>
            <p className="text-cream">Customer Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
