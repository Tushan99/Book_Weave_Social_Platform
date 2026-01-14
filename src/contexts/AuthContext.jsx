import React, { createContext, useContext, useReducer, useEffect } from 'react'

const AuthContext = createContext()

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
        isAuthenticated: true
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload,
        isAuthenticated: false
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null
      }
    case 'UPDATE_PROFILE':
      return {
        ...state,
        user: { ...state.user, ...action.payload }
      }
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null
      }
    default:
      return state
  }
}

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
  error: null
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  // Check for existing session on app load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('bookweave_token')
        const userData = localStorage.getItem('bookweave_user')
        
        if (token && userData) {
          // Verify token with backend (implement API call)
          // For now, just restore from localStorage
          const user = JSON.parse(userData)
          dispatch({ type: 'LOGIN_SUCCESS', payload: user })
        } else {
          dispatch({ type: 'LOGOUT' })
        }
      } catch (error) {
        console.error('Auth check failed:', error)
        dispatch({ type: 'LOGOUT' })
      }
    }

    checkAuth()
  }, [])

  const login = async (credentials) => {
    dispatch({ type: 'LOGIN_START' })
    try {
      // TODO: Replace with actual API call
      // const response = await axios.post('/api/auth/login', credentials)
      // const { user, token } = response.data
      
      // Mock implementation
      const mockUser = {
        id: '1',
        email: credentials.email,
        name: 'Tushan',
        username: 'Tushan',
        avatar: null,
        bio: 'Book lover and avid reader',
        readingGoal: 24,
        booksRead: 12,
        friends: [],
        preferences: {
          genres: ['fiction', 'mystery'],
          notifications: {
            email: true,
            push: true,
            friends: true,
            books: true
          }
        }
      }
      
      const token = 'mock_jwt_token'
      
      localStorage.setItem('bookweave_token', token)
      localStorage.setItem('bookweave_user', JSON.stringify(mockUser))
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: mockUser })
      return { success: true, user: mockUser }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Login failed'
      dispatch({ type: 'LOGIN_ERROR', payload: errorMessage })
      return { success: false, error: errorMessage }
    }
  }

  const register = async (userData) => {
    dispatch({ type: 'LOGIN_START' })
    try {
      // TODO: Replace with actual API call
      // const response = await axios.post('/api/auth/register', userData)
      // const { user, token } = response.data
      
      // Mock implementation
      const mockUser = {
        id: Date.now().toString(),
        email: userData.email,
        name: userData.name,
        username: userData.username,
        avatar: null,
        bio: '',
        readingGoal: 12,
        booksRead: 0,
        friends: [],
        preferences: {
          genres: [],
          notifications: {
            email: true,
            push: true,
            friends: true,
            books: true
          }
        }
      }
      
      const token = 'mock_jwt_token'
      
      localStorage.setItem('bookweave_token', token)
      localStorage.setItem('bookweave_user', JSON.stringify(mockUser))
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: mockUser })
      return { success: true, user: mockUser }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Registration failed'
      dispatch({ type: 'LOGIN_ERROR', payload: errorMessage })
      return { success: false, error: errorMessage }
    }
  }

  const logout = () => {
    localStorage.removeItem('bookweave_token')
    localStorage.removeItem('bookweave_user')
    dispatch({ type: 'LOGOUT' })
  }

  const updateProfile = (updates) => {
    const updatedUser = { ...state.user, ...updates }
    localStorage.setItem('bookweave_user', JSON.stringify(updatedUser))
    dispatch({ type: 'UPDATE_PROFILE', payload: updates })
  }

  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' })
  }

  const value = {
    ...state,
    login,
    register,
    logout,
    updateProfile,
    clearError
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}