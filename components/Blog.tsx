'use client';

import { motion } from 'framer-motion';

const posts = [
  {
    title: 'The Importance of Sustainable Forestry',
    date: '2026-05-20',
    summary: 'Discover why responsible timber harvesting and replanting are crucial for our planet\'s health and future generations.'
  },
  {
    title: 'Choosing the Right Seedlings for Your Land',
    date: '2026-04-12',
    summary: 'A guide to selecting native and commercial tree species for your reforestation project or commercial plantation.'
  },
  {
    title: 'How Reforestation Fights Climate Change',
    date: '2026-03-29',
    summary: 'Reforestation is one of the most impactful tools against climate change. Learn how you can take part.'
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
            Blog & Insights
          </h2>
          <div className="w-24 h-1 bg-earth-700 mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Forestry knowledge, sustainability tips, and industry news from our experts.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cream to-white border border-earth-700/10 p-8 rounded-2xl shadow hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <p className="text-xs text-earth-700 mb-2">{post.date}</p>
                <h3 className="text-2xl font-bold font-montserrat mb-3 text-forest-900">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.summary}</p>
              </div>
              <button className="mt-2 py-2 px-4 rounded-lg bg-earth-700 text-white hover:bg-forest-900 font-poppins transition">Read More</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
