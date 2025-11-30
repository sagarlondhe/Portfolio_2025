const express = require('express');
const router = express.Router();

// Contact form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, message, subject } = req.body;
    
    // Here you can integrate with email service like nodemailer, sendgrid, etc.
    // For now, just return success
    console.log('Contact form submission:', { name, email, subject, message });
    
    res.json({ 
      message: 'Thank you for your message! I will get back to you soon.',
      success: true 
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
});

module.exports = router;

