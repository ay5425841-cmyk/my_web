import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project One',
      category: 'Brand Identity',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    },
    {
      title: 'Project Two',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg',
    },
    {
      title: 'Project Three',
      category: 'Digital Marketing',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
    },
    {
      title: 'Project Four',
      category: 'Development',
      image: 'https://images.pexels.com/photos/1181265/pexels-photo-1181265.jpeg',
    },
  ];

  return (
    <section id="work" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
            Our
            <br />
            <span className="font-normal">work</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Take a look at some of our recent projects and see how we've helped 
            our clients achieve their goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-sm text-gray-500 mb-2">{project.category}</div>
              <h3 className="text-xl font-light text-gray-900 group-hover:text-gray-600 transition-colors duration-200">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
            VIEW ALL WORK
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;