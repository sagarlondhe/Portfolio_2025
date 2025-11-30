import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Profile API
export const getProfile = () => api.get('/profile');

// Experience API
export const getExperiences = () => api.get('/experience');
export const getExperience = (id) => api.get(`/experience/${id}`);

// Education API
export const getEducations = () => api.get('/education');
export const getEducation = (id) => api.get(`/education/${id}`);

// Skills API
export const getSkills = () => api.get('/skills');
export const getSkillsByCategory = (category) => api.get(`/skills/category/${category}`);

// Projects API
export const getProjects = () => api.get('/projects');
export const getProject = (id) => api.get(`/projects/${id}`);

// Certifications API
export const getCertifications = () => api.get('/certifications');
export const getCertification = (id) => api.get(`/certifications/${id}`);

// Contact API
export const submitContact = (data) => api.post('/contact', data);

export default api;

