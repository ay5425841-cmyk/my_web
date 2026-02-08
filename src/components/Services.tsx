import React from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  Users, 
  TrendingUp, 
  Handshake, 
  ArrowRight,
  Play,
  Star
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing that captivates audiences and drives engagement across all platforms.',
      features: ['Motion Graphics', 'Color Grading', 'Sound Design', 'Multi-Platform Optimization'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      price: 'Starting at $500'
    },
    {
      icon: Users,
      title: 'Influencer Management',
      description: 'End-to-end influencer management services that build authentic connections with your audience.',
      features: ['Content Strategy', 'Audience Growth', 'Brand Positioning', 'Community Management'],
      image: 'https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg',
      price: 'Starting at $1,000'
    },
    {
      icon: TrendingUp,
      title: 'YouTube Growth',
      description: 'Data-driven strategies to accelerate your YouTube channel growth and maximize monetization.',
      features: ['SEO Optimization', 'Thumbnail Design', 'Analytics Tracking', 'Monetization Strategy'],
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
      price: 'Starting at $750'
    },
    {
      icon: Handshake,
      title: 'Brand Deals',
      description: 'Strategic brand partnerships that align with your values and drive meaningful collaborations.',
      features: ['Partnership Matching', 'Contract Negotiation', 'Campaign Management', 'Performance Tracking'],
      image: 'https://images.pexels.com/photos/1181265/pexels-photo-1181265.jpeg',
      price: 'Commission Based'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Star className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Our Services</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From video editing to brand partnerships, we provide everything you need to succeed in the digital landscape
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Play Button Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </motion.div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-gray-900">{service.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  className="group/btn w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-full font-semibold flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;