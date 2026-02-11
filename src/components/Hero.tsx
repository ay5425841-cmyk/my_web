import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCalendly = () => {
    window.open('https://calendly.com/delightxmedia/consultation', '_blank');
  };

  return (
    <section id="home" className="min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Available for new projects
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 leading-none mb-8">
              We create
              <br />
              <span className="font-normal">digital experiences</span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg">
              We are a creative digital agency specializing in brand identity, 
              web design, and digital marketing solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button
                onClick={scrollToContact}
                className="bg-black text-white px-8 py-4 text-sm font-medium hover:bg-gray-800 transition-all duration-200 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={openCalendly}
                className="border border-gray-300 text-gray-900 px-8 py-4 text-sm font-medium hover:border-gray-400 transition-all duration-200 flex items-center justify-center group"
              >
                <Play className="mr-2 w-4 h-4" />
                Schedule a Call
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-light text-gray-900 mb-1">150+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-light text-gray-900 mb-1">50+</div>
                <div className="text-sm text-gray-600">Clients</div>
              </div>
              <div>
                <div className="text-3xl font-light text-gray-900 mb-1">5+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                  alt="Creative workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-2xl font-light text-gray-900">99%</div>
                <div className="text-xs text-gray-600">Client Satisfaction</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="text-2xl font-light text-gray-900">24/7</div>
                <div className="text-xs text-gray-600">Support</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;