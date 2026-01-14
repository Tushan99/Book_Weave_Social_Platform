import React, { useState } from 'react'
import { FiSearch, FiTrendingUp, FiUsers, FiBookOpen } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'

const HomePage = () => {
  const { user } = useAuth()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  const quickStats = [
    {
      icon: FiBookOpen,
      label: 'Books Read',
      value: user?.booksRead || 0,
      color: 'text-primary-600',
      bg: 'bg-primary-50'
    },
    {
      icon: FiUsers,
      label: 'Friends',
      value: user?.friends?.length || 0,
      color: 'text-secondary-600',
      bg: 'bg-secondary-50'
    },
    {
      icon: FiTrendingUp,
      label: 'Goal Progress',
      value: `${Math.round(((user?.booksRead || 0) / (user?.readingGoal || 12)) * 100)}%`,
      color: 'text-green-600',
      bg: 'bg-green-50'
    }
  ]

  const recentBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      cover: "https://m.media-amazon.com/images/I/812whWLbqAL._SY466_.jpg",
      status: "Currently Reading",
      rating: 4.5
    },
    {
      id: 2,
      title: "Project Hail Mary",
      author: "Andy Weir",
      cover: "https://m.media-amazon.com/images/I/91ENQs2KLAL._SY466_.jpg",
      status: "Finished",
      rating: 5
    },
    {
      id: 3,
      title: "The Thursday Murder Club",
      author: "Richard Osman",
      cover: "https://m.media-amazon.com/images/I/51UZ-EArRSL._SY445_SX342_FMwebp_.jpg",
      status: "Want to Read",
      rating: null
    }
  ]

  const friendActivity = [
    {
      id: 1,
      name: "Sarah Johnson",
      action: "finished reading",
      book: "Dune",
      time: "2 hours ago",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=3b82f6&color=fff"
    },
    {
      id: 2,
      name: "Mike Chen",
      action: "rated",
      book: "The Silent Patient",
      time: "4 hours ago",
      avatar: "https://ui-avatars.com/api/?name=Mike+Chen&background=f97316&color=fff"
    },
    {
      id: 3,
      name: "Emily Davis",
      action: "started reading",
      book: "Educated",
      time: "1 day ago",
      avatar: "https://ui-avatars.com/api/?name=Emily+Davis&background=10b981&color=fff"
    }
  ]

  const trendingBooks = [
    {
      id: 1,
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      rating: 4.8,
      reviews: 15420
    },
    {
      id: 2,
      title: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      rating: 4.6,
      reviews: 8932
    },
    {
      id: 3,
      title: "The Invisible Life of Addie LaRue",
      author: "V.E. Schwab",
      rating: 4.7,
      reviews: 12105
    }
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white"
      >
        <div className="max-w-4xl">
          <h1 className="text-4xl font-serif font-bold mb-4">
            Welcome back, {user?.name?.split(' ')[0]}!
          </h1>
          <p className="text-primary-100 text-lg mb-6">
            Ready to continue your reading journey? Discover new books and connect with fellow readers.
          </p>
          
          {/* Quick Search */}
          <form onSubmit={handleSearch} className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-primary-300" />
            </div>
            <input
              type="text"
              placeholder="Search for books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm"
            />
          </form>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200 transition-all duration-200 hover:shadow-medium hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-neutral-900">{stat.value}</p>
                </div>
                <div className={`${stat.bg} p-3 rounded-lg`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Recent Activity */}
        <div className="lg:col-span-2 space-y-8">
          {/* Recent Books */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-neutral-900">Your Recent Reads</h2>
              <Link to="/books" className="text-primary-600 hover:text-primary-700 font-medium">
                View All
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {recentBooks.map((book) => (
                <div key={book.id} className="book-card p-4">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-medium text-neutral-900 mb-1 line-clamp-2">{book.title}</h3>
                  <p className="text-sm text-neutral-600 mb-2">{book.author}</p>
                  <div className="flex items-center justify-between">
                    <span className={`badge ${
                      book.status === 'Currently Reading' ? 'badge-primary' :
                      book.status === 'Finished' ? 'badge-success' : 'badge-warning'
                    }`}>
                      {book.status}
                    </span>
                    {book.rating && (
                      <div className="flex items-center space-x-1">
                        <FiBookOpen className="w-3 h-3 text-yellow-400" />
                        <span className="text-xs text-neutral-600">{book.rating}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Trending Books */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-neutral-900">Trending Now</h2>
              <Link to="/books" className="text-primary-600 hover:text-primary-700 font-medium">
                Browse More
              </Link>
            </div>
            
            <div className="space-y-4">
              {trendingBooks.map((book, index) => (
                <div key={book.id} className="flex items-center space-x-4 p-3 hover:bg-neutral-50 rounded-lg transition-colors">
                  <div className="bg-primary-100 text-primary-600 font-bold text-lg w-8 h-8 rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-neutral-900">{book.title}</h3>
                    <p className="text-sm text-neutral-600">{book.author}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <FiTrendingUp className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium">{book.rating}</span>
                    </div>
                    <p className="text-xs text-neutral-500">{book.reviews.toLocaleString()} reviews</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column - Friend Activity & Quick Actions */}
        <div className="space-y-8">
          {/* Friend Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-neutral-900">Friend Activity</h2>
              <Link to="/friends" className="text-sm text-primary-600 hover:text-primary-700">
                View All
              </Link>
            </div>
            
            <div className="space-y-4">
              {friendActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <img
                    src={activity.avatar}
                    alt={activity.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-neutral-900">
                      <span className="font-medium">{activity.name}</span> {activity.action}{' '}
                      <span className="font-medium">{activity.book}</span>
                    </p>
                    <p className="text-xs text-neutral-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200"
          >
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Quick Actions</h2>
            
            <div className="space-y-3">
              <Link
                to="/books/add"
                className="block w-full text-left p-3 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <FiBookOpen className="w-5 h-5 text-primary-600" />
                  <span className="text-sm font-medium">Add a Book</span>
                </div>
              </Link>
              
              <Link
                to="/friends/find"
                className="block w-full text-left p-3 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <FiUsers className="w-5 h-5 text-secondary-600" />
                  <span className="text-sm font-medium">Find Friends</span>
                </div>
              </Link>
              
              <Link
                to="/search"
                className="block w-full text-left p-3 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <FiSearch className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Search Books</span>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HomePage