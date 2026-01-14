import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { 
  FiSearch, 
  FiBell, 
  FiMessageCircle, 
  FiSettings, 
  FiLogOut,
  FiUser,
  FiMenu,
  FiBookOpen,
  FiSun,
  FiMoon
} from 'react-icons/fi'
import { useAuth } from '../../contexts/AuthContext'
import { useTheme } from '../../contexts/ThemeContext'
import { useNotification } from '../../contexts/NotificationContext'

const Header = () => {
  const { user, logout } = useAuth()
  const { theme, toggleTheme, isDark } = useTheme()
  const { showSuccess } = useNotification()
  const navigate = useNavigate()
  const location = useLocation()
  
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleLogout = () => {
    logout()
    showSuccess('Successfully logged out')
    navigate('/login')
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white shadow-soft border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-primary-600 p-2.5 rounded-xl shadow-glow-blue">
                <FiBookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="hidden sm:block text-xl font-bold text-neutral-900">
                BookWeave
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link 
                to="/" 
                className={isActive('/') ? 'text-primary-600 border-b-2 border-primary-600 pb-1 font-medium' : 'text-neutral-600 hover:text-primary-600 transition-colors font-medium'}
              >
                Home
              </Link>
              <Link 
                to="/books" 
                className={isActive('/books') ? 'text-primary-600 border-b-2 border-primary-600 pb-1 font-medium' : 'text-neutral-600 hover:text-primary-600 transition-colors font-medium'}
              >
                Browse Books
              </Link>
              <Link 
                to="/friends" 
                className={isActive('/friends') ? 'text-primary-600 border-b-2 border-primary-600 pb-1 font-medium' : 'text-neutral-600 hover:text-primary-600 transition-colors font-medium'}
              >
                Friends
              </Link>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                type="text"
                placeholder="Search books, authors, or friends..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-lg leading-5 bg-neutral-50 placeholder-neutral-500 focus:outline-none focus:placeholder-neutral-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
              />
            </form>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>

            {/* Notifications */}
            <button className="relative p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors">
              <FiBell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Messages */}
            <button className="relative p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors">
              <FiMessageCircle className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center space-x-2 p-1 rounded-lg hover:bg-neutral-100 transition-colors"
              >
                <img
                  src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'User')}&background=3b82f6&color=fff`}
                  alt={user?.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="hidden sm:block text-sm font-medium text-neutral-700">
                  {user?.name}
                </span>
              </button>

              {/* Profile Dropdown Menu */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-large border border-neutral-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-neutral-200">
                    <p className="text-sm font-medium text-neutral-900">{user?.name}</p>
                    <p className="text-xs text-neutral-500">{user?.email}</p>
                  </div>
                  
                  <Link
                    to="/profile"
                    className="flex items-center px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    <FiUser className="w-4 h-4 mr-3" />
                    Your Profile
                  </Link>
                  
                  <Link
                    to="/settings"
                    className="flex items-center px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    <FiSettings className="w-4 h-4 mr-3" />
                    Settings
                  </Link>
                  
                  <hr className="my-2 border-neutral-200" />
                  
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    <FiLogOut className="w-4 h-4 mr-3" />
                    Sign out
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors">
              <FiMenu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header