import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Auto-hide success message after a short delay
  useEffect(() => {
    if (!success) return undefined;
    const timer = setTimeout(() => setSuccess(false), 5000); // hide after 5s
    return () => clearTimeout(timer);
  }, [success]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Client-side POST to a form endpoint (Formspree, Getform, etc.)
    // Replace the placeholder below with your actual endpoint:
    // - Formspree: https://formspree.io/f/yourFormId
    // - Getform: https://getform.io/f/your-form-endpoint
    const FORM_ENDPOINT = 'https://formspree.io/f/movgvpwb';

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // try to read error message from provider
        let errMsg = 'Failed to send message. Please try again.';
        try {
          const data = await res.json();
          if (data && data.error) errMsg = data.error;
        } catch (e) {
          /* ignore JSON parse errors */
        }
        setError(errMsg);
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24">
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">Contact Me</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div 
              className="card"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-cyan-600 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-6 mb-10">
                <motion.div 
                  className="flex items-center group p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-md">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Email</p>
                    <a href="mailto:londhesagar2000@gmail.com" className="text-gray-600 hover:text-cyan-600 transition-colors font-medium">
                      londhesagar2000@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center group p-4 rounded-xl hover:bg-purple-50/50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-md">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Phone</p>
                    <a href="tel:+917028661897" className="text-gray-600 hover:text-cyan-600 transition-colors font-medium">
                      +91-7028661897
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center group p-4 rounded-xl hover:bg-purple-50/50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-md">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Location</p>
                    <p className="text-gray-600 font-medium">Mumbai, Maharashtra, India</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <p className="font-bold text-gray-900 mb-4">Connect With Me</p>
                <div className="flex space-x-4">
                  {[
                    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/sagar-londhe29', label: 'LinkedIn' },
                    { icon: FaEnvelope, url: 'mailto:londhesagar2000@gmail.com', label: 'Email' },
                    { icon: FaPhone, url: 'tel:+917028661897', label: 'Phone' },
                  ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target={social.url.startsWith('http') ? '_blank' : undefined}
                      rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center text-white hover:shadow-lg transition-all shadow-md hover:bg-cyan-600"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="card"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-cyan-700 mb-6">Send Message</h2>
              
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 text-green-800 rounded-xl border border-green-200"
                >
                  ✓ Thank you for your message! I will get back to you soon.
                </motion.div>
              )}
              
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-100 text-red-800 rounded-xl border border-red-200"
                >
                  ✗ {error}
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all bg-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all bg-white"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all resize-none bg-white"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;

