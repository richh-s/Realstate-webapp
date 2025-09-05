'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { buttonTapAnimation, formSuccessVariants } from '@/lib/motion';

export default function ContactForm({ agentName, propertyTitle }: { agentName: string; propertyTitle: string; }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: `Hi ${agentName}, I'm interested in this property.` });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string,string>>({});

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const validate = () => {
    const err: Record<string,string> = {};
    if (!form.name.trim()) err.name = 'Name is required';
    if (!form.email.trim()) err.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) err.email = 'Email is invalid';
    if (!form.message.trim()) err.message = 'Message is required';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setForm({ name: '', email: '', phone: '', message: `Hi ${agentName}, I'm interested in this property.` });
      }, 5000);
    }, 800);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Agent</h3>
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div key="success" variants={formSuccessVariants} initial="hidden" animate="visible"
            className="flex flex-col items-center justify-center py-8" aria-live="polite">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Message Sent!</h4>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Thank you for your interest. {agentName} will contact you shortly about {propertyTitle}.
            </p>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name*</label>
              <input id="name" name="name" value={form.name} onChange={onChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300'}`} />
              {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address*</label>
              <input id="email" type="email" name="email" value={form.email} onChange={onChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300'}`} />
              {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
              <input id="phone" name="phone" value={form.phone} onChange={onChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message*</label>
              <textarea id="message" name="message" rows={4} value={form.message} onChange={onChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300'}`} />
              {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
            </div>
            <motion.button type="submit" whileTap={buttonTapAnimation}
              className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </motion.button>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
