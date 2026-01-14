import React from 'react'
import { Link } from 'react-router-dom'
import { FiBookOpen } from 'react-icons/fi'

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="flex min-h-screen">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10 flex flex-col justify-center px-12 text-white">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-white p-3 rounded-2xl">
                <FiBookOpen className="w-8 h-8 text-primary-600" />
              </div>
              <h1 className="text-3xl font-bold">BookWeave</h1>
            </div>
            
            <div className="max-w-md">
              <h2 className="text-4xl font-serif font-bold mb-6 leading-tight">
                Connect Through Books
              </h2>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Discover new books, share your thoughts, and connect with fellow readers in our social reading community.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                  <span className="text-primary-100">Track your reading journey</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                  <span className="text-primary-100">Share reviews and ratings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                  <span className="text-primary-100">Connect with book lovers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                  <span className="text-primary-100">Discover personalized recommendations</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-white opacity-10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary-400 opacity-20 rounded-full blur-2xl"></div>
        </div>
        
        {/* Right Side - Auth Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center justify-center space-x-3 mb-8">
              <div className="bg-primary-600 p-3 rounded-2xl">
                <FiBookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-neutral-900">BookWeave</h1>
            </div>
            
            {children}
            
            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-sm text-neutral-600">
                By continuing, you agree to our{' '}
                <Link to="/terms" className="text-primary-600 hover:text-primary-700 font-medium">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-primary-600 hover:text-primary-700 font-medium">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout