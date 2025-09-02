import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';

export default function Dashboard({ user, setUser }) {
  const [plans, setPlans] = useState(null);
  const [error, setError] = useState('');
  const [bmi, setBmi] = useState(null);

  useEffect(() => {
    API.get('/plans')
      .then(res => setPlans(res.data))
      .catch(() => setError('Failed to fetch plans'));
      
    // Calculate BMI if user data is available
    if (user?.height && user?.weight) {
      const heightInM = user.height / 100;
      const calculatedBmi = (user.weight / (heightInM * heightInM)).toFixed(1);
      setBmi(calculatedBmi);
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) return { category: 'Underweight', color: 'text-cyan-300' };
    if (bmi < 25) return { category: 'Normal', color: 'text-emerald-300' };
    if (bmi < 30) return { category: 'Overweight', color: 'text-amber-300' };
    return { category: 'Obese', color: 'text-red-300' };
  };

  if (!user) return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="glass rounded-2xl p-8">
        <p className="text-white text-xl">Please log in to view your dashboard.</p>
      </div>
    </div>
  );

  const bmiInfo = bmi ? getBmiCategory(parseFloat(bmi)) : null;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        <div className="glass rounded-3xl p-8 mb-8">
          <div className="flex justify-between items-start mb-8">
            <div className="animate-float">
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gradient-animate">
                Welcome back, {user.name}! 👋
              </h2>
              <p className="text-gray-300 text-lg">@{user.username}</p>
            </div>
            <button 
              onClick={handleLogout} 
              className="glass text-white px-6 py-3 rounded-xl hover:bg-red-500/30 transition-all duration-300 btn-glow"
            >
              Logout
            </button>
          </div>

          {/* User Profile Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="glass rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-2">🎂</div>
              <div className="text-3xl font-bold text-cyan-300">{user.age}</div>
              <div className="text-sm text-gray-300">Years Old</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-2">📏</div>
              <div className="text-3xl font-bold text-emerald-300">{user.height} cm</div>
              <div className="text-sm text-gray-300">Height</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-2">⚖️</div>
              <div className="text-3xl font-bold text-purple-300">{user.weight} kg</div>
              <div className="text-sm text-gray-300">Weight</div>
            </div>
            {bmi && (
              <div className="glass rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl mb-2">📊</div>
                <div className={`text-3xl font-bold ${bmiInfo.color}`}>{bmi}</div>
                <div className="text-sm text-gray-300">BMI ({bmiInfo.category})</div>
              </div>
            )}
          </div>

          {/* Fitness Profile */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                <span className="text-2xl">💪</span>
                Fitness Profile
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-gray-300">Level:</span>
                  <span className={`ml-2 px-3 py-1 rounded-full text-sm font-medium ${
                    user.fitnessLevel === 'Beginner' ? 'bg-emerald-500/20 text-emerald-300' :
                    user.fitnessLevel === 'Intermediate' ? 'bg-amber-500/20 text-amber-300' :
                    'bg-red-500/20 text-red-300'
                  }`}>
                    {user.fitnessLevel}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-gray-300">Activity:</span>
                  <span className="ml-2 text-white">{user.activityLevel}</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Goals
              </h3>
              <div className="flex flex-wrap gap-2">
                {user.fitnessGoals?.map((goal, index) => (
                  <span key={index} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                    {goal}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Workout Plans */}
          <div className="mb-8">
            <h3 className="text-3xl font-semibold mb-6 text-white flex items-center gap-3">
              <span className="text-3xl">📋</span>
              Your Personalized Plans
            </h3>
            {error && (
              <div className="glass rounded-2xl p-4 mb-6 border border-red-500/50">
                <p className="text-red-300">{error}</p>
              </div>
            )}
            
            {plans ? (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <h4 className="font-semibold text-white mb-4 flex items-center gap-2 text-lg">
                    <span className="text-2xl">💪</span>
                    Workout Plan
                  </h4>
                  <ul className="space-y-3">
                    {plans.workout.map((w, i) => (
                      <li key={i} className="flex items-center text-cyan-300">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="glass rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <h4 className="font-semibold text-white mb-4 flex items-center gap-2 text-lg">
                    <span className="text-2xl">🥗</span>
                    Nutrition Plan
                  </h4>
                  <ul className="space-y-3">
                    {plans.nutrition.map((n, i) => (
                      <li key={i} className="flex items-center text-emerald-300">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4 animate-pulse">⏳</div>
                <p className="text-gray-300 text-lg">Loading your personalized plans...</p>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="border-t border-white/20 pt-8">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              Quick Actions
            </h3>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/workouts" 
                className="glass text-white px-8 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300 flex items-center gap-3 text-lg font-semibold btn-glow"
              >
                🏋️‍♂️ Browse Workouts
              </Link>
              <Link 
                to="/favorites" 
                className="glass text-white px-8 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300 flex items-center gap-3 text-lg font-semibold btn-glow"
              >
                ❤️ My Favorites
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
