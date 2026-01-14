import React from 'react'
import { Link } from 'react-router-dom'
import { FiHome, FiBookOpen } from 'react-icons/fi'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <FiBookOpen className="w-24 h-24 text-primary-300 mx-auto mb-4" />
          <h1 className="text-6xl font-bold text-neutral-300 mb-2">404</h1>
          <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-neutral-600 mb-8">
            Oops! The page you're looking for seems to have wandered off like a lost bookmark.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="btn btn-primary btn-lg w-full"
          >
            <FiHome className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className="btn btn-outline w-full"
          >
            Go Back
          </button>
        </div>
        
        <div className="mt-8 pt-8 border-t border-neutral-200">
          <p className="text-sm text-neutral-500">
            Lost? Try searching for a book or checking your friends' recommendations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage