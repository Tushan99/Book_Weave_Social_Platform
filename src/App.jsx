import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { NotificationProvider } from './contexts/NotificationContext'

// Layout Components
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'

// Page Components
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import BooksPage from './pages/BooksPage'
import BookDetailPage from './pages/BookDetailPage'
import ProfilePage from './pages/ProfilePage'
import FriendsPage from './pages/FriendsPage'
import MessagesPage from './pages/MessagesPage'
import SearchPage from './pages/SearchPage'
import NotFoundPage from './pages/NotFoundPage'

// Protected Route Component
import ProtectedRoute from './components/ProtectedRoute'
import NotificationWrapper from './components/NotificationWrapper'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NotificationProvider>
          <div className="min-h-screen bg-neutral-50">
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={
                <AuthLayout>
                  <LoginPage />
                </AuthLayout>
              } />
              <Route path="/register" element={
                <AuthLayout>
                  <RegisterPage />
                </AuthLayout>
              } />
              
              {/* Protected Routes */}
              <Route path="/" element={
                <ProtectedRoute>
                  <MainLayout>
                    <HomePage />
                  </MainLayout>
                </ProtectedRoute>
              } />
              
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <MainLayout>
                    <DashboardPage />
                  </MainLayout>
                </ProtectedRoute>
              } />
              
              <Route path="/books" element={
                <ProtectedRoute>
                  <MainLayout>
                    <BooksPage />
                  </MainLayout>
                </ProtectedRoute>
              } />
              
              <Route path="/books/:bookId" element={
                <ProtectedRoute>
                  <MainLayout>
                    <BookDetailPage />
                  </MainLayout>
                </ProtectedRoute>
              } />
              
              <Route path="/profile/:userId?" element={
                <ProtectedRoute>
                  <MainLayout>
                    <ProfilePage />
                  </MainLayout>
                </ProtectedRoute>
              } />
              
              <Route path="/friends" element={
                <ProtectedRoute>
                  <MainLayout>
                    <FriendsPage />
                  </MainLayout>
                </ProtectedRoute>
              } />
              
              <Route path="/messages" element={
                <ProtectedRoute>
                  <MainLayout>
                    <MessagesPage />
                  </MainLayout>
                </ProtectedRoute>
              } />
              
              <Route path="/search" element={
                <ProtectedRoute>
                  <MainLayout>
                    <SearchPage />
                  </MainLayout>
                </ProtectedRoute>
              } />
              
              {/* Redirect to home for unknown routes */}
              <Route path="/auth" element={<Navigate to="/login" replace />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            
            {/* Global Notifications */}
            <NotificationWrapper />
          </div>
        </NotificationProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App