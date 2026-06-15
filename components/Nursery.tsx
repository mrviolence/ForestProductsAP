'use client';

import { motion } from 'framer-motion';

const Nursery = () => {
  const treeSpecies = [
    { name: 'Eucalyptus', emoji: '🌳', description: 'Fast-growing commercial species' },
    { name: 'Pine', emoji: '🌲', description: 'Durable timber production' },
    { name: 'Acacia', emoji: '🌴', description: 'Indigenous species for conservation' },
    { name: 'Cypress', emoji: '🌲', description: 'Premium ornamental and timber' },
    { name: 'Cedar', emoji: '🌳', description: 'Aromatic and valuable timber' },
    { name: 'Fruit Trees', emoji: '🍃', description: 'Agricultural forestry options' },
  ];

  return (
    <section id="nursery" className="py-20 bg-forest-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-forest-900 mb-6">
            Tree Nursery & Seedlings
          </h2>
          <div className="w-24 h-1 bg-earth-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium quality seedlings and nursery beds for reforestation and commercial forestry
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {treeSpecies.map((species, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-shadow border-2 border-earth-700/20"
            >
              <div className="text-6xl mb-4">{species.emoji}</div>
              <h3 className="text-2xl font-montserrat font-bold text-forest-900 mb-2">
                {species.name}
              </h3>
              <p className="text-gray-600">{species.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-forest-900 to-earth-700 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-montserrat font-bold mb-8 text-center">
            Why Choose Our Nursery?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">✓</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Premium Quality</h4>
                <p className="text-cream">Only the healthiest seedlings selected for optimal growth</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">✓</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Expert Care</h4>
                <p className="text-cream">Professional horticulturists ensure perfect conditions</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">✓</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Sustainable Species</h4>
                <p className="text-cream">Focus on native and environmentally beneficial varieties</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">✓</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Bulk Orders</h4>
                <p className="text-cream">Competitive pricing for large reforestation projects</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Nursery;
