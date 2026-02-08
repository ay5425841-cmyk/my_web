import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'Video Editing',
      description: 'Professional video editing that captivates audiences and drives engagement across all platforms.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'
    },
    {
      number: '02',
      title: 'Influencer Management',
      description: 'End-to-end influencer management services that build authentic connections with your audience.',
      image: 'https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg'
    },
    {
      number: '03',
      title: 'YouTube Growth',
      description: 'Data-driven strategies to accelerate your YouTube channel growth and maximize monetization.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg'
    },
    {
      number: '04',
      title: 'Brand Partnerships',
      description: 'Strategic brand partnerships that align with your values and drive meaningful collaborations.',
      image: 'https://images.pexels.com/photos/1181265/pexels-photo-1181265.jpeg'
    }
  ];

  return (
    <section id="services" className="py-32 bg-gray-50">
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
            className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-gray-700">Our services</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            What we
            <br />
            <span className="text-gray-400">can do</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From video editing to brand partnerships, we provide everything you need to succeed in the digital landscape
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="text-6xl md:text-8xl font-bold text-gray-100 mb-4">
                  {service.number}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <motion.button
                  className="group flex items-center space-x-2 text-lg font-medium text-gray-900 hover:text-black transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <motion.div
                  className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;