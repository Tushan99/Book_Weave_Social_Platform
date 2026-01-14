import React from 'react'
import { FiUser, FiMail, FiCalendar, FiBook, FiUsers } from 'react-icons/fi'
import { useAuth } from '../contexts/AuthContext'

const ProfilePage = () => {
  const { user } = useAuth()

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-xl p-8 shadow-soft border border-neutral-200">
        <div className="flex items-start space-x-6">
          <img
            src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'User')}&background=3b82f6&color=fff&size=120`}
            alt={user?.name}
            className="w-32 h-32 rounded-full object-cover shadow-large"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-serif font-bold text-neutral-900 mb-2">{user?.name}</h1>
            <p className="text-lg text-neutral-600 mb-4">@{user?.username}</p>
            <p className="text-neutral-700 mb-6 max-w-2xl">{user?.bio || 'Book lover and avid reader exploring new worlds through literature.'}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-2">
                  <FiBook className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-2xl font-bold text-neutral-900">{user?.booksRead || 0}</p>
                <p className="text-sm text-neutral-600">Books Read</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary-100 rounded-lg mx-auto mb-2">
                  <FiUsers className="w-6 h-6 text-secondary-600" />
                </div>
                <p className="text-2xl font-bold text-neutral-900">{user?.friends?.length || 0}</p>
                <p className="text-sm text-neutral-600">Friends</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-2">
                  <FiCalendar className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-2xl font-bold text-neutral-900">{user?.readingGoal || 12}</p>
                <p className="text-sm text-neutral-600">2025 Goal</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mx-auto mb-2">
                  <FiMail className="w-6 h-6 text-yellow-600" />
                </div>
                <p className="text-2xl font-bold text-neutral-900">4.2</p>
                <p className="text-sm text-neutral-600">Avg Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">Recent Activity</h2>
            <p className="text-neutral-600">Recent activity feed coming soon...</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
            <h2 className="text-lg font-semibold text-neutral-900 mb-4">Reading Stats</h2>
            <p className="text-neutral-600">Reading statistics coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage