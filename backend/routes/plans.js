const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Dummy data for personalized plans
const samplePlans = {
  workout: ['Push-ups', 'Squats', 'Plank'],
  nutrition: ['Oats', 'Chicken', 'Broccoli']
};

// Middleware to verify JWT
function auth(req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ msg: 'Token is not valid' });
  }
}

// Get personalized plans (protected)
router.get('/', auth, (req, res) => {
  res.json({ workout: samplePlans.workout, nutrition: samplePlans.nutrition });
});

module.exports = router;
