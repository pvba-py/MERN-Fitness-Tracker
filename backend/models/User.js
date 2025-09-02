const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  height: { type: Number, required: true }, // in cm
  weight: { type: Number, required: true }, // in kg
  fitnessLevel: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
  fitnessGoals: [{ type: String }], // e.g., ['Weight Loss', 'Muscle Building', 'Endurance']
  medicalConditions: { type: String, default: '' }, // Optional health conditions
  activityLevel: { type: String, enum: ['Sedentary', 'Lightly Active', 'Moderately Active', 'Very Active'], required: true },
  createdAt: { type: Date, default: Date.now },
  plans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Plan' }]
});

module.exports = mongoose.model('User', UserSchema);
