import React from 'react'
import { FiUsers, FiUserPlus, FiUserCheck } from 'react-icons/fi'

const FriendsPage = () => {
  const friends = [
    {
      id: 1,
      name: "Shimanto Chowdhury",
      username: "shimanto_reader",
      avatar: "https://ui-avatars.com/api/?name=Shimanto+Chowdhury&background=3b82f6&color=fff",
      mutualFriends: 3,
      booksRead: 24
    },
    {
      id: 2,
      name: "Tanim khan",
      username: "tanim_books",
      avatar: "https://ui-avatars.com/api/?name=Tanim+khan&background=f97316&color=fff",
      mutualFriends: 1,
      booksRead: 18
    }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-neutral-900 mb-2">
          Friends
        </h1>
        <p className="text-neutral-600">
          Connect with fellow book lovers and discover what they're reading
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {friends.map((friend) => (
          <div key={friend.id} className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
            <div className="text-center">
              <img
                src={friend.avatar}
                alt={friend.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-semibold text-neutral-900">{friend.name}</h3>
              <p className="text-sm text-neutral-600 mb-2">@{friend.username}</p>
              
              <div className="flex justify-center space-x-4 text-sm text-neutral-600 mb-4">
                <span>{friend.mutualFriends} mutual friends</span>
                <span>{friend.booksRead} books read</span>
              </div>
              
              <button className="btn btn-primary w-full">
                <FiUserCheck className="w-4 h-4 mr-2" />
                Friends
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
        <h2 className="text-xl font-semibold text-neutral-900 mb-4">Find New Friends</h2>
        <p className="text-neutral-600 mb-4">Discover readers with similar interests and connect with them.</p>
        <button className="btn btn-outline">
          <FiUserPlus className="w-4 h-4 mr-2" />
          Browse Readers
        </button>
      </div>
    </div>
  )
}

export default FriendsPage