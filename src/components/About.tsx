import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              <span className="text-sm font-medium text-gray-700">About us</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              We are a creative
              <br />
              <span className="text-gray-400">digital agency</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're not just a media company – we're digital architects building the future 
              of content creation and brand storytelling. Our mission is to democratize digital 
              success by providing world-class creative services that transform creators into 
              industry leaders.
            </p>

            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              With over 500 creators empowered and 50M+ views generated, we've proven our ability 
              to turn vision into viral success. Every project is an opportunity to push boundaries 
              and create something extraordinary.
            </p>

            <motion.button
              className="group bg-black text-white px-8 py-4 rounded-full font-medium text-lg flex items-center space-x-2 hover:bg-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                  alt="About DelightxMedia"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <motion.div
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">98%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;