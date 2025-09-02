const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { 
    username, 
    email, 
    password, 
    name, 
    age, 
    height, 
    weight, 
    fitnessLevel, 
    fitnessGoals, 
    medicalConditions, 
    activityLevel 
  } = req.body;
  
  try {
    // Check if user already exists
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ msg: 'User already exists' });
    
    // Validate required fields
    if (!name || !age || !height || !weight || !fitnessLevel || !activityLevel) {
      return res.status(400).json({ msg: 'All profile fields are required' });
    }
    
    // Hash password
    const hash = await bcrypt.hash(password, 10);
    
    // Create user with profile data
    const user = new User({ 
      username, 
      email, 
      password: hash,
      name,
      age: parseInt(age),
      height: parseInt(height),
      weight: parseInt(weight),
      fitnessLevel,
      fitnessGoals: Array.isArray(fitnessGoals) ? fitnessGoals : [fitnessGoals],
      medicalConditions: medicalConditions || '',
      activityLevel
    });
    
    await user.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ 
      token, 
      user: { 
        id: user._id, 
        username: user.username, 
        email: user.email,
        name: user.name,
        age: user.age,
        height: user.height,
        weight: user.weight,
        fitnessLevel: user.fitnessLevel,
        fitnessGoals: user.fitnessGoals,
        activityLevel: user.activityLevel
      } 
    });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
