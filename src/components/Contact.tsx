import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_ql9bxy9';
const TEMPLATE_ID = 'template_kuuuvvr';
const USER_ID = 'Pr1wIwJyOZRWTSnHr';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
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
    const errors = {
      name: '',
      email: '',
      message: '',
    };

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
    
    // Clear error when user starts typing
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
          subject: formData.subject,
          message: formData.message,
        },
        USER_ID
      );

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-20 transition-colors duration-300 bg-white dark:bg-gray-900"
    >
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            Get In Touch
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-blue-600 dark:bg-blue-400"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Have a project in mind or want to collaborate? Feel free to reach out through the form below or my contact details.
          </p>
        </div>

        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Contact Info */}
          <div className="p-8 rounded-lg shadow-md bg-gray-50 dark:bg-gray-800">
            <h3 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 mr-4 text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-medium text-gray-800 dark:text-white">Email</h4>
                  <a href="mailto:nshung0105@gmail.com" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                    nshung0105@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 mr-4 text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-medium text-gray-800 dark:text-white">Phone</h4>
                  <a href="tel:+84857000163" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  +84-857000163
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 mr-4 text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-medium text-gray-800 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Tp Đà Nẵng, Việt Nam
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="mb-4 text-lg font-medium text-gray-800 dark:text-white">Follow Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/NSHUNG15" 
                  className="p-3 text-gray-700 transition-colors duration-300 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400"
                  aria-label="GitHub profile"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                {/* <a 
                  href="#" 
                  className="p-3 text-gray-700 transition-colors duration-300 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400"
                  aria-label="LinkedIn profile"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a 
                  href="#" 
                  className="p-3 text-gray-700 transition-colors duration-300 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400"
                  aria-label="Twitter profile"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a> */}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="p-8 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-800">
            <h3 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    formErrors.name 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500'
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 transition-colors duration-300`}
                  placeholder="Nguyễn Sinh Hùng"
                />
                {formErrors.name && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    formErrors.email 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500'
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 transition-colors duration-300`}
                  placeholder="john@example.com"
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-gray-900 transition-colors duration-300 bg-white border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    formErrors.message 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500'
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 transition-colors duration-300`}
                  placeholder="Hello, I would like to talk about..."
                ></textarea>
                {formErrors.message && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white font-medium transform transition-all duration-300 hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-4 h-4 mr-2 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <p className="mt-4 text-sm text-center text-green-600 dark:text-green-400">
                  Your message has been sent successfully! I'll get back to you soon.
                </p>
              )}
              
              {submitStatus === 'error' && (
                <p className="mt-4 text-sm text-center text-red-600 dark:text-red-400">
                  There was an error sending your message. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;