import React, { useState } from 'react'
import { FiSearch, FiBook, FiUser, FiFilter } from 'react-icons/fi'

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchType, setSearchType] = useState('books')

  const searchResults = {
    books: [
      {
        id: 1,
        title: "The Midnight Library",
        author: "Matt Haig",
        cover: "https://m.media-amazon.com/images/I/812whWLbqAL._SY466_.jpg",
        rating: 4.5
      },
      {
        id: 2,
        title: "Project Hail Mary",
        author: "Andy Weir",
        cover: "https://m.media-amazon.com/images/I/91ENQs2KLAL._SY466_.jpg",
        rating: 4.8
      }
    ],
    users: [
      {
        id: 1,
        name: "Shimanto Chowdhury",
        username: "shimanto_reader",
        avatar: "https://ui-avatars.com/api/?name=Shimanto+Chowdhury&background=3b82f6&color=fff",
        booksRead: 24
      }
    ]
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif font-bold text-neutral-900 mb-2">
          Search
        </h1>
        <p className="text-neutral-600">
          Find books, authors, and friends in our community
        </p>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200 transition-all duration-200 hover:shadow-medium hover:-translate-y-1">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex-1 relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
            />
          </div>
          
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="form-input min-w-0 lg:w-48"
          >
            <option value="books">Books</option>
            <option value="authors">Authors</option>
            <option value="users">Users</option>
          </select>
          
          <button className="btn btn-primary whitespace-nowrap">
            <FiSearch className="w-4 h-4 mr-2" />
            Search
          </button>
        </div>
      </div>

      {/* Search Results */}
      <div className="space-y-6">
        {searchType === 'books' && (
          <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">
              Books ({searchResults.books.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {searchResults.books.map((book) => (
                <div key={book.id} className="book-card p-4">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-medium text-neutral-900 mb-1">{book.title}</h3>
                  <p className="text-sm text-neutral-600 mb-2">{book.author}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <span className="text-sm font-medium">⭐</span>
                      <span className="text-sm text-neutral-600">{book.rating}</span>
                    </div>
                    <button className="btn btn-primary btn-sm">Add to List</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {searchType === 'users' && (
          <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">
              Users ({searchResults.users.length})
            </h2>
            <div className="space-y-4">
              {searchResults.users.map((user) => (
                <div key={user.id} className="flex items-center space-x-4 p-4 hover:bg-neutral-50 rounded-lg transition-colors hover:shadow-soft hover:-translate-y-0.5">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-neutral-900">{user.name}</h3>
                    <p className="text-sm text-neutral-600">@{user.username}</p>
                    <p className="text-sm text-neutral-500">{user.booksRead} books read</p>
                  </div>
                  <button className="btn btn-primary btn-sm">
                    Add Friend
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchPage