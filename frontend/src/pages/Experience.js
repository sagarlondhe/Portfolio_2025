import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getExperiences } from '../services/api';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await getExperiences();
        setExperiences(response.data);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchExperiences();
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
          <h1 className="section-title">My Experience</h1>
          
          <div className="relative">
            {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-cyan-500 hidden md:block"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp._id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative pl-0 md:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 hidden md:flex items-center justify-center">
                    <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-md z-10">
                      <FaBriefcase className="text-white text-xl" />
                    </div>
                  </div>
                  
                  <div className="card ml-0 md:ml-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-cyan-600 mb-3">
                          {exp.title}
                        </h2>
                        <div className="flex items-center text-cyan-600 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center mr-3 shadow-sm">
                            <FaBriefcase className="text-cyan-600 text-sm" />
                          </div>
                          <span className="font-bold text-lg">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mr-3">
                            <FaMapMarkerAlt className="text-gray-500 text-sm" />
                          </div>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                        <div className="flex items-center text-gray-700 bg-cyan-100 px-4 py-2 rounded-lg shadow-sm">
                        <FaCalendar className="mr-2 text-cyan-600" />
                        <span className="font-semibold">
                          {formatDate(exp.startDate)} - {' '}
                          {exp.isCurrent ? (
                            <span className="text-cyan-600 font-bold">Present</span>
                          ) : (
                            formatDate(exp.endDate)
                          )}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="list-none space-y-3 text-gray-600 mb-6">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-cyan-500 mr-3 mt-1">▸</span>
                          <span className="leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="pt-6 border-t border-gray-200">
                        <p className="text-sm font-semibold text-gray-500 mb-3">Technologies Used:</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                                className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold border border-cyan-200 shadow-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Experience;

