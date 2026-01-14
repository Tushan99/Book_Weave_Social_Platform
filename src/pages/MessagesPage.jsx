import React from 'react'
import { FiMessageCircle, FiSend, FiSearch } from 'react-icons/fi'

const MessagesPage = () => {
  const conversations = [
    {
      id: 1,
      name: "Sarah Johnson",
      lastMessage: "Have you read the latest recommendations I sent?",
      time: "2m ago",
      unread: true
    },
    {
      id: 2,
      name: "Book Club",
      lastMessage: "Meeting reminder: Tomorrow 7 PM",
      time: "1h ago",
      unread: false
    }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-neutral-900 mb-2">
          Messages
        </h1>
        <p className="text-neutral-600">
          Chat with friends about books and share your thoughts
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-soft border border-neutral-200 overflow-hidden">
        <div className="p-4 border-b border-neutral-200">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>

        <div className="divide-y divide-neutral-200">
          {conversations.map((conversation) => (
            <div key={conversation.id} className="p-4 hover:bg-neutral-50 cursor-pointer transition-colors">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <FiMessageCircle className="w-6 h-6 text-primary-600" />
                  </div>
                  {conversation.unread && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-neutral-900">{conversation.name}</h3>
                  <p className="text-sm text-neutral-600 truncate">{conversation.lastMessage}</p>
                </div>
                <span className="text-xs text-neutral-500">{conversation.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-soft border border-neutral-200 text-center">
        <FiMessageCircle className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-neutral-900 mb-2">Select a conversation</h3>
        <p className="text-neutral-600">Choose a conversation from the list to start messaging</p>
      </div>
    </div>
  )
}

export default MessagesPage