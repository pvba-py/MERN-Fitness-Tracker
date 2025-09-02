import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addToFavorites, isFavorite } from '../../utils/favorites';

export default function BeginnerFullBody() {
  const [isInFavorites, setIsInFavorites] = useState(false);
  const [showFavoriteMessage, setShowFavoriteMessage] = useState('');

  const workoutData = {
    id: 1,
    name: 'Beginner Full Body',
    duration: '30 min',
    difficulty: 'Easy',
    route: '/workouts/beginner-full-body'
  };

  useEffect(() => {
    setIsInFavorites(isFavorite(workoutData.id));
  }, []);

  const handleAddToFavorites = () => {
    const added = addToFavorites(workoutData);
    if (added) {
      setIsInFavorites(true);
      setShowFavoriteMessage('Added to favorites! ❤️');
    } else {
      setShowFavoriteMessage('Already in favorites!');
    }
    setTimeout(() => setShowFavoriteMessage(''), 3000);
  };
  const exercises = [
    { name: 'Push-ups', sets: 3, reps: '8-12', rest: '60s', description: 'Start in plank position, lower chest to ground, push back up' },
    { name: 'Bodyweight Squats', sets: 3, reps: '12-15', rest: '60s', description: 'Stand with feet shoulder-width apart, lower hips back and down' },
    { name: 'Plank', sets: 3, reps: '30-45s', rest: '60s', description: 'Hold straight line from head to heels, engage core' },
    { name: 'Lunges', sets: 3, reps: '10 each leg', rest: '60s', description: 'Step forward, lower back knee toward ground' },
    { name: 'Mountain Climbers', sets: 3, reps: '30s', rest: '60s', description: 'In plank position, alternate bringing knees to chest' },
    { name: 'Glute Bridges', sets: 3, reps: '12-15', rest: '60s', description: 'Lie on back, lift hips up squeezing glutes' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/workouts" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Workouts
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">Beginner Full Body</h1>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>⏱️ 30 minutes</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Easy</span>
              <span>🎯 Full Body</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Workout Overview</h2>
            <p className="text-gray-700 mb-4">
              Perfect for beginners! This full-body workout targets all major muscle groups using bodyweight exercises. 
              No equipment needed - just your body and determination.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Instructions:</h3>
              <ul className="text-blue-700 space-y-1">
                <li>• Warm up for 5 minutes before starting</li>
                <li>• Complete all exercises in order</li>
                <li>• Rest 60 seconds between exercises</li>
                <li>• Rest 2-3 minutes between sets</li>
                <li>• Cool down and stretch after workout</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Exercises</h2>
            <div className="space-y-4">
              {exercises.map((exercise, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{index + 1}. {exercise.name}</h3>
                    <div className="text-right text-sm text-gray-600">
                      <div>{exercise.sets} sets × {exercise.reps}</div>
                      <div>Rest: {exercise.rest}</div>
                    </div>
                  </div>
                  <p className="text-gray-700">{exercise.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <Link
              to="/workouts/beginner-full-body/session"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Start Workout
            </Link>
            <button 
              onClick={handleAddToFavorites}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                isInFavorites 
                  ? 'bg-pink-100 text-pink-700' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {isInFavorites ? '❤️ Favorited' : 'Save to Favorites'}
            </button>
          </div>
          
          {showFavoriteMessage && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
              {showFavoriteMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
