import React from 'react';
import { Link } from 'react-router-dom';

export default function HIITCardioBlast() {
  const exercises = [
    { name: 'Jumping Jacks', duration: '45s', rest: '15s', description: 'Jump feet apart while raising arms overhead, return to start' },
    { name: 'Burpees', duration: '30s', rest: '30s', description: 'Squat down, jump back to plank, push-up, jump forward, jump up' },
    { name: 'High Knees', duration: '45s', rest: '15s', description: 'Run in place bringing knees up to hip level' },
    { name: 'Mountain Climbers', duration: '45s', rest: '15s', description: 'In plank position, rapidly alternate bringing knees to chest' },
    { name: 'Jump Squats', duration: '30s', rest: '30s', description: 'Perform squat then jump explosively, land softly' },
    { name: 'Plank Jacks', duration: '30s', rest: '30s', description: 'In plank position, jump feet apart and together' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/workouts" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Workouts
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">HIIT Cardio Blast</h1>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>⏱️ 20 minutes</span>
              <span className="bg-red-100 text-red-700 px-2 py-1 rounded">Hard</span>
              <span>🔥 Cardio/HIIT</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Workout Overview</h2>
            <p className="text-gray-700 mb-4">
              High-intensity interval training that will torch calories and boost your cardiovascular fitness. 
              This fast-paced workout alternates between intense exercise and short recovery periods.
            </p>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2">HIIT Protocol:</h3>
              <ul className="text-red-700 space-y-1">
                <li>• 3 rounds of the circuit</li>
                <li>• Work at maximum intensity during exercise periods</li>
                <li>• Use rest periods to catch your breath</li>
                <li>• Stay hydrated throughout</li>
                <li>• Listen to your body - modify if needed</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">HIIT Circuit</h2>
            <div className="space-y-4">
              {exercises.map((exercise, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{index + 1}. {exercise.name}</h3>
                    <div className="text-right text-sm text-gray-600">
                      <div className="font-semibold text-red-600">{exercise.duration} work</div>
                      <div className="text-green-600">{exercise.rest} rest</div>
                    </div>
                  </div>
                  <p className="text-gray-700">{exercise.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
              <p className="text-yellow-800 font-semibold">Complete this circuit 3 times with 2 minutes rest between rounds</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
              Start HIIT Workout
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
              Save to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
