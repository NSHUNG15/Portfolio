import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const SERVICE_ID = 'service_ql9bxy9';
const TEMPLATE_ID = 'template_kuuuvvr';
const USER_ID = 'Pr1wIwJyOZRWTSnHr';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    let valid = true;
    const errors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
      valid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'New Contact Message',
          message: formData.message,
        },
        USER_ID
      );

      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus('idle'), 4000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 4000);
    }

    setIsSubmitting(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="contact"
      className="py-20 transition-colors duration-300 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            Get In Touch
          </h2>
          <motion.div
            className="w-20 h-1.5 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="max-w-2xl mx-auto text-gray-800 dark:text-white">
            {t('contact.intro')}
          </p>
        </motion.div>

        <motion.div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 gap-12 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <div>
              <h3 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
                {t('contact.info_title')}
              </h3>
            </div>

            {/* Contact Cards */}
            <motion.div 
              className="p-6 transition-all duration-300 border border-blue-100 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="flex-shrink-0 p-3 text-white rounded-xl bg-gradient-to-br from-blue-600 to-purple-600"
                  whileHover={{ scale: 1.1 }}
                >
                  <Mail size={20} />
                </motion.div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-900 dark:text-white">Email</h4>
                  <a 
                    href="mailto:nshung0105@gmail.com" 
                    className="text-gray-800 transition-colors duration-300 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    nshung0105@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="p-6 transition-all duration-300 border border-blue-100 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="flex-shrink-0 p-3 text-white rounded-xl bg-gradient-to-br from-blue-600 to-purple-600"
                  whileHover={{ scale: 1.1 }}
                >
                  <Phone size={20} />
                </motion.div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-900 dark:text-white">Phone</h4>
                  <a 
                    href="tel:+84857000163" 
                    className="text-gray-800 transition-colors duration-300 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    +84-857000163
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="p-6 transition-all duration-300 border border-blue-100 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="flex-shrink-0 p-3 text-white rounded-xl bg-gradient-to-br from-blue-600 to-purple-600"
                  whileHover={{ scale: 1.1 }}
                >
                  <MapPin size={20} />
                </motion.div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-800 dark:text-white">
                    Tp Đà Nẵng, Việt Nam
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">Follow Me</h4>
              <div className="flex gap-4">
                <motion.a 
                  href="https://github.com/NSHUNG15" 
                  className="p-3 text-gray-700 transition-all duration-300 bg-gray-100 dark:text-gray-300 dark:bg-gray-800 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400"
                  whileHover={{ scale: 1.1, y: -3 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="p-8 bg-white border border-gray-200 shadow-sm rounded-2xl dark:bg-gray-800 dark:border-gray-700"
            variants={itemVariants}
          >
            <h3 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
              {t('contact.form_title')}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                  {t('contact.your_name')} <span className="text-red-500">*</span>
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none ${
                    formErrors.name 
                      ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-500/30' 
                      : 'border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30'
                  }`}
                  placeholder="Your Name"
                  whileFocus={{ scale: 1.01 }}
                />
                {formErrors.name && (
                  <motion.p 
                    className="flex items-center gap-1 mt-2 text-sm text-red-500"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle size={14} /> {formErrors.name}
                  </motion.p>
                )}
              </motion.div>

              {/* Email Input */}
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                  {t('contact.your_email')} <span className="text-red-500">*</span>
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none ${
                    formErrors.email 
                      ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-500/30' 
                      : 'border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30'
                  }`}
                  placeholder="your@email.com"
                  whileFocus={{ scale: 1.01 }}
                />
                {formErrors.email && (
                  <motion.p 
                    className="flex items-center gap-1 mt-2 text-sm text-red-500"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle size={14} /> {formErrors.email}
                  </motion.p>
                )}
              </motion.div>

              {/* Subject Input */}
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                  {t('contact.subject')}
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-gray-900 transition-all duration-300 bg-white border-2 border-gray-200 rounded-xl dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                  placeholder="Project Inquiry"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              {/* Message Input */}
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                  {t('contact.your_message')} <span className="text-red-500">*</span>
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none resize-none ${
                    formErrors.message 
                      ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-500/30' 
                      : 'border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30'
                  }`}
                  placeholder="Your message..."
                  whileFocus={{ scale: 1.01 }}
                />
                {formErrors.message && (
                  <motion.p 
                    className="flex items-center gap-1 mt-2 text-sm text-red-500"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle size={14} /> {formErrors.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-[1.02]'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-4 h-4 border-2 border-white rounded-full border-t-transparent"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    {t('contact.btn_send')}
                    <Send size={18} />
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.p 
                  className="flex items-center justify-center gap-2 text-sm text-center text-green-600 dark:text-green-400"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle size={18} />
                  {t('contact.success')}
                </motion.p>
              )}
              
              {submitStatus === 'error' && (
                <motion.p 
                  className="flex items-center justify-center gap-2 text-sm text-center text-red-600 dark:text-red-400"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <AlertCircle size={18} />
                  {t('contact.error')}
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;