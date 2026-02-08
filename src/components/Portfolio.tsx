import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'TechReview Pro',
      category: 'YouTube Channel Growth',
      description: 'Transformed a tech review channel from 10K to 500K subscribers in 8 months',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      stats: '500K+ subscribers'
    },
    {
      title: 'FashionForward',
      category: 'Brand Campaign',
      description: 'Multi-platform influencer campaign generating 15M+ impressions',
      image: 'https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg',
      stats: '15M+ impressions'
    },
    {
      title: 'GameZone Elite',
      category: 'Content Strategy',
      description: 'Complete rebrand and growth strategy for gaming content creator',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
      stats: '800K+ subscribers'
    }
  ];

  return (
    <section id="work" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gray-50 border border-gray-200 rounded-full mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-gray-700">Our work</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Selected
            <br />
            <span className="text-gray-400">projects</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how we've transformed creators and brands into digital powerhouses
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Image */}
                <motion.div
                  className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>

                {/* Content */}
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-gray-900">
                      {project.stats}
                    </div>
                    <motion.div
                      className="flex items-center space-x-2 text-gray-900 group-hover:text-black"
                      whileHover={{ x: 10 }}
                    >
                      <span className="font-medium">View project</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;