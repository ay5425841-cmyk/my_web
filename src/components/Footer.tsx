import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Brand Identity',
    'Web Development',
    'Mobile Apps',
    'Digital Marketing',
    'Web Design',
    'Analytics & SEO'
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="text-white flex flex-col mb-6">
                <div className="text-2xl font-bold tracking-tight">DelightX</div>
                <div className="text-[8px] font-medium tracking-[0.2em] uppercase text-gray-400 -mt-1">MEDIA</div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                We are a creative digital agency that helps brands and businesses 
                create meaningful digital experiences that drive results.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-white font-medium mb-6">Navigation</h3>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-medium mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-medium mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white">hello@delightxmedia.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-gray-400">Address</p>
                    <p className="text-white">Los Angeles, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 DelightxMedia. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;