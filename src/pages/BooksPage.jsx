import React, { useState } from 'react'
import { FiSearch, FiFilter, FiGrid, FiList } from 'react-icons/fi'
import { motion } from 'framer-motion'

const BooksPage = () => {
  const [viewMode, setViewMode] = useState('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('all')

  const books = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      cover: "https://m.media-amazon.com/images/I/812whWLbqAL._SY466_.jpg",
      genre: "Fiction",
      rating: 4.5,
      year: 2020,
      status: "available"
    },
    {
      id: 2,
      title: "Project Hail Mary",
      author: "Andy Weir",
      cover: "https://m.media-amazon.com/images/I/91ENQs2KLAL._SY466_.jpg",
      genre: "Science Fiction",
      rating: 4.8,
      year: 2021,
      status: "available"
    },
    {
      id: 3,
      title: "The Thursday Murder Club",
      author: "Richard Osman",
      cover: "https://m.media-amazon.com/images/I/91PQTHXq93L._SY466_.jpg",
      genre: "Mystery",
      rating: 4.3,
      year: 2020,
      status: "available"
    },
    {
      id: 4,
      title: "Educated",
      author: "Tara Westover",
      cover: "https://m.media-amazon.com/images/I/81Om0n+pfyL._SY466_.jpg",
      genre: "Memoir",
      rating: 4.6,
      year: 2018,
      status: "available"
    }
  ]

  const genres = ['All', 'Fiction', 'Science Fiction', 'Mystery', 'Romance', 'Memoir', 'Biography', 'Fantasy']

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif font-bold text-neutral-900 mb-2">
          Browse Books
        </h1>
        <p className="text-neutral-600">
          Discover your next great read from our extensive collection
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl p-6 shadow-soft border border-neutral-200">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">
          {/* Search */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-neutral-400" />
            </div>
            <input
              type="text"
              placeholder="Search by title, author, or genre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input pl-10"
            />
          </div>

          {/* Genre Filter */}
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="form-input min-w-0 lg:w-48"
          >
            <option value="all">All Genres</option>
            {genres.slice(1).map(genre => (
              <option key={genre} value={genre.toLowerCase()}>{genre}</option>
            ))}
          </select>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-primary-100 text-primary-600' 
                  : 'text-neutral-400 hover:text-neutral-600'
              }`}
            >
              <FiGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' 
                  ? 'bg-primary-100 text-primary-600' 
                  : 'text-neutral-400 hover:text-neutral-600'
              }`}
            >
              <FiList className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Books Grid */}
      <div className={viewMode === 'grid' ? 'grid-books' : 'space-y-4'}>
        {books.map((book, index) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={viewMode === 'grid' ? 'book-card' : 'bg-white rounded-xl p-4 shadow-soft border border-neutral-200 flex space-x-4'}
          >
            {viewMode === 'grid' ? (
              <>
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-neutral-900 mb-1 line-clamp-2">{book.title}</h3>
                  <p className="text-sm text-neutral-600 mb-2">{book.author}</p>
                  <div className="flex items-center justify-between">
                    <span className="badge badge-primary">{book.genre}</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm font-medium">⭐</span>
                      <span className="text-sm text-neutral-600">{book.rating}</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-20 h-28 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-neutral-900 mb-1">{book.title}</h3>
                  <p className="text-sm text-neutral-600 mb-2">{book.author}</p>
                  <div className="flex items-center space-x-4">
                    <span className="badge badge-primary">{book.genre}</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm font-medium">⭐</span>
                      <span className="text-sm text-neutral-600">{book.rating}</span>
                    </div>
                    <span className="text-sm text-neutral-500">{book.year}</span>
                  </div>
                </div>
                <button className="btn btn-primary btn-sm">
                  Add to List
                </button>
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="btn btn-outline">
          Load More Books
        </button>
      </div>
    </div>
  )
}

export default BooksPage