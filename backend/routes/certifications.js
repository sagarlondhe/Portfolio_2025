const express = require('express');
const router = express.Router();
const Certification = require('../models/Certification');

// Get all certifications
router.get('/', async (req, res) => {
  try {
    const certifications = await Certification.find().sort({ issueDate: -1 });
    res.json(certifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single certification
router.get('/:id', async (req, res) => {
  try {
    const certification = await Certification.findById(req.params.id);
    if (!certification) {
      return res.status(404).json({ message: 'Certification not found' });
    }
    res.json(certification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create certification
router.post('/', async (req, res) => {
  try {
    const certification = new Certification(req.body);
    await certification.save();
    res.status(201).json(certification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update certification
router.put('/:id', async (req, res) => {
  try {
    const certification = await Certification.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!certification) {
      return res.status(404).json({ message: 'Certification not found' });
    }
    res.json(certification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete certification
router.delete('/:id', async (req, res) => {
  try {
    const certification = await Certification.findByIdAndDelete(req.params.id);
    if (!certification) {
      return res.status(404).json({ message: 'Certification not found' });
    }
    res.json({ message: 'Certification deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

