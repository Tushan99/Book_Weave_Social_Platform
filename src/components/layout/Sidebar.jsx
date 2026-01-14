import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  FiHome, 
  FiBook, 
  FiUsers, 
  FiMessageCircle, 
  FiSearch, 
  FiTrendingUp,
  FiBookOpen,
  FiStar,
  FiCalendar,
  FiAward
} from 'react-icons/fi'
import { useAuth } from '../../contexts/AuthContext'

const Sidebar = () => {
  const location = useLocation()
  const { user } = useAuth()

  const isActive = (path) => location.pathname === path

  const navigationItems = [
    {
      name: 'Home',
      path: '/',
      icon: FiHome,
      description: 'Your reading dashboard'
    },
    {
      name: 'Browse Books',
      path: '/books',
      icon: FiBook,
      description: 'Discover new books'
    },
    {
      name: 'Friends',
      path: '/friends',
      icon: FiUsers,
      description: 'Connect with readers'
    },
    {
      name: 'Messages',
      path: '/messages',
      icon: FiMessageCircle,
      description: 'Chat with friends'
    },
    {
      name: 'Search',
      path: '/search',
      icon: FiSearch,
      description: 'Find books and people'
    }
  ]

  const quickLinks = [
    {
      name: 'Currently Reading',
      icon: FiBookOpen,
      count: 3,
      color: 'text-blue-600'
    },
    {
      name: 'Want to Read',
      icon: FiStar,
      count: 12,
      color: 'text-yellow-600'
    },
    {
      name: 'Read This Year',
      icon: FiAward,
      count: user?.booksRead || 0,
      color: 'text-green-600'
    }
  ]

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-neutral-200 overflow-y-auto scrollbar-hide shadow-custom-medium">
      <div className="p-6">
        {/* User Stats */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-4 mb-6">
          <div className="flex items-center space-x-3 mb-3">
            <div className="bg-primary-600 p-2 rounded-lg">
              <FiTrendingUp className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-semibold text-neutral-900">Reading Stats</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-600">{user?.booksRead || 0}</p>
              <p className="text-xs text-neutral-600">Books Read</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-secondary-600">{user?.readingGoal || 12}</p>
              <p className="text-xs text-neutral-600">Year Goal</p>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs text-neutral-600 mb-1">
              <span>Progress</span>
              <span>{Math.round(((user?.booksRead || 0) / (user?.readingGoal || 12)) * 100)}%</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(((user?.booksRead || 0) / (user?.readingGoal || 12)) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="space-y-2 mb-6">
          <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
            Navigation
          </h4>
          {navigationItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 group
                  ${isActive(item.path) 
                    ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600' 
                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                  }
                `}
              >
                <Icon className={`w-5 h-5 ${isActive(item.path) ? 'text-primary-600' : 'text-neutral-400 group-hover:text-neutral-600'}`} />
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-neutral-500">{item.description}</p>
                </div>
              </Link>
            )
          })}
        </nav>

        {/* Quick Links */}
        <div className="space-y-2 mb-6">
          <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
            Quick Access
          </h4>
          {quickLinks.map((link) => {
            const Icon = link.icon
            return (
              <div
                key={link.name}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-neutral-50 hover:text-neutral-900 cursor-pointer transition-colors"
              >
                <Icon className={`w-4 h-4 ${link.color}`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-neutral-900">{link.name}</p>
                </div>
                <span className="bg-neutral-100 text-neutral-600 text-xs px-2 py-1 rounded-full">
                  {link.count}
                </span>
              </div>
            )
          })}
        </div>

        {/* Reading Challenge */}
        <div className="bg-accent-50 rounded-xl p-4 border border-accent-200">
          <div className="flex items-center space-x-2 mb-3">
            <FiCalendar className="w-4 h-4 text-accent-600" />
            <h4 className="font-semibold text-accent-800">2025 Reading Challenge</h4>
          </div>
          <p className="text-sm text-accent-700 mb-3">
            Join thousands of readers in reading {user?.readingGoal || 12} books this year!
          </p>
          <Link
            to="/challenges"
            className="inline-flex items-center text-sm font-medium text-accent-600 hover:text-accent-700"
          >
            View Challenge
            <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar