import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Youtube, href: '#', name: 'YouTube' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className="text-white flex flex-col">
                  <div className="text-2xl font-bold tracking-tight">DelightX</div>
                  <div className="text-[8px] font-medium tracking-[0.2em] uppercase text-gray-400 -mt-1">MEDIA</div>
                </div>
              </div>
              
              <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-md">
                Transforming creators and brands into digital powerhouses through 
                innovative content strategies.
              </p>
              
              <motion.button
                className="group bg-white text-black px-8 py-4 rounded-full font-medium text-lg flex items-center space-x-2 hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
              >
                <span>Start a project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Right Content */}
            <motion.div
              className="grid md:grid-cols-2 gap-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Navigation */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Navigation</h3>
                <ul className="space-y-4">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-lg"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-gray-400 text-lg">hello@delightxmedia.com</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-lg">+1 (555) 123-4567</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-lg">Los Angeles, CA</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div 
          className="border-t border-gray-800 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-lg">
              © 2025 DelightxMedia. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-6 mt-6 md:mt-0">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;