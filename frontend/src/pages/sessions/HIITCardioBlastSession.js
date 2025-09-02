import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function HIITCardioBlastSession() {
  const navigate = useNavigate();
  const [currentExercise, setCurrentExercise] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isResting, setIsResting] = useState(false);
  const [workoutComplete, setWorkoutComplete] = useState(false);
  const [isRoundRest, setIsRoundRest] = useState(false);

  const exercises = [
    { name: 'Jumping Jacks', workTime: 45, restTime: 15 },
    { name: 'Burpees', workTime: 30, restTime: 30 },
    { name: 'High Knees', workTime: 45, restTime: 15 },
    { name: 'Mountain Climbers', workTime: 45, restTime: 15 },
    { name: 'Jump Squats', workTime: 30, restTime: 30 },
    { name: 'Plank Jacks', workTime: 30, restTime: 30 }
  ];

  const totalRounds = 3;
  const roundRestTime = 120; // 2 minutes between rounds

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
    
    if (isRoundRest) {
      // Round rest ended, start next round
      setIsRoundRest(false);
      setCurrentExercise(0);
      setCurrentRound(currentRound + 1);
      return;
    }
    
    if (isResting) {
      // Exercise rest ended, move to next exercise
      setIsResting(false);
      if (currentExercise < exercises.length - 1) {
        setCurrentExercise(currentExercise + 1);
      } else {
        // Round completed
        if (currentRound < totalRounds) {
          setIsRoundRest(true);
          startTimer(roundRestTime);
        } else {
          setWorkoutComplete(true);
        }
      }
    } else {
      // Exercise ended, start rest (if not last exercise of last round)
      if (currentExercise < exercises.length - 1 || currentRound < totalRounds) {
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
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md">
          <div className="text-6xl mb-4">🔥</div>
          <h2 className="text-3xl font-bold mb-4">HIIT Complete!</h2>
          <p className="text-gray-600 mb-6">Amazing work! You crushed that high-intensity workout!</p>
          <div className="space-y-3">
            <button 
              onClick={() => navigate('/workouts')}
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        <Link to="/workouts/hiit-cardio-blast" className="text-red-600 hover:text-red-800 mb-4 inline-block">
          ← Back to Workout Details
        </Link>
        
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Round {currentRound} of {totalRounds}</span>
              <span>Exercise {currentExercise + 1} of {exercises.length}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-red-600 h-3 rounded-full transition-all duration-300" 
                style={{ width: `${(((currentRound - 1) * exercises.length + currentExercise + 1) / (totalRounds * exercises.length)) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Current Exercise */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            {isRoundRest ? (
              <>
                <h2 className="text-3xl font-bold mb-2">Round Break</h2>
                <p className="text-gray-600 mb-6">Prepare for Round {currentRound + 1}</p>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold mb-2">{currentExerciseData.name}</h2>
                <p className="text-gray-600 mb-6">Round {currentRound} • Exercise {currentExercise + 1}</p>
              </>
            )}
            
            {/* Timer Display */}
            <div className="mb-8">
              <div className={`text-7xl font-bold mb-4 ${
                isRoundRest ? 'text-blue-600' : 
                isResting ? 'text-green-600' : 'text-red-600'
              }`}>
                {formatTime(timeLeft)}
              </div>
              <p className="text-xl text-gray-600">
                {isRoundRest ? '💙 Round Rest' : 
                 isResting ? '😌 Rest Time' : '🔥 GO TIME!'}
              </p>
            </div>

            {/* Controls */}
            <div className="space-y-4">
              {!isActive && timeLeft === 0 && (
                <button 
                  onClick={() => {
                    if (isRoundRest) {
                      startTimer(roundRestTime);
                    } else if (isResting) {
                      startTimer(currentExerciseData.restTime);
                    } else {
                      startTimer(currentExerciseData.workTime);
                    }
                  }}
                  className={`w-full py-4 rounded-lg text-xl font-semibold transition ${
                    isRoundRest ? 'bg-blue-600 hover:bg-blue-700' :
                    isResting ? 'bg-green-600 hover:bg-green-700' : 
                    'bg-red-600 hover:bg-red-700'
                  } text-white`}
                >
                  {isRoundRest ? 'Start Round Rest' : 
                   isResting ? 'Start Rest' : 'START!'}
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
                Skip {isRoundRest ? 'Round Rest' : isResting ? 'Rest' : 'Exercise'}
              </button>
            </div>

            {/* Exercise Instructions */}
            {!isResting && !isRoundRest && (
              <div className="mt-8 p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Exercise Tips:</h4>
                <p className="text-red-700 text-sm">
                  {currentExercise === 0 && "Jump feet apart while raising arms overhead, return to start"}
                  {currentExercise === 1 && "Squat down, jump back to plank, push-up, jump forward, jump up"}
                  {currentExercise === 2 && "Run in place bringing knees up to hip level"}
                  {currentExercise === 3 && "In plank position, rapidly alternate bringing knees to chest"}
                  {currentExercise === 4 && "Perform squat then jump explosively, land softly"}
                  {currentExercise === 5 && "In plank position, jump feet apart and together"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
