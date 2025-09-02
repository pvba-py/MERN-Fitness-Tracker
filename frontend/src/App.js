
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './index.css';

const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Home = lazy(() => import('./pages/Home'));
const Workouts = lazy(() => import('./pages/Workouts'));
const Favorites = lazy(() => import('./pages/Favorites'));
const BeginnerFullBody = lazy(() => import('./pages/workouts/BeginnerFullBody'));
const HIITCardioBlast = lazy(() => import('./pages/workouts/HIITCardioBlast'));
const UpperBodyStrength = lazy(() => import('./pages/workouts/UpperBodyStrength'));
const YogaFlow = lazy(() => import('./pages/workouts/YogaFlow'));
const CoreDestroyer = lazy(() => import('./pages/workouts/CoreDestroyer'));
const LowerBodyPower = lazy(() => import('./pages/workouts/LowerBodyPower'));
const BeginnerFullBodySession = lazy(() => import('./pages/sessions/BeginnerFullBodySession'));
const HIITCardioBlastSession = lazy(() => import('./pages/sessions/HIITCardioBlastSession'));

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Try to restore user from localStorage (token)
    const token = localStorage.getItem('token');
    if (token) {
      // In a real app, decode token or fetch user info
      // Here, just mark as logged in
      setUser({ username: 'User' });
    }
  }, []);

  return (
    <Router>
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <div className="font-bold">
          <Link to="/" className="hover:text-blue-200">Workout Generator</Link>
        </div>
        <div>
          <Link to="/workouts" className="mr-4 hover:text-blue-200">Workouts</Link>
          {user ? (
            <Link to="/dashboard" className="mr-4 hover:text-blue-200">Dashboard</Link>
          ) : (
            <>
              <Link to="/login" className="mr-4 hover:text-blue-200">Login</Link>
              <Link to="/register" className="hover:text-blue-200">Register</Link>
            </>
          )}
        </div>
      </nav>
      <Suspense fallback={<div className="p-8">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<Workouts user={user} />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/workouts/beginner-full-body" element={<BeginnerFullBody />} />
          <Route path="/workouts/beginner-full-body/session" element={<BeginnerFullBodySession />} />
          <Route path="/workouts/hiit-cardio-blast" element={<HIITCardioBlast />} />
          <Route path="/workouts/hiit-cardio-blast/session" element={<HIITCardioBlastSession />} />
          <Route path="/workouts/upper-body-strength" element={<UpperBodyStrength />} />
          <Route path="/workouts/yoga-flow" element={<YogaFlow />} />
          <Route path="/workouts/core-destroyer" element={<CoreDestroyer />} />
          <Route path="/workouts/lower-body-power" element={<LowerBodyPower />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={user ? <Dashboard user={user} setUser={setUser} /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
