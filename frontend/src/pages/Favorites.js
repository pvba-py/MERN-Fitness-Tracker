import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteWorkouts') || '[]');
    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (workoutId) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== workoutId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favoriteWorkouts', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-float">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient-animate mb-4">
            Favorite Workouts
          </h1>
          <div className="glass rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-white text-lg">
              Your saved workout routines for quick access.
            </p>
          </div>
        </div>
        
        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <div className="glass rounded-3xl p-12 max-w-lg mx-auto">
              <div className="text-8xl mb-6 animate-pulse">❤️</div>
              <h3 className="text-3xl font-bold mb-4 text-white">No favorites yet!</h3>
              <p className="text-gray-300 mb-8 text-lg">Start adding workouts to your favorites to see them here.</p>
              <Link 
                to="/workouts" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold text-lg btn-glow inline-block"
              >
                Browse Workouts
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((workout, index) => (
              <div 
                key={workout.id} 
                className="glass rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-float"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">❤️</div>
                  <h3 className="text-xl font-bold text-white mb-2">{workout.name}</h3>
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-300 mb-6">
                  <span className="bg-white/10 px-3 py-1 rounded-full">⏱️ {workout.duration}</span>
                  <span className={`px-3 py-1 rounded-full font-medium ${
                    workout.difficulty === 'Easy' ? 'bg-emerald-500/20 text-emerald-300' :
                    workout.difficulty === 'Medium' ? 'bg-amber-500/20 text-amber-300' :
                    'bg-red-500/20 text-red-300'
                  }`}>
                    {workout.difficulty}
                  </span>
                </div>
                
                <div className="flex gap-3">
                  <Link 
                    to={workout.route}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center font-semibold btn-glow"
                  >
                    View Workout
                  </Link>
                  <button 
                    onClick={() => removeFavorite(workout.id)}
                    className="glass border border-red-500/50 text-red-300 px-4 py-3 rounded-xl hover:bg-red-500/20 transition-all duration-300"
                    title="Remove from favorites"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
