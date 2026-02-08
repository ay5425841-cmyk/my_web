import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
              About
              <br />
              <span className="font-normal">our agency</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a team of passionate designers, developers, and strategists 
              who believe in the power of great design to transform businesses.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our approach combines creativity with data-driven insights to create 
              digital experiences that not only look beautiful but also deliver 
              measurable results for our clients.
            </p>
            <button className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
              LEARN MORE
            </button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="About us"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;