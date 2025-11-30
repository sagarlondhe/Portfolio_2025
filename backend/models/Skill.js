const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Programming Languages', 'Web Technologies', 'Frameworks & Libraries', 'Databases', 'Tools & Platforms', 'Operating Systems']
  },
  proficiency: {
    type: Number,
    min: 0,
    max: 100,
    default: 50
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Skill', skillSchema);

