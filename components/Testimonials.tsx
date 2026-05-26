'use client';

import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Kariuki',
      company: 'Green Farming Ltd',
      quote: 'Forest Supplies provided excellent timber poles for our construction project. Professional service and timely delivery!',
      rating: 5,
    },
    {
      name: 'Mary Wanjiru',
      company: 'Environmental Conservation NGO',
      quote: 'Their tree planting services and high-quality seedlings made our reforestation project a success. Highly recommended!',
      rating: 5,
    },
    {
      name: 'David Kipchoge',
      company: 'Industrial Wood Processing',
      quote: 'Reliable partner for sustainable timber supplies. Great prices and consistent quality. We have been working with them for 3 years.',
      rating: 5,
    },
    {
      name: 'Sarah Mutugi',
      company: 'Community Development Board',
      quote: 'Forest Supplies demonstrated genuine commitment to sustainable forestry practices. A company with values!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-earth-700 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-earth-700 to-earth-900 rounded-2xl p-8 border border-earth-600/30"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-xl">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-cream italic mb-6 text-lg">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-earth-600/30 pt-4">
                <p className="font-bold text-white text-lg">{testimonial.name}</p>
                <p className="text-earth-300">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
