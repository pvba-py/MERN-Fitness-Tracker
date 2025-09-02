import React from 'react';
import { Link } from 'react-router-dom';

export default function YogaFlow() {
  const poses = [
    { name: 'Mountain Pose', duration: '1 min', description: 'Stand tall, feet hip-width apart, arms at sides. Focus on breathing' },
    { name: 'Sun Salutation A', duration: '5 min', description: 'Flow through: Mountain → Forward Fold → Half Lift → Chaturanga → Upward Dog → Downward Dog' },
    { name: 'Warrior I Flow', duration: '3 min each side', description: 'Step back to Warrior I, hold, flow to High Lunge, repeat' },
    { name: 'Warrior II to Side Angle', duration: '3 min each side', description: 'Hold Warrior II, transition to Extended Side Angle' },
    { name: 'Triangle Pose', duration: '2 min each side', description: 'Straighten front leg, reach forward and down, open chest' },
    { name: 'Seated Forward Fold', duration: '3 min', description: 'Sit with legs extended, fold forward over legs' },
    { name: 'Spinal Twist', duration: '2 min each side', description: 'Seated with one leg crossed, twist gently to each side' },
    { name: 'Bridge Pose', duration: '2 min', description: 'Lie on back, lift hips, interlace fingers under back' },
    { name: 'Happy Baby', duration: '2 min', description: 'Lie on back, grab outside of feet, rock gently' },
    { name: 'Savasana', duration: '5 min', description: 'Complete relaxation, focus on breath and release' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/workouts" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Workouts
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">Yoga Flow</h1>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>⏱️ 60 minutes</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Easy</span>
              <span>🧘‍♀️ Flexibility/Mindfulness</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Session Overview</h2>
            <p className="text-gray-700 mb-4">
              A gentle yet comprehensive yoga flow that improves flexibility, balance, and mental clarity. 
              Perfect for all levels - modify poses as needed and listen to your body.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">Yoga Guidelines:</h3>
              <ul className="text-purple-700 space-y-1">
                <li>• Breathe deeply and mindfully throughout</li>
                <li>• Never force a pose - honor your limits</li>
                <li>• Use props (blocks, straps) if helpful</li>
                <li>• Focus on the journey, not the destination</li>
                <li>• Stay present and release expectations</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Yoga Sequence</h2>
            <div className="space-y-4">
              {poses.map((pose, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{index + 1}. {pose.name}</h3>
                    <div className="text-right text-sm text-gray-600">
                      <div className="font-semibold text-purple-600">{pose.duration}</div>
                    </div>
                  </div>
                  <p className="text-gray-700">{pose.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6 p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Breathing Technique:</h3>
            <p className="text-green-700 text-sm">
              Practice Ujjayi breath throughout: Inhale and exhale through the nose, creating a soft "ocean" sound. 
              This helps maintain focus and calm the nervous system.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
              Begin Yoga Practice
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
