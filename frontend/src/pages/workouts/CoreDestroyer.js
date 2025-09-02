import React from 'react';
import { Link } from 'react-router-dom';

export default function CoreDestroyer() {
  const exercises = [
    { name: 'Plank Hold', duration: '45s', rest: '15s', description: 'Hold straight line from head to heels, engage entire core' },
    { name: 'Russian Twists', duration: '45s', rest: '15s', description: 'Seated, lean back, twist torso side to side touching ground' },
    { name: 'Dead Bug', duration: '30s each side', rest: '15s', description: 'Lie on back, opposite arm and leg extensions' },
    { name: 'Mountain Climbers', duration: '45s', rest: '15s', description: 'Fast alternating knee drives from plank position' },
    { name: 'Hollow Body Hold', duration: '30s', rest: '30s', description: 'Lie on back, press lower back down, hold hollow position' },
    { name: 'Bicycle Crunches', duration: '45s', rest: '15s', description: 'Alternating elbow to opposite knee, controlled movement' },
    { name: 'Side Plank', duration: '30s each side', rest: '15s', description: 'Hold side plank, stack feet, straight line' },
    { name: 'V-Ups', duration: '30s', rest: '30s', description: 'Lie flat, simultaneously lift legs and torso to form V' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/workouts" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Workouts
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">Core Destroyer</h1>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>⏱️ 15 minutes</span>
              <span className="bg-red-100 text-red-700 px-2 py-1 rounded">Hard</span>
              <span>🔥 Core/Abs</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Workout Overview</h2>
            <p className="text-gray-700 mb-4">
              Intense 15-minute core blast targeting all areas of your midsection. This high-intensity routine 
              will challenge your core strength, stability, and endurance. Prepare to feel the burn!
            </p>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2">Core Crusher Protocol:</h3>
              <ul className="text-red-700 space-y-1">
                <li>• Complete 2 full rounds of the circuit</li>
                <li>• Maintain proper form throughout</li>
                <li>• Engage core muscles actively</li>
                <li>• Rest 1-2 minutes between rounds</li>
                <li>• Modify exercises if needed</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Core Circuit</h2>
            <div className="space-y-4">
              {exercises.map((exercise, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{index + 1}. {exercise.name}</h3>
                    <div className="text-right text-sm text-gray-600">
                      <div className="font-semibold text-red-600">{exercise.duration}</div>
                      <div className="text-green-600">Rest: {exercise.rest}</div>
                    </div>
                  </div>
                  <p className="text-gray-700">{exercise.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-orange-50 rounded-lg">
              <p className="text-orange-800 font-semibold">Complete this entire circuit twice with 90 seconds rest between rounds</p>
            </div>
          </div>

          <div className="mb-6 p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">Core Training Tips:</h3>
            <div className="text-yellow-700 text-sm space-y-1">
              <p>• Quality over quantity - focus on controlled movements</p>
              <p>• Breathe consistently - don't hold your breath</p>
              <p>• Keep lower back pressed to floor during floor exercises</p>
              <p>• Progress gradually - this workout is challenging!</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
              Destroy Your Core
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
