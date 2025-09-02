import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function BeginnerFullBodySession() {
  const navigate = useNavigate();
  const [currentExercise, setCurrentExercise] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isResting, setIsResting] = useState(false);
  const [workoutComplete, setWorkoutComplete] = useState(false);

  const exercises = [
    { name: 'Push-ups', sets: 3, reps: '8-12', workTime: 45, restTime: 60 },
    { name: 'Bodyweight Squats', sets: 3, reps: '12-15', workTime: 45, restTime: 60 },
    { name: 'Plank', sets: 3, reps: '30-45s', workTime: 45, restTime: 60 },
    { name: 'Lunges', sets: 3, reps: '10 each leg', workTime: 50, restTime: 60 },
    { name: 'Mountain Climbers', sets: 3, reps: '30s', workTime: 30, restTime: 60 },
    { name: 'Glute Bridges', sets: 3, reps: '12-15', workTime: 40, restTime: 60 }
  ];

  const currentExerciseData = exercises[currentExercise];

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      handleTimerEnd();
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startTimer = (seconds) => {
    setTimeLeft(seconds);
    setIsActive(true);
  };

  const pauseTimer = () => setIsActive(!isActive);

  const handleTimerEnd = () => {
    setIsActive(false);
    if (isResting) {
      // Rest period ended, start next set or exercise
      setIsResting(false);
      if (currentSet < currentExerciseData.sets) {
        setCurrentSet(currentSet + 1);
      } else {
        // Move to next exercise
        if (currentExercise < exercises.length - 1) {
          setCurrentExercise(currentExercise + 1);
          setCurrentSet(1);
        } else {
          // Workout complete
          setWorkoutComplete(true);
        }
      }
    } else {
      // Exercise ended, start rest
      if (currentSet < currentExerciseData.sets || currentExercise < exercises.length - 1) {
        setIsResting(true);
        startTimer(currentExerciseData.restTime);
      }
    }
  };

  const skipToNext = () => {
    setIsActive(false);
    handleTimerEnd();
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (workoutComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-4">Workout Complete!</h2>
          <p className="text-gray-600 mb-6">Great job completing your Beginner Full Body workout!</p>
          <div className="space-y-3">
            <button 
              onClick={() => navigate('/workouts')}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Back to Workouts
            </button>
            <button 
              onClick={() => window.location.reload()}
              className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition"
            >
              Restart Workout
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <Link to="/workouts/beginner-full-body" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Workout Details
        </Link>
        
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Exercise {currentExercise + 1} of {exercises.length}</span>
              <span>Set {currentSet} of {currentExerciseData.sets}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${((currentExercise * currentExerciseData.sets + currentSet) / (exercises.length * 3)) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Current Exercise */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-2">{currentExerciseData.name}</h2>
            <p className="text-gray-600 mb-6">Set {currentSet} of {currentExerciseData.sets} • {currentExerciseData.reps}</p>
            
            {/* Timer Display */}
            <div className="mb-8">
              <div className={`text-6xl font-bold mb-4 ${isResting ? 'text-green-600' : 'text-blue-600'}`}>
                {formatTime(timeLeft)}
              </div>
              <p className="text-lg text-gray-600">
                {isResting ? '😌 Rest Time' : '💪 Exercise Time'}
              </p>
            </div>

            {/* Controls */}
            <div className="space-y-4">
              {!isActive && timeLeft === 0 && !isResting && (
                <button 
                  onClick={() => startTimer(currentExerciseData.workTime)}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition"
                >
                  Start Exercise
                </button>
              )}
              
              {!isActive && timeLeft === 0 && isResting && (
                <button 
                  onClick={() => startTimer(currentExerciseData.restTime)}
                  className="w-full bg-green-600 text-white py-4 rounded-lg text-xl font-semibold hover:bg-green-700 transition"
                >
                  Start Rest
                </button>
              )}

              {isActive && (
                <button 
                  onClick={pauseTimer}
                  className="w-full bg-yellow-600 text-white py-4 rounded-lg text-xl font-semibold hover:bg-yellow-700 transition"
                >
                  {isActive ? 'Pause' : 'Resume'}
                </button>
              )}

              <button 
                onClick={skipToNext}
                className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Skip {isResting ? 'Rest' : 'Exercise'}
              </button>
            </div>

            {/* Exercise Instructions */}
            {!isResting && (
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">How to perform:</h4>
                <p className="text-blue-700 text-sm">
                  {currentExercise === 0 && "Start in plank position, lower chest to ground, push back up"}
                  {currentExercise === 1 && "Stand with feet shoulder-width apart, lower hips back and down"}
                  {currentExercise === 2 && "Hold straight line from head to heels, engage core"}
                  {currentExercise === 3 && "Step forward, lower back knee toward ground"}
                  {currentExercise === 4 && "In plank position, alternate bringing knees to chest"}
                  {currentExercise === 5 && "Lie on back, lift hips up squeezing glutes"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
