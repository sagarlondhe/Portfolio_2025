const express = require('express');
const router = express.Router();
const Education = require('../models/Education');

// Get all education
router.get('/', async (req, res) => {
  try {
    const education = await Education.find().sort({ endDate: -1, startDate: -1 });
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single education
router.get('/:id', async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    if (!education) {
      return res.status(404).json({ message: 'Education not found' });
    }
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create education
router.post('/', async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.status(201).json(education);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update education
router.put('/:id', async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!education) {
      return res.status(404).json({ message: 'Education not found' });
    }
    res.json(education);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete education
router.delete('/:id', async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) {
      return res.status(404).json({ message: 'Education not found' });
    }
    res.json({ message: 'Education deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

