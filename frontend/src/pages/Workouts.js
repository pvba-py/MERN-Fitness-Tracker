import React from 'react';
import { Link } from 'react-router-dom';

export default function Workouts({ user }) {
  const sampleWorkouts = [
    { id: 1, name: 'Beginner Full Body', duration: '30 min', difficulty: 'Easy', route: '/workouts/beginner-full-body', icon: '🏃‍♀️' },
    { id: 2, name: 'HIIT Cardio Blast', duration: '20 min', difficulty: 'Hard', route: '/workouts/hiit-cardio-blast', icon: '🔥' },
    { id: 3, name: 'Upper Body Strength', duration: '45 min', difficulty: 'Medium', route: '/workouts/upper-body-strength', icon: '💪' },
    { id: 4, name: 'Yoga Flow', duration: '60 min', difficulty: 'Easy', route: '/workouts/yoga-flow', icon: '🧘‍♀️' },
    { id: 5, name: 'Core Destroyer', duration: '15 min', difficulty: 'Hard', route: '/workouts/core-destroyer', icon: '⚡' },
    { id: 6, name: 'Lower Body Power', duration: '40 min', difficulty: 'Medium', route: '/workouts/lower-body-power', icon: '🦵' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {user ? (
          <div className="text-center mb-12 animate-float">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient-animate">
              Welcome back, {user.name}! 💪
            </h1>
            <div className="glass rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-white text-lg mb-2">
                Fitness Level: <span className="font-semibold text-cyan-300">{user.fitnessLevel}</span>
              </p>
              <p className="text-white text-lg">
                Goals: <span className="font-semibold text-emerald-300">{user.fitnessGoals?.join(', ')}</span>
              </p>
              <p className="text-gray-300 mt-4 text-base">Choose a workout that matches your goals!</p>
            </div>
          </div>
        ) : (
          <div className="text-center mb-12 animate-float">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient-animate mb-4">Workout Library</h1>
            <div className="glass rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-white text-lg">Browse our collection of workout routines. Sign up to get personalized recommendations!</p>
            </div>
          </div>
        )}
        
        <div className="text-center mb-12">
          <Link 
            to="/favorites"
            className="glass text-white px-8 py-4 rounded-2xl hover:bg-white/20 transition inline-flex items-center gap-3 text-lg font-semibold btn-glow"
          >
            ❤️ View Favorites
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleWorkouts.map((workout, index) => (
            <div 
              key={workout.id} 
              className="glass rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-float"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{workout.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{workout.name}</h3>
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-300 mb-4">
                <span className="bg-white/10 px-3 py-1 rounded-full">⏱️ {workout.duration}</span>
                <span className={`px-3 py-1 rounded-full font-medium ${
                  workout.difficulty === 'Easy' ? 'bg-emerald-500/20 text-emerald-300' :
                  workout.difficulty === 'Medium' ? 'bg-amber-500/20 text-amber-300' :
                  'bg-red-500/20 text-red-300'
                }`}>
                  {workout.difficulty}
                </span>
              </div>
              
              {/* Personalized recommendations */}
              {user && (
                <div className="mb-4 space-y-2">
                  {user.fitnessLevel === 'Beginner' && workout.difficulty === 'Easy' && (
                    <span className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full inline-block">✨ Perfect for you!</span>
                  )}
                  {user.fitnessLevel === 'Intermediate' && workout.difficulty === 'Medium' && (
                    <span className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full inline-block">✨ Recommended!</span>
                  )}
                  {user.fitnessLevel === 'Advanced' && workout.difficulty === 'Hard' && (
                    <span className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full inline-block">✨ Challenge yourself!</span>
                  )}
                  {user.fitnessGoals?.includes('Weight Loss') && (workout.name.includes('HIIT') || workout.name.includes('Cardio')) && (
                    <span className="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full inline-block ml-1">🎯 Goal match!</span>
                  )}
                  {user.fitnessGoals?.includes('Flexibility') && workout.name.includes('Yoga') && (
                    <span className="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full inline-block ml-1">🎯 Goal match!</span>
                  )}
                </div>
              )}
              
              <Link 
                to={workout.route}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 block text-center font-semibold btn-glow"
              >
                View Workout
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
