import React from 'react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-white flex flex-col mb-6">
              <div className="text-xl font-bold tracking-tight">DelightX</div>
              <div className="text-[6px] font-medium tracking-[0.2em] uppercase text-gray-400 -mt-1">MEDIA</div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              We are a creative digital agency that helps brands and businesses 
              create meaningful digital experiences.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('#home')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#services')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#work')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-400">hello@delightxmedia.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
              <p className="text-gray-400">Los Angeles, CA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 DelightxMedia. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;