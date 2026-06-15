'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'The Importance of Sustainable Forestry',
    date: '2026-05-20',
    summary: 'Discover why responsible timber harvesting and replanting are crucial for our planet\'s health and future generations.',
    link: 'https://www.fao.org/sustainable-forest-management/en/',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80',
  },
  {
    title: 'Choosing the Right Seedlings for Your Land',
    date: '2026-04-12',
    summary: 'A guide to selecting native and commercial tree species for your reforestation project or commercial plantation.',
    link: 'https://www.worldagroforestry.org/trees-and-markets',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
  },
  {
    title: 'How Reforestation Fights Climate Change',
    date: '2026-03-29',
    summary: 'Reforestation is one of the most impactful tools against climate change. Learn how you can take part.',
    link: 'https://www.unep.org/explore-topics/forests/what-we-do/forest-landscape-restoration',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-forest-900 mb-6">
            Blog &amp; Insights
          </h2>
          <div className="w-24 h-1 bg-earth-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Forestry knowledge, sustainability tips, and industry news from our experts.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white border border-earth-700/10 rounded-2xl shadow hover:shadow-xl transition-all overflow-hidden flex flex-col"
            >
              {/* Cover image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 to-transparent" />
              </div>
              {/* Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-xs text-earth-700 font-semibold mb-2 uppercase tracking-wide">{post.date}</p>
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-forest-900 leading-snug">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.summary}</p>
                </div>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-2 px-4 rounded-lg bg-earth-700 text-white hover:bg-forest-900 font-poppins text-sm transition-colors self-start"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
