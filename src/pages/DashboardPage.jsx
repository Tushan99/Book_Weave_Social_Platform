import React from 'react'
import { FiBook, FiTrendingUp, FiUsers, FiAward, FiCalendar } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useAuth } from '../contexts/AuthContext'

const DashboardPage = () => {
  const { user } = useAuth()

  const readingStats = {
    totalBooks: user?.booksRead || 0,
    goalTarget: user?.readingGoal || 12,
    currentStreak: 15,
    friendsCount: user?.friends?.length || 0,
    favoriteGenre: 'Fiction',
    averageRating: 4.2
  }

  const weeklyActivity = [
    { day: 'Mon', books: 1 },
    { day: 'Tue', books: 0 },
    { day: 'Wed', books: 2 },
    { day: 'Thu', books: 1 },
    { day: 'Fri', books: 0 },
    { day: 'Sat', books: 3 },
    { day: 'Sun', books: 1 }
  ]

  const monthlyGoal = {
    target: 4,
    current: 3,
    percentage: 75
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif font-bold text-neutral-900 mb-2">
          Dashboard
        </h1>
        <p className="text-neutral-600">
          Track your reading progress and discover new books
        </p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-neutral-600 mb-1">Books Read</p>
              <p className="text-3xl font-bold text-neutral-900">{readingStats.totalBooks}</p>
              <p className="text-sm text-neutral-500">of {readingStats.goalTarget} goal</p>
            </div>
            <div className="bg-primary-50 p-3 rounded-lg">
              <FiBook className="w-6 h-6 text-primary-600" />
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(readingStats.totalBooks / readingStats.goalTarget) * 100}%` }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-neutral-600 mb-1">Reading Streak</p>
              <p className="text-3xl font-bold text-neutral-900">{readingStats.currentStreak}</p>
              <p className="text-sm text-green-600">days in a row</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <FiTrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-neutral-600 mb-1">Friends</p>
              <p className="text-3xl font-bold text-neutral-900">{readingStats.friendsCount}</p>
              <p className="text-sm text-neutral-500">active readers</p>
            </div>
            <div className="bg-secondary-50 p-3 rounded-lg">
              <FiUsers className="w-6 h-6 text-secondary-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-neutral-600 mb-1">Avg Rating</p>
              <p className="text-3xl font-bold text-neutral-900">{readingStats.averageRating}</p>
              <p className="text-sm text-neutral-500">star rating</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <FiAward className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Activity & Goals */}
        <div className="lg:col-span-2 space-y-8">
          {/* Monthly Goal Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-neutral-900">Monthly Goal</h2>
              <div className="bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-sm font-medium">
                On Track
              </div>
            </div>
            
            <div className="text-center mb-6">
              <div className="relative inline-flex items-center justify-center w-32 h-32">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-neutral-200"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - monthlyGoal.percentage / 100)}`}
                    className="text-accent-600"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-neutral-900">{monthlyGoal.current}</div>
                    <div className="text-sm text-neutral-600">of {monthlyGoal.target}</div>
                  </div>
                </div>
              </div>
              <p className="text-lg font-medium text-neutral-900 mt-4">
                {monthlyGoal.percentage}% Complete
              </p>
              <p className="text-neutral-600">
                Only {monthlyGoal.target - monthlyGoal.current} more books to reach your monthly goal!
              </p>
            </div>
          </motion.div>

          {/* Weekly Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200"
          >
            <h2 className="text-xl font-semibold text-neutral-900 mb-6">Weekly Reading Activity</h2>
            
            <div className="flex items-end justify-between h-32 space-x-2">
              {weeklyActivity.map((day, index) => (
                <div key={day.day} className="flex flex-col items-center space-y-2 flex-1">
                  <div className="text-xs text-neutral-600">{day.books}</div>
                  <div
                    className="w-full bg-primary-200 rounded-t transition-all duration-300 hover:bg-primary-300"
                    style={{ height: `${Math.max(day.books * 20, 8)}px` }}
                  />
                  <div className="text-xs font-medium text-neutral-900">{day.day}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column - Quick Info */}
        <div className="space-y-8">
          {/* Reading Preferences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200"
          >
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Reading Preferences</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Favorite Genre</span>
                <span className="text-sm font-medium text-neutral-900">{readingStats.favoriteGenre}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Average Session</span>
                <span className="text-sm font-medium text-neutral-900">2.5 hours</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Pages per Day</span>
                <span className="text-sm font-medium text-neutral-900">45 pages</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Reading Goal 2025</span>
                <span className="text-sm font-medium text-neutral-900">{readingStats.goalTarget} books</span>
              </div>
            </div>
          </motion.div>

          {/* Upcoming Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-200"
          >
            <div className="flex items-center space-x-2 mb-4">
              <FiCalendar className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-semibold text-neutral-900">Upcoming Challenge</h2>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-medium text-neutral-900">Winter Reading Marathon</h3>
              <p className="text-sm text-neutral-700">
                Read 5 books in December to join the winter reading marathon with fellow book lovers!
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-600">Progress</span>
                <span className="font-medium">2/5 books</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2">
                <div
                  className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: '40%' }}
                />
              </div>
              <button className="w-full btn btn-primary btn-sm">
                Join Challenge
              </button>
            </div>
          </motion.div>

          {/* Recent Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200"
          >
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Recent Achievements</h2>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <FiAward className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900">Bookworm</p>
                  <p className="text-xs text-neutral-600">Read 10 books this year</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <FiTrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900">Consistent Reader</p>
                  <p className="text-xs text-neutral-600">15 day reading streak</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 p-2 rounded-full">
                  <FiUsers className="w-4 h-4 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900">Social Reader</p>
                  <p className="text-xs text-neutral-600">Made 5+ book recommendations</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage