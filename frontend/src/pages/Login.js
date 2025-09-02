import React, { useState } from 'react';
import API from '../api';

export default function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await API.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
    } catch (err) {
      setError('Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="glass rounded-3xl p-8 backdrop-blur-lg">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gradient-animate mb-2">Welcome Back</h2>
            <p className="text-gray-300">Sign in to continue your fitness journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="glass border border-red-500/50 p-4 rounded-xl">
                <p className="text-red-300 text-center">{error}</p>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input 
                  className="w-full glass rounded-xl p-4 text-white placeholder-gray-400 border border-white/20 focus:border-cyan-400 focus:outline-none transition-all duration-300" 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  required 
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Password</label>
                <input 
                  className="w-full glass rounded-xl p-4 text-white placeholder-gray-400 border border-white/20 focus:border-cyan-400 focus:outline-none transition-all duration-300" 
                  type="password" 
                  placeholder="Enter your password" 
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                  required 
                />
              </div>
            </div>

            <button 
              className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 btn-glow ${
                isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:from-purple-700 hover:to-pink-700'
              }`} 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing In...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-300">
              Don't have an account? 
              <a href="/register" className="text-cyan-400 hover:text-cyan-300 font-medium ml-1 transition-colors duration-300">
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
