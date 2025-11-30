import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowDown } from 'react-icons/fa';
import resumePDF from '../assets/Sagar_Londhe 2025.pdf';

const Home = () => {
  const staticProfile = {
    name: 'Sagar Dnyaneshwar Londhe',
    title: 'Software Developer',
    professionalSummary: 'Software Developer with hands-on experience in developing dynamic web applications, RESTful APIs, and MongoDB data models. Skilled in React.js, Node.js, Express.js, and MongoDB with a strong focus on scalable architecture, clean code, and performance optimization. Passionate about building efficient, secure, and user-friendly software solutions.',
    resumeUrl: resumePDF,
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = staticProfile.resumeUrl;
    link.download = 'Sagar_Londhe_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-0">
      {/* Hero Section with Animated Background */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Animated Background */}
          <div className="absolute inset-0 bg-white">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-cyan-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" style={{ animationDelay: '4s' }}></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 mb-4 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hello, I'm
              </motion.p>
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 mb-4 text-shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {staticProfile.name}
              </motion.h1>
              <motion.h2 
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-cyan-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {staticProfile.title}
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {staticProfile.professionalSummary}
              </motion.p>
              <motion.div 
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <button
                  onClick={handleDownloadResume}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <FaDownload /> Download Resume
                </button>
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <span>Contact Me</span>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-20"
            >
              <a href="#about" className="inline-block animate-bounce-slow">
                <FaArrowDown className="text-purple-600 text-3xl hover:text-pink-500 transition-colors" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section id="about" className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-cyan-600">
            Explore My Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { path: '/about', title: 'About Me', desc: 'Learn more about my background and passion for development', icon: '👤' },
              { path: '/experience', title: 'Experience', desc: 'Explore my professional journey and accomplishments', icon: '💼' },
              { path: '/projects', title: 'Projects', desc: 'Check out my latest projects and portfolio', icon: '🚀' },
              { path: '/skills', title: 'Skills', desc: 'View my technical skills and expertise', icon: '⚡' },
            ].map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link 
                  to={item.path} 
                  className="card text-center group block h-full"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-cyan-600 group-hover:scale-105 transition-transform">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;

