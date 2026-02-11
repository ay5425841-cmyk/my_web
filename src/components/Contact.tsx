import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', data);
    reset();
    setIsSubmitting(false);
  };

  const openCalendly = () => {
    window.open('https://calendly.com/delightxmedia/consultation', '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@delightxmedia.com',
      subtitle: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'Los Angeles, CA',
      subtitle: 'Come say hello at our office'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon-Fri: 8am-5pm',
      subtitle: 'Weekend support available'
    }
  ];

  const budgetOptions = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+'
  ];

  return (
    <section id="contact" className="py-24 bg-white">
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
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Contact Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
            Let's start a
            <br />
            <span className="font-normal">conversation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? We'd love to hear about your project 
            and discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                Get in touch
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                We're here to help and answer any question you might have. 
                We look forward to hearing from you.
              </p>
              
              <button
                onClick={openCalendly}
                className="bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-200 mb-8"
              >
                Schedule a Call
              </button>
            </div>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 p-3 bg-gray-50 rounded-xl">
                    <info.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">{info.title}</h4>
                    <p className="text-gray-900 mb-1">{info.details}</p>
                    <p className="text-sm text-gray-600">{info.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                Send us a message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget
                    </label>
                    <select
                      {...register('budget')}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select budget range</option>
                      {budgetOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white px-8 py-4 text-sm font-medium hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;