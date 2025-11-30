const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  issuer: {
    type: String,
    required: true
  },
  issueDate: {
    type: Date
  },
  expiryDate: {
    type: Date
  },
  credentialUrl: {
    type: String
  },
  credentialId: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Certification', certificationSchema);

