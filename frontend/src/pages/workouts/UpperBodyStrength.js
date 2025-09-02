import React from 'react';
import { Link } from 'react-router-dom';

export default function UpperBodyStrength() {
  const exercises = [
    { name: 'Push-ups', sets: 4, reps: '8-12', rest: '90s', description: 'Standard or modified on knees. Focus on controlled movement' },
    { name: 'Pike Push-ups', sets: 3, reps: '6-10', rest: '90s', description: 'In downward dog position, lower head toward hands' },
    { name: 'Tricep Dips', sets: 3, reps: '8-15', rest: '90s', description: 'Use chair or edge, lower body with arm strength' },
    { name: 'Plank to T', sets: 3, reps: '10 each side', rest: '90s', description: 'From plank, rotate to side plank reaching arm up' },
    { name: 'Diamond Push-ups', sets: 3, reps: '5-10', rest: '90s', description: 'Hands in diamond shape, targets triceps' },
    { name: 'Bear Crawl', sets: 3, reps: '30s forward/back', rest: '90s', description: 'Crawl on hands and feet, keep knees off ground' },
    { name: 'Arm Circles', sets: 2, reps: '15 each direction', rest: '60s', description: 'Small and large circles forward and backward' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/workouts" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Workouts
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">Upper Body Strength</h1>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>⏱️ 45 minutes</span>
              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Medium</span>
              <span>💪 Upper Body</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Workout Overview</h2>
            <p className="text-gray-700 mb-4">
              Build upper body strength and definition with this comprehensive bodyweight routine. 
              Targets chest, shoulders, triceps, and core for a complete upper body workout.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-2">Strength Tips:</h3>
              <ul className="text-orange-700 space-y-1">
                <li>• Focus on proper form over speed</li>
                <li>• Control both lifting and lowering phases</li>
                <li>• Breathe out during exertion phase</li>
                <li>• Progress by adding reps or increasing difficulty</li>
                <li>• Rest 2-3 days between upper body sessions</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Exercise Routine</h2>
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

          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Progression Options:</h3>
            <div className="text-blue-700 text-sm">
              <p>• Beginner: Use modified versions (knee push-ups, assisted dips)</p>
              <p>• Intermediate: Standard form with full reps</p>
              <p>• Advanced: Add pause reps or single-arm variations</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
              Start Strength Training
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
