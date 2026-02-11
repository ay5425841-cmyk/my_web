import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Palette, Code, Megaphone, Smartphone, Globe, BarChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      number: '01',
      icon: Palette,
      title: 'Brand Identity',
      description: 'We create distinctive brand identities that capture the essence of your business and resonate with your target audience through strategic design thinking.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy']
    },
    {
      number: '02',
      icon: Code,
      title: 'Web Development',
      description: 'Our development team creates fast, secure, and scalable websites using the latest technologies and best practices in web development.',
      features: ['Custom Development', 'E-commerce', 'CMS Integration', 'Performance Optimization']
    },
    {
      number: '03',
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'We design and develop native and cross-platform mobile applications that provide exceptional user experiences across all devices.',
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'App Store Optimization']
    },
    {
      number: '04',
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Our marketing strategies help you reach your target audience effectively and drive meaningful engagement that converts into business growth.',
      features: ['SEO Optimization', 'Social Media', 'Content Marketing', 'PPC Campaigns']
    },
    {
      number: '05',
      icon: Globe,
      title: 'Web Design',
      description: 'We create beautiful, user-friendly websites that not only look great but also provide exceptional user experiences and drive conversions.',
      features: ['UI/UX Design', 'Responsive Design', 'Prototyping', 'User Research']
    },
    {
      number: '06',
      icon: BarChart,
      title: 'Analytics & SEO',
      description: 'We help you understand your audience better and improve your online visibility through comprehensive analytics and SEO strategies.',
      features: ['Google Analytics', 'SEO Audit', 'Keyword Research', 'Performance Tracking']
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
            What we
            <br />
            <span className="font-normal">can do for you</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of digital services designed to help your 
            business succeed in today's competitive digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-6xl font-light text-gray-200 group-hover:text-gray-300 transition-colors">
                  {service.number}
                </div>
                <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors">
                  <service.icon className="w-6 h-6 text-gray-700" />
                </div>
              </div>

              <h3 className="text-2xl font-light text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors group-hover:translate-x-1 transform transition-transform">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-light text-gray-900 mb-4">
            Ready to start your project?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our comprehensive digital services.
          </p>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-black text-white px-8 py-4 text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;