import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  const staticProfile = {
    name: 'Sagar Dnyaneshwar Londhe',
    title: 'Software Developer',
    email: 'londhesagar2000@gmail.com',
    phone: '+91-7028661897',
    location: 'Mumbai, Maharashtra',
    professionalSummary: 'Software Developer with hands-on experience in developing dynamic web applications, RESTful APIs, and MongoDB data models. Skilled in React.js, Node.js, Express.js, and MongoDB with a strong focus on scalable architecture, clean code, and performance optimization. Passionate about building efficient, secure, and user-friendly software solutions.'
  };

  return (
    <div className="pt-24">
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">About Me</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              className="card"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center text-white text-3xl font-bold mr-4 shadow-md">
                  {staticProfile.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-cyan-600">
                    {staticProfile.name}
                  </h2>
                  <h3 className="text-xl font-semibold text-gray-600 mt-1">
                    {staticProfile.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                {staticProfile.professionalSummary}
              </p>
              
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <div className="flex items-center text-gray-700 group">
                  <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center mr-4 group-hover:bg-cyan-200 transition-all shadow-sm">
                    <FaEnvelope className="text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href={`mailto:${staticProfile.email}`} className="text-gray-800 hover:text-cyan-600 transition-colors font-medium">
                      {staticProfile.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center text-gray-700 group">
                  <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center mr-4 group-hover:bg-cyan-200 transition-all shadow-sm">
                    <FaPhone className="text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href={`tel:${staticProfile.phone}`} className="text-gray-800 hover:text-cyan-600 transition-colors font-medium">
                      {staticProfile.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center text-gray-700 group">
                  <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center mr-4 group-hover:bg-cyan-200 transition-all shadow-sm">
                    <FaMapMarkerAlt className="text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-900 font-medium">{staticProfile.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="card"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-cyan-600">Professional Summary</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
              I am a dedicated <span className="font-semibold text-cyan-600">Software Developer</span> with a passion for creating innovative web solutions. 
                  My expertise lies in building scalable applications using modern technologies and best practices.
                </p>
                <p>
                  With experience in both frontend and backend development, I bring a comprehensive understanding 
                  of the full software development lifecycle. I am committed to writing clean, maintainable code 
                  and delivering high-quality solutions that meet business requirements.
                </p>
                <p>
                  My technical skills include <span className="font-semibold">React.js</span> for building dynamic user interfaces, 
                  <span className="font-semibold"> Node.js</span> and <span className="font-semibold">Express.js</span> for robust backend services, 
                  and <span className="font-semibold">MongoDB</span> for efficient data management. I am also experienced in 
                  implementing authentication systems, RESTful API design, and working with cross-functional teams.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;

