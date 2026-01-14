import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const BookDetailPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/books" className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
          <FiArrowLeft className="w-5 h-5 text-neutral-600" />
        </Link>
        <h1 className="text-3xl font-serif font-bold text-neutral-900">Book Details</h1>
      </div>
      
      <div className="bg-white rounded-xl p-8 shadow-soft border border-neutral-200">
        <p className="text-neutral-600">Book detail page coming soon...</p>
      </div>
    </div>
  )
}

export default BookDetailPage