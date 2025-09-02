import React, { useState } from 'react';
import API from '../api';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
    age: '',
    height: '',
    weight: '',
    fitnessLevel: '',
    fitnessGoals: [],
    medicalConditions: '',
    activityLevel: ''
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fitnessGoalOptions = [
    'Weight Loss',
    'Muscle Building', 
    'Endurance',
    'Flexibility',
    'General Fitness',
    'Strength Training'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        fitnessGoals: checked 
          ? [...prev.fitnessGoals, value]
          : prev.fitnessGoals.filter(goal => goal !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await API.post('/auth/register', formData);
      setSuccess('Registration successful! You can now log in.');
      setError('');
      // Reset form
      setFormData({
        username: '',
        email: '',
        password: '',
        name: '',
        age: '',
        height: '',
        weight: '',
        fitnessLevel: '',
        fitnessGoals: [],
        medicalConditions: '',
        activityLevel: ''
      });
    } catch (err) {
      setError(err.response?.data?.msg || 'Registration failed.');
      setSuccess('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-8">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex items-center justify-center">
        <div className="glass rounded-3xl p-8 w-full max-w-4xl backdrop-blur-lg">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gradient-animate mb-2">Create Your Profile</h2>
            <p className="text-gray-300">Join us and start your personalized fitness journey</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {success && (
              <div className="glass border border-green-500/50 p-4 rounded-xl">
                <p className="text-green-300 text-center">{success}</p>
              </div>
            )}
            {error && (
              <div className="glass border border-red-500/50 p-4 rounded-xl">
                <p className="text-red-300 text-center">{error}</p>
              </div>
            )}
            
            {/* Basic Info Section */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">👤</span>
                Basic Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name *</label>
                  <input 
                    className="glass rounded-xl p-4 w-full text-white placeholder-gray-400 border border-white/20 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                    type="text" 
                    name="name"
                    placeholder="John Doe" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Username *</label>
                  <input 
                    className="glass rounded-xl p-4 w-full text-white placeholder-gray-400 border border-white/20 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                    type="text" 
                    name="username"
                    placeholder="johndoe" 
                    value={formData.username} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-white font-medium mb-2">Email *</label>
                  <input 
                    className="glass rounded-xl p-4 w-full text-white placeholder-gray-400 border border-white/20 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                    type="email" 
                    name="email"
                    placeholder="john@example.com" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-white font-medium mb-2">Password *</label>
                  <input 
                    className="glass rounded-xl p-4 w-full text-white placeholder-gray-400 border border-white/20 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                    type="password" 
                    name="password"
                    placeholder="••••••••" 
                    value={formData.password} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
            </div>

            {/* Physical Stats Section */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">📊</span>
                Physical Stats
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Age *</label>
                  <input 
                    className="glass rounded-xl p-4 w-full text-white placeholder-gray-400 border border-white/20 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                    type="number" 
                    name="age"
                    placeholder="25" 
                    min="13" 
                    max="100"
                    value={formData.age} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Height (cm) *</label>
                  <input 
                    className="glass rounded-xl p-4 w-full text-white placeholder-gray-400 border border-white/20 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                    type="number" 
                    name="height"
                    placeholder="175" 
                    min="100" 
                    max="250"
                    value={formData.height} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Weight (kg) *</label>
                  <input 
                    className="glass rounded-xl p-4 w-full text-white placeholder-gray-400 border border-white/20 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                    type="number" 
                    name="weight"
                    placeholder="70" 
                    min="30" 
                    max="300"
                    value={formData.weight} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Fitness Level *</label>
                  <select 
                    className="glass rounded-xl p-4 w-full text-white border border-white/20 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                    name="fitnessLevel"
                    value={formData.fitnessLevel} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="" className="bg-gray-800">Select Level</option>
                    <option value="Beginner" className="bg-gray-800">Beginner</option>
                    <option value="Intermediate" className="bg-gray-800">Intermediate</option>
                    <option value="Advanced" className="bg-gray-800">Advanced</option>
                  </select>
                </div>

                <div className="md:col-span-2 lg:col-span-4">
                  <label className="block text-white font-medium mb-2">Activity Level *</label>
                  <select 
                    className="glass rounded-xl p-4 w-full text-white border border-white/20 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                    name="activityLevel"
                    value={formData.activityLevel} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="" className="bg-gray-800">Select Activity Level</option>
                    <option value="Sedentary" className="bg-gray-800">Sedentary (desk job)</option>
                    <option value="Lightly Active" className="bg-gray-800">Lightly Active</option>
                    <option value="Moderately Active" className="bg-gray-800">Moderately Active</option>
                    <option value="Very Active" className="bg-gray-800">Very Active</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Fitness Goals Section */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Fitness Goals
              </h3>
              <p className="text-gray-300 mb-4">Select all that apply to your fitness journey</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {fitnessGoalOptions.map(goal => (
                  <label key={goal} className="glass rounded-xl p-3 cursor-pointer hover:bg-white/20 transition-all duration-300 flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="fitnessGoals"
                      value={goal}
                      checked={formData.fitnessGoals.includes(goal)}
                      onChange={handleChange}
                      className="form-checkbox h-4 w-4 text-cyan-400 rounded focus:ring-cyan-400 focus:ring-2"
                    />
                    <span className="text-white text-sm">{goal}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Medical Conditions Section */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🏥</span>
                Medical Information
              </h3>
              <label className="block text-white font-medium mb-2">Medical Conditions (optional)</label>
              <textarea 
                className="glass rounded-xl p-4 w-full text-white placeholder-gray-400 border border-white/20 focus:border-cyan-400 focus:outline-none transition-all duration-300"
                name="medicalConditions"
                placeholder="Any health conditions we should know about..." 
                rows="3"
                value={formData.medicalConditions} 
                onChange={handleChange}
              />
            </div>
            
            <button 
              className={`w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 btn-glow ${
                isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:from-emerald-700 hover:to-blue-700'
              }`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creating Account...
                </div>
              ) : (
                'Create Account'
              )}
            </button>

            <div className="text-center">
              <p className="text-gray-300">
                Already have an account? 
                <a href="/login" className="text-cyan-400 hover:text-cyan-300 font-medium ml-1 transition-colors duration-300">
                  Sign in here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
