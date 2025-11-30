const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// Get profile
router.get('/', async (req, res) => {
  try {
    const profile = await Profile.findOne().sort({ createdAt: -1 });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create or update profile
router.post('/', async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (profile) {
      profile = await Profile.findOneAndUpdate({}, req.body, { new: true });
    } else {
      profile = new Profile(req.body);
      await profile.save();
    }
    res.json(profile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update profile
router.put('/', async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate({}, req.body, { new: true });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

