import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent block">
                Fitness Journey
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get AI-powered personalized workout and nutrition plans tailored to your unique fitness goals. 
              Start your transformation today with cutting-edge technology and expert guidance.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link 
              to="/register" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <span className="relative z-10">🚀 Start Your Journey</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </Link>
            <Link 
              to="/workouts" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-purple-100 transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transform hover:scale-105 hover:shadow-xl"
            >
              <span className="relative z-10">💪 Explore Workouts</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 container mx-auto px-4 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Experience the future of fitness with our innovative features designed for your success
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full text-3xl mb-6 shadow-lg">
                  💪
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Workouts</h3>
                <p className="text-gray-200 leading-relaxed">
                  Smart algorithms create personalized workout plans that adapt to your fitness level and goals for maximum results.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full text-3xl mb-6 shadow-lg">
                  🥗
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Smart Nutrition</h3>
                <p className="text-gray-200 leading-relaxed">
                  Customized meal plans and nutrition guidance that perfectly complement your workout routine and lifestyle.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full text-3xl mb-6 shadow-lg">
                  📱
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Progress Tracking</h3>
                <p className="text-gray-200 leading-relaxed">
                  Advanced analytics and real-time progress monitoring to keep you motivated and on track to your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 container mx-auto px-4 pb-20">
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-30"></div>
            <div className="relative bg-white/10 backdrop-blur-lg p-12 rounded-3xl border border-white/20">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Life?
              </h3>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Join thousands of users who have already achieved their fitness goals with our platform.
              </p>
              <Link 
                to="/register"
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-purple-900 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full hover:from-yellow-300 hover:to-orange-300 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                Get Started Free Today 🎉
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
