import React from 'react';
import { Link } from 'react-router-dom';

export default function LowerBodyPower() {
  const exercises = [
    { name: 'Jump Squats', sets: 4, reps: '10-15', rest: '90s', description: 'Explosive squat with jump, land softly, immediate next rep' },
    { name: 'Single Leg Deadlifts', sets: 3, reps: '8-12 each leg', rest: '90s', description: 'Balance on one leg, hinge at hips, touch ground with fingertips' },
    { name: 'Bulgarian Split Squats', sets: 3, reps: '10-15 each leg', rest: '90s', description: 'Rear foot elevated, lower into lunge position' },
    { name: 'Lateral Lunges', sets: 3, reps: '12 each side', rest: '75s', description: 'Step wide to side, sit back on one leg, push back to center' },
    { name: 'Calf Raises', sets: 4, reps: '15-20', rest: '60s', description: 'Rise up on toes, hold briefly, lower with control' },
    { name: 'Wall Sit', sets: 3, reps: '45-60s', rest: '90s', description: 'Back against wall, slide down to 90-degree squat position' },
    { name: 'Glute Bridges', sets: 3, reps: '15-20', rest: '60s', description: 'Lie on back, drive hips up squeezing glutes at top' },
    { name: 'Reverse Lunges', sets: 3, reps: '12 each leg', rest: '75s', description: 'Step backward into lunge, return to standing' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/workouts" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Workouts
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">Lower Body Power</h1>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>⏱️ 40 minutes</span>
              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Medium</span>
              <span>🦵 Lower Body</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Workout Overview</h2>
            <p className="text-gray-700 mb-4">
              Build explosive lower body power and strength with this comprehensive leg workout. 
              Targets quads, hamstrings, glutes, and calves through a mix of strength and power movements.
            </p>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-800 mb-2">Power Training Focus:</h3>
              <ul className="text-indigo-700 space-y-1">
                <li>• Explosive movements for power development</li>
                <li>• Control the eccentric (lowering) phase</li>
                <li>• Full range of motion for maximum benefit</li>
                <li>• Rest adequately between sets for power</li>
                <li>• Progress by adding reps or jump height</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Power Circuit</h2>
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

          <div className="mb-6 p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Workout Structure:</h3>
            <div className="text-green-700 text-sm space-y-1">
              <p>• <strong>Warm-up:</strong> 5-10 minutes of light movement and dynamic stretching</p>
              <p>• <strong>Main workout:</strong> Complete all exercises in order</p>
              <p>• <strong>Cool-down:</strong> 5-10 minutes of static stretching focusing on legs</p>
            </div>
          </div>

          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Progression Levels:</h3>
            <div className="text-blue-700 text-sm">
              <p>• <strong>Beginner:</strong> Reduce reps, remove jumps, use support for balance</p>
              <p>• <strong>Intermediate:</strong> Standard form and reps as prescribed</p>
              <p>• <strong>Advanced:</strong> Add pause reps, increase jump height, single-leg variations</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Power Up Your Legs
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
