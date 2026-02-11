import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with years of experience'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in digital design'
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'Focused on achieving your business objectives'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromising quality'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">About Us</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
              We are a team of
              <br />
              <span className="font-normal">creative professionals</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 5 years of experience in the digital industry, we have helped 
              numerous brands establish their online presence and achieve their business goals 
              through innovative design and strategic thinking.
            </p>

            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Our approach combines creativity with data-driven insights to deliver 
              exceptional results that exceed expectations and drive meaningful growth.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="bg-black text-white px-8 py-4 text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
              Learn More About Us
            </button>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                  alt="Our team at work"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Stats Card */}
              <motion.div
                className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-light text-gray-900">150+</div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-light text-gray-900">50+</div>
                    <div className="text-xs text-gray-600">Clients</div>
                  </div>
                </div>
              </motion.div>

              {/* Background Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-purple-100 rounded-full opacity-50"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;