import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getEducations } from '../services/api';
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt, FaAward } from 'react-icons/fa';

const Education = () => {
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const response = await getEducations();
        setEducations(response.data);
      } catch (error) {
        console.error('Error fetching educations:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchEducations();
  }, []);

  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
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
          <h1 className="section-title">My Education</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educations.map((edu, index) => (
              <motion.div
                key={edu._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card group"
              >
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 rounded-xl bg-cyan-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-md">
                    <FaGraduationCap className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-cyan-600 mb-3">
                      {edu.degree}
                    </h2>
                    <div className="flex items-center text-cyan-600 mb-2">
                      <div className="w-6 h-6 rounded-lg bg-cyan-100 flex items-center justify-center mr-2 shadow-sm">
                        <FaMapMarkerAlt className="text-cyan-600 text-xs" />
                      </div>
                      <span className="font-semibold">{edu.institution}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <div className="w-6 h-6 rounded-lg bg-gray-50 flex items-center justify-center mr-2">
                        <FaMapMarkerAlt className="text-gray-500 text-xs" />
                      </div>
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-3">
                      <div className="w-6 h-6 rounded-lg bg-gray-50 flex items-center justify-center mr-2">
                        <FaCalendar className="text-gray-500 text-xs" />
                      </div>
                      <span className="font-medium">
                        {edu.startDate && formatDate(edu.startDate)} - {' '}
                        {edu.isPursuing ? (
                          <span className="text-cyan-600 font-bold">Pursuing</span>
                        ) : edu.endDate ? (
                          formatDate(edu.endDate)
                        ) : (
                          'Present'
                        )}
                      </span>
                    </div>
                    {edu.grade && (
                        <div className="flex items-center bg-cyan-100 px-3 py-2 rounded-lg mt-3 border border-cyan-200 shadow-sm">
                        <FaAward className="text-cyan-600 mr-2" />
                          <span className="font-bold text-cyan-700">{edu.grade}</span>
                      </div>
                    )}
                  </div>
                </div>
                {edu.description && (
                  <p className="text-gray-600 leading-relaxed pt-4 border-t border-gray-200">{edu.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Education;

