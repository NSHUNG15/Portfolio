import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const SERVICE_ID = 'service_ql9bxy9';
const TEMPLATE_ID = 'template_kuuuvvr';
const USER_ID = 'Pr1wIwJyOZRWTSnHr';

const Contact: React.FC = () => {
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
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-300 dark:bg-blue-600/20 blur-[150px] rounded-full -z-10 mix-blend-multiply dark:mix-blend-lighten" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-300 dark:bg-purple-600/20 blur-[150px] rounded-full -z-10 mix-blend-multiply dark:mix-blend-lighten" />

      <div className="container px-4 mx-auto max-w-6xl">
        <motion.div
          className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl dark:text-white mb-6">
            {t('contact.get_in_touch')}
            <span className="text-blue-600 dark:text-blue-400">.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('contact.intro')} Let's build something awesome together.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 gap-12 lg:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left Column: Contact Info */}
          <motion.div 
            className="lg:col-span-2 flex flex-col gap-6"
            variants={containerVariants}
          >
            {/* Info Cards */}
            <motion.div 
              className="p-8 rounded-3xl bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl border border-white/50 dark:border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] group hover:-translate-y-1 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                  <a href="mailto:nshung0105@gmail.com" className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    nshung0105@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="p-8 rounded-3xl bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl border border-white/50 dark:border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] group hover:-translate-y-1 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</p>
                  <a href="tel:+84857000163" className="text-lg font-bold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    +84-857000163
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="p-8 rounded-3xl bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl border border-white/50 dark:border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] group hover:-translate-y-1 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Location</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    Tp Đà Nẵng, Việt Nam
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Glassmorphism Form */}
          <motion.div 
            className="lg:col-span-3 p-8 md:p-12 rounded-3xl bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl border border-white/50 dark:border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]"
            variants={itemVariants}
          >
            <h3 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
              {t('contact.form_title')}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`peer w-full px-5 py-4 pt-6 rounded-2xl border-2 transition-all duration-300 bg-white/50 dark:bg-black/20 text-gray-900 dark:text-white placeholder-transparent focus:outline-none backdrop-blur-sm ${
                      formErrors.name 
                        ? 'border-red-400 focus:border-red-500' 
                        : 'border-transparent dark:border-gray-800 focus:border-blue-500 dark:focus:border-blue-500 hover:border-gray-200 dark:hover:border-gray-700'
                    }`}
                    placeholder="Your Name"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-5 top-4 text-xs font-semibold text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-4 peer-focus:text-xs peer-focus:-translate-y-2 peer-focus:text-blue-500"
                  >
                    {t('contact.your_name')}
                  </label>
                  {formErrors.name && (
                    <motion.p className="flex items-center gap-1 mt-2 text-xs font-medium text-red-500 absolute -bottom-5 left-2">
                      <AlertCircle size={12} /> {formErrors.name}
                    </motion.p>
                  )}
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`peer w-full px-5 py-4 pt-6 rounded-2xl border-2 transition-all duration-300 bg-white/50 dark:bg-black/20 text-gray-900 dark:text-white placeholder-transparent focus:outline-none backdrop-blur-sm ${
                      formErrors.email 
                        ? 'border-red-400 focus:border-red-500' 
                        : 'border-transparent dark:border-gray-800 focus:border-blue-500 dark:focus:border-blue-500 hover:border-gray-200 dark:hover:border-gray-700'
                    }`}
                    placeholder="your@email.com"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-5 top-4 text-xs font-semibold text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-4 peer-focus:text-xs peer-focus:-translate-y-2 peer-focus:text-blue-500"
                  >
                    {t('contact.your_email')}
                  </label>
                  {formErrors.email && (
                    <motion.p className="flex items-center gap-1 mt-2 text-xs font-medium text-red-500 absolute -bottom-5 left-2">
                      <AlertCircle size={12} /> {formErrors.email}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Subject Input */}
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="peer w-full px-5 py-4 pt-6 rounded-2xl border-2 transition-all duration-300 bg-white/50 dark:bg-black/20 border-transparent dark:border-gray-800 text-gray-900 dark:text-white placeholder-transparent focus:outline-none focus:border-blue-500 hover:border-gray-200 dark:hover:border-gray-700 backdrop-blur-sm"
                  placeholder="Subject"
                />
                <label 
                  htmlFor="subject" 
                  className="absolute left-5 top-4 text-xs font-semibold text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-4 peer-focus:text-xs peer-focus:-translate-y-2 peer-focus:text-blue-500"
                >
                  {t('contact.subject')}
                </label>
              </div>

              {/* Message Input */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`peer w-full px-5 py-4 pt-8 rounded-2xl border-2 transition-all duration-300 bg-white/50 dark:bg-black/20 text-gray-900 dark:text-white placeholder-transparent focus:outline-none resize-none backdrop-blur-sm ${
                    formErrors.message 
                      ? 'border-red-400 focus:border-red-500' 
                      : 'border-transparent dark:border-gray-800 focus:border-blue-500 hover:border-gray-200 dark:hover:border-gray-700'
                  }`}
                  placeholder="Your message..."
                />
                <label 
                  htmlFor="message" 
                  className="absolute left-5 top-4 text-xs font-semibold text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-8 peer-focus:top-4 peer-focus:text-xs peer-focus:text-blue-500"
                >
                  {t('contact.your_message')}
                </label>
                {formErrors.message && (
                  <motion.p className="flex items-center gap-1 mt-2 text-xs font-medium text-red-500 absolute -bottom-5 left-2">
                    <AlertCircle size={12} /> {formErrors.message}
                  </motion.p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 mt-4 rounded-2xl flex items-center justify-center gap-3 font-bold text-lg transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-300 dark:bg-gray-800 text-gray-500 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.01]'
                }`}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-current rounded-full border-t-transparent"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    {t('contact.btn_send')}
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div 
                  className="absolute -bottom-14 left-0 right-0 py-3 px-4 rounded-xl bg-green-100/80 dark:bg-green-900/40 backdrop-blur-md border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 flex items-center justify-center gap-2 font-medium shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <CheckCircle size={18} />
                  {t('contact.success')}
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  className="absolute -bottom-14 left-0 right-0 py-3 px-4 rounded-xl bg-red-100/80 dark:bg-red-900/40 backdrop-blur-md border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 flex items-center justify-center gap-2 font-medium shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <AlertCircle size={18} />
                  {t('contact.error')}
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;