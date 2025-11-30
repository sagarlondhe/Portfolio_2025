import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCertifications } from '../services/api';
import { FaCertificate, FaCalendar, FaUniversity } from 'react-icons/fa';

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const response = await getCertifications();
        setCertifications(response.data);
      } catch (error) {
        console.error('Error fetching certifications:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCertifications();
  }, []);

  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16 bg-white">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">My Certifications</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <FaCertificate className="text-white text-4xl" />
                </div>
                <h2 className="text-2xl font-bold text-cyan-600 mb-4">
                  {cert.title}
                </h2>
                <div className="flex items-center justify-center text-cyan-600 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center mr-2 shadow-sm">
                    <FaUniversity className="text-cyan-600 text-sm" />
                  </div>
                  <span className="font-bold">{cert.issuer}</span>
                </div>
                {cert.issueDate && (
                  <div className="flex items-center justify-center text-gray-600 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mr-2">
                      <FaCalendar className="text-gray-500 text-sm" />
                    </div>
                    <span className="font-medium">{formatDate(cert.issueDate)}</span>
                  </div>
                )}
                {cert.credentialUrl && (
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-6 py-3 bg-cyan-500 text-white rounded-xl font-bold hover:shadow-lg transition-all shadow-md hover:bg-cyan-600"
                  >
                    View Certificate
                  </motion.a>
                )}
                {cert.credentialId && (
                  <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-gray-200">
                    Credential ID: <span className="font-semibold">{cert.credentialId}</span>
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Certifications;

