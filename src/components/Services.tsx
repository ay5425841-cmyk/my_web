import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Brand Identity',
      description: 'We create distinctive brand identities that capture the essence of your business and resonate with your target audience.',
    },
    {
      title: 'Web Design',
      description: 'Our web designs are not just visually stunning but also user-friendly and optimized for conversions.',
    },
    {
      title: 'Digital Marketing',
      description: 'We develop comprehensive digital marketing strategies that drive traffic, engagement, and sales.',
    },
    {
      title: 'Development',
      description: 'Our development team brings designs to life with clean, efficient code and seamless functionality.',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
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
            <span className="font-normal">services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We offer a comprehensive range of digital services to help your business 
            succeed in the digital landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4 group-hover:text-gray-600 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <button className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200">
                  LEARN MORE →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;