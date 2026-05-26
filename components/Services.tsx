'use client';

import { motion } from 'framer-motion';
import { Leaf, Flame, Truck, Sprout, Users, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Leaf,
      title: 'Timber Poles',
      description: 'High-quality timber poles for construction and utility applications',
    },
    {
      icon: Flame,
      title: 'Firewood',
      description: 'Premium firewood for heating and commercial use',
    },
    {
      icon: Truck,
      title: 'Timber Transportation',
      description: 'Reliable transportation and delivery of forest products',
    },
    {
      icon: Sprout,
      title: 'Tree Planting',
      description: 'Professional tree planting and reforestation services',
    },
    {
      icon: Users,
      title: 'Forest Management',
      description: 'Expert forest management and maintenance services',
    },
    {
      icon: Wrench,
      title: 'Forestry Consultation',
      description: 'Professional guidance on sustainable forestry practices',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-forest-900 mb-6">
            Our Services & Products
          </h2>
          <div className="w-24 h-1 bg-earth-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive forestry solutions for your every need
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="bg-gradient-to-br from-cream to-white rounded-2xl p-8 border border-forest-900/10 backdrop-blur-sm"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-br from-forest-900 to-earth-700 rounded-xl flex items-center justify-center mb-6"
                >
                  <Icon size={32} className="text-cream" />
                </motion.div>
                <h3 className="text-2xl font-montserrat font-bold text-forest-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
