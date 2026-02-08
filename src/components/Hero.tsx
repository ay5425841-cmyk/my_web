import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 lg:py-32">
          <div className="text-center">
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 leading-none mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              We are a creative
              <br />
              <span className="font-normal">digital agency</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We help brands and businesses create meaningful digital experiences 
              that connect with their audience and drive results.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button
                onClick={scrollToContact}
                className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                GET STARTED
              </button>
              <button className="border border-gray-300 text-gray-900 px-8 py-3 text-sm font-medium hover:border-gray-400 transition-colors duration-200">
                VIEW OUR WORK
              </button>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-light text-gray-900 mb-2">150+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-light text-gray-900 mb-2">50+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-light text-gray-900 mb-2">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-light text-gray-900 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;