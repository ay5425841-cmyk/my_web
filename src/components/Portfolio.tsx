import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce platform with advanced features and seamless user experience.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      tags: ['React', 'Node.js', 'MongoDB'],
      year: '2024'
    },
    {
      title: 'Brand Identity System',
      category: 'Brand Design',
      description: 'Complete brand identity design for a tech startup including logo, guidelines, and collateral.',
      image: 'https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg',
      tags: ['Branding', 'Logo Design', 'Guidelines'],
      year: '2024'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile App',
      description: 'Secure and intuitive mobile banking application with advanced security features.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
      tags: ['React Native', 'Security', 'FinTech'],
      year: '2023'
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Design',
      description: 'Clean and modern dashboard design for a SaaS platform with complex data visualization.',
      image: 'https://images.pexels.com/photos/1181265/pexels-photo-1181265.jpeg',
      tags: ['UI/UX', 'Dashboard', 'Analytics'],
      year: '2023'
    },
    {
      title: 'Restaurant Website',
      category: 'Web Development',
      description: 'Beautiful restaurant website with online ordering system and reservation management.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      tags: ['WordPress', 'E-commerce', 'Booking'],
      year: '2023'
    },
    {
      title: 'Fitness App',
      category: 'Mobile App',
      description: 'Comprehensive fitness tracking app with workout plans and nutrition guidance.',
      image: 'https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg',
      tags: ['Flutter', 'Health', 'Tracking'],
      year: '2023'
    }
  ];

  const categories = ['All', 'Web Development', 'Brand Design', 'Mobile App', 'Web Design'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Our Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
            Recent
            <br />
            <span className="font-normal">projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a look at some of our recent work and see how we've helped our clients 
            achieve their goals through innovative design and development.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <ExternalLink className="w-4 h-4 text-gray-900" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-medium">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500 font-medium">{project.category}</span>
                  <div className="flex gap-1">
                    {project.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-light text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <button className="flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors group-hover:translate-x-1 transform transition-transform">
                  View Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="bg-black text-white px-8 py-4 text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;