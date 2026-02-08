import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-gray-700">Get in touch</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Let's create
              <br />
              <span className="text-gray-400">something</span>
              <br />
              amazing
            </h2>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Ready to transform your digital presence? Get in touch and let's discuss how we can elevate your brand.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <div className="text-gray-600">hello@delightxmedia.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Phone</div>
                  <div className="text-gray-600">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Location</div>
                  <div className="text-gray-600">Los Angeles, CA</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">
                    Name
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black transition-colors text-lg"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                    Email
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
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black transition-colors text-lg"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                    Message
                  </label>
                  <textarea
                    {...register('message', { required: 'Please enter a message' })}
                    rows={5}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black transition-colors text-lg resize-none"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-black text-white py-4 rounded-full font-medium text-lg flex items-center justify-center space-x-2 hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-700 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Message sent successfully! We'll get back to you within 24 hours.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Something went wrong. Please try again or contact us directly.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;