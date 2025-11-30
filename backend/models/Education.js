const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true
  },
  institution: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  isPursuing: {
    type: Boolean,
    default: false
  },
  grade: {
    type: String
  },
  description: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Education', educationSchema);

