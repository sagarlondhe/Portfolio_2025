import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getSkills } from '../services/api';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await getSkills();
        setSkills(response.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  const categories = ['All', ...new Set(skills.map(skill => skill.category))];
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const groupedSkills = filteredSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

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
          <h1 className="section-title">My Skills</h1>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Skills by Category */}
          <div className="space-y-10">
            {Object.entries(groupedSkills).map(([category, categorySkills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card"
              >
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white text-xl font-bold">{category.charAt(0)}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-cyan-600">{category}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill) => (
                    <div key={skill._id} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-bold text-gray-800">{skill.name}</p>
                        <span className="text-sm font-semibold text-cyan-600">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-cyan-500 rounded-full relative shadow-sm"
                        >
                          <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* All Skills Grid */}
          <motion.div 
            className="mt-16 card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
                <h2 className="text-3xl font-bold text-cyan-600 mb-8 text-center">All Skills</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, idx) => (
                <motion.span
                  key={skill._id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.02, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-5 py-2 bg-cyan-100 text-cyan-700 rounded-full font-bold hover:bg-cyan-200 transition-all shadow-sm border border-cyan-100"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;

