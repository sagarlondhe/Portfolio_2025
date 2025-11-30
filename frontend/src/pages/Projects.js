import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getProjects } from '../services/api';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

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
          <h1 className="section-title">My Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card flex flex-col group overflow-hidden"
              >
                {project.imageUrl ? (
                  <div className="relative overflow-hidden rounded-xl mb-6 -mx-2 -mt-2">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ) : (
                  <div className="w-full h-48 bg-cyan-500 rounded-xl mb-6 -mx-2 -mt-2 flex items-center justify-center shadow-md">
                    <FaCode className="text-white text-6xl opacity-80" />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center mr-3 shadow-sm">
                      <FaCode className="text-cyan-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-cyan-600">{project.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  {project.features && project.features.length > 0 && (
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 mb-6">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-cyan-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                          className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-200 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4 border-t border-gray-200">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-cyan-600 text-gray-700 hover:text-white rounded-lg transition-all duration-300 font-semibold group/link border border-gray-200 shadow-sm"
                    >
                      <FaGithub className="group-hover/link:scale-110 transition-transform" /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:shadow-xl transition-all duration-300 font-semibold group/link flex-1 justify-center shadow-lg hover:bg-cyan-600"
                    >
                      <FaExternalLinkAlt className="group-hover/link:scale-110 transition-transform" /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;

