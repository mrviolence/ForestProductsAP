'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', alt: 'Lush forest' },
  { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca', alt: 'Tree seedlings' },
  { src: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1', alt: 'Reforestation project' },
  { src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b', alt: 'Timber ready for transport' },
  { src: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368', alt: 'Saplings in nursery' },
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e', alt: 'Workers in sustainable forest' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-forest-900 mb-6">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-earth-700 mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some highlights from our forests, nurseries, and sustainable projects.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              whileHover={{ scale: 1.04 }}
              key={idx}
              className="overflow-hidden rounded-2xl border-2 border-forest-900/10 shadow relative h-72"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
