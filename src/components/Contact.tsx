import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
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

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
              Let's
              <br />
              <span className="font-normal">work together</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ready to start your next project? Get in touch and let's discuss 
              how we can help bring your vision to life.
            </p>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-500 mb-1">Email</div>
                <div className="text-lg text-gray-900">hello@delightxmedia.com</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Phone</div>
                <div className="text-lg text-gray-900">+1 (555) 123-4567</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Address</div>
                <div className="text-lg text-gray-900">Los Angeles, CA</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="Your name"
                  className="w-full border-0 border-b border-gray-300 bg-transparent py-4 text-lg placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors duration-200"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  placeholder="Your email"
                  className="w-full border-0 border-b border-gray-300 bg-transparent py-4 text-lg placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors duration-200"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
                )}
              </div>

              <div>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={4}
                  placeholder="Your message"
                  className="w-full border-0 border-b border-gray-300 bg-transparent py-4 text-lg placeholder-gray-500 focus:outline-none focus:border-gray-900 transition-colors duration-200 resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;