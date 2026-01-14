import React from 'react'
import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <Header />
      
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 ml-64">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 shadow-custom-light rounded-lg bg-white">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default MainLayout