'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Nursery = () => {
  const treeSpecies = [
    {
      name: 'Eucalyptus',
      image: 'https://images.unsplash.com/photo-1596701062351-df5f8af0d385?w=600&q=80',
      description: 'Fast-growing commercial species ideal for poles and firewood production.',
    },
    {
      name: 'Pine',
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&q=80',
      description: 'Durable timber production seedlings ready for commercial forestry.',
    },
    {
      name: 'Acacia',
      image: 'https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=600&q=80',
      description: 'Indigenous species perfect for land conservation and reforestation.',
    },
    {
      name: 'Cypress',
      image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&q=80',
      description: 'Premium ornamental and building timber seedlings for high-value output.',
    },
    {
      name: 'Cedar',
      image: 'https://images.unsplash.com/photo-1627993077759-99464d26210f?w=600&q=80',
      description: 'Valuable and highly durable aromatic timber species for forest renewal.',
    },
    {
      name: 'Fruit Trees',
      image: 'https://images.unsplash.com/photo-1595855759920-86582396756a?w=600&q=80',
      description: 'Diverse agricultural forestry varieties to combine sustainability and food security.',
    },
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
            Tree Nursery &amp; Seedlings
          </h2>
          <div className="w-24 h-1 bg-earth-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium quality seedlings and nursery beds for reforestation and commercial forestry
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {treeSpecies.map((species, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-earth-700/10 flex flex-col"
            >
              {/* Image Header */}
              <div className="relative h-48 w-full overflow-hidden bg-forest-900/10">
                <Image
                  src={species.image}
                  alt={species.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-6 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-montserrat font-bold text-forest-900 mb-2">
                    {species.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{species.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-forest-900 to-earth-700 rounded-3xl p-12 text-white shadow-xl"
        >
          <h3 className="text-3xl font-montserrat font-bold mb-8 text-center">
            Why Choose Our Nursery?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="text-3xl text-earth-300">✓</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Premium Quality</h4>
                <p className="text-cream text-sm leading-relaxed">Only the healthiest seedlings selected for optimal growth and survivability.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl text-earth-300">✓</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Expert Care</h4>
                <p className="text-cream text-sm leading-relaxed">Experienced foresters and horticulturists ensure perfect soil and moisture conditions.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl text-earth-300">✓</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Sustainable Species</h4>
                <p className="text-cream text-sm leading-relaxed">Focus on species that promote biodiversity, erosion control, and high carbon capture.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl text-earth-300">✓</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Bulk Orders</h4>
                <p className="text-cream text-sm leading-relaxed">Highly competitive pricing and transportation logistics support for large reforestation projects.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Nursery;
