'use client';

import { motion } from 'framer-motion';

const Sustainability = () => {
  return (
    <section id="sustainability" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-forest-900 mb-6">
            Commitment to Sustainability
          </h2>
          <div className="w-24 h-1 bg-earth-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We lead by example with eco-friendly practices and dedication to sustainable forest management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-cream to-earth-600 rounded-2xl p-8 shadow-lg border border-forest-900/15 text-center"
          >
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="text-xl font-bold mb-2 text-forest-900">Reforestation</h3>
            <p className="text-gray-600">Active participation in planting and maintaining forest cover for future generations.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-cream to-earth-600 rounded-2xl p-8 shadow-lg border border-forest-900/15 text-center"
          >
            <div className="text-5xl mb-4">🔄</div>
            <h3 className="text-xl font-bold mb-2 text-forest-900">Sustainable Harvest</h3>
            <p className="text-gray-600">Selective logging, minimal site impact, and adherence to environmental standards.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-cream to-earth-600 rounded-2xl p-8 shadow-lg border border-forest-900/15 text-center"
          >
            <div className="text-5xl mb-4">🌳</div>
            <h3 className="text-xl font-bold mb-2 text-forest-900">Community Outreach</h3>
            <p className="text-gray-600">Empowering and educating local communities about the importance of forest ecosystems.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
