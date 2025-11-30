const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  professionalSummary: {
    type: String,
    required: true
  },
  resumeUrl: {
    type: String
  },
  cvUrl: {
    type: String
  },
  socialLinks: {
    linkedin: String,
    github: String,
    twitter: String,
    instagram: String
  },
  profileImage: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);

