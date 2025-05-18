const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('../models/User');
require('dotenv').config();

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Incorrect password' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Email notification
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: user.email,
      subject: 'Login Alert - ExamHelper',
      text: `Hi ${user.name},\n\nYou have successfully logged in to ExamHelper.\n\nIf this wasn't you, please reset your password.`,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (mailErr) {
      console.error("❌ Email failed:", mailErr.message);
      return res.status(500).json({ message: 'Login succeeded, but email failed to send.' });
    }

    res.json({ message: 'Login successful. Confirmation email sent.', token });

  } catch (err) {
    console.error("❌ Login error:", err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
