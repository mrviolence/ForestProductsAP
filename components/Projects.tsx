'use client';

import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Municipal Reforestation Initiative',
      description: 'Planted 50,000 trees across urban areas',
      image: '🌲',
      status: 'Completed',
    },
    {
      title: 'Commercial Timber Plantation',
      description: '500 hectares of sustainable timber production',
      image: '📦',
      status: 'Ongoing',
    },
    {
      title: 'Community Forest Project',
      description: 'Empowering local communities with forest resources',
      image: '👥',
      status: 'Completed',
    },
    {
      title: 'Conservation Corridor',
      description: 'Connecting fragmented forest habitats',
      image: '🦁',
      status: 'Ongoing',
    },
    {
      title: 'Agroforestry Integration',
      description: 'Combining agriculture with sustainable forestry',
      image: '🌾',
      status: 'Completed',
    },
    {
      title: 'Water Catchment Forest',
      description: 'Protecting water resources through forest conservation',
      image: '💧',
      status: 'Ongoing',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-forest-900 mb-6">
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-earth-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our successful forestry and reforestation initiatives
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-cream to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-earth-700/10"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-forest-900 to-earth-700 flex items-center justify-center">
                <span className="text-7xl">{project.image}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-montserrat font-bold text-forest-900">
                    {project.title}
                  </h3>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      project.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
