import React, { createContext, useContext, useReducer, useCallback } from 'react'

const NotificationContext = createContext()

const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            id: Date.now() + Math.random(),
            ...action.payload,
            timestamp: new Date()
          }
        ]
      }
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(
          notification => notification.id !== action.payload
        )
      }
    case 'CLEAR_NOTIFICATIONS':
      return {
        ...state,
        notifications: []
      }
    case 'MARK_AS_READ':
      return {
        ...state,
        notifications: state.notifications.map(notification =>
          notification.id === action.payload
            ? { ...notification, read: true }
            : notification
        )
      }
    default:
      return state
  }
}

const initialState = {
  notifications: []
}

export const NotificationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notificationReducer, initialState)

  const addNotification = useCallback((notification) => {
    // Default values
    const defaultNotification = {
      type: 'info', // 'success', 'error', 'warning', 'info'
      autoClose: true,
      duration: 5000,
      ...notification
    }
    
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: defaultNotification
    })

    // Auto remove notification if autoClose is true
    if (defaultNotification.autoClose) {
      setTimeout(() => {
        dispatch({
          type: 'REMOVE_NOTIFICATION',
          payload: defaultNotification.id
        })
      }, defaultNotification.duration)
    }
  }, [])

  const removeNotification = useCallback((id) => {
    dispatch({
      type: 'REMOVE_NOTIFICATION',
      payload: id
    })
  }, [])

  const clearNotifications = useCallback(() => {
    dispatch({ type: 'CLEAR_NOTIFICATIONS' })
  }, [])

  const markAsRead = useCallback((id) => {
    dispatch({
      type: 'MARK_AS_READ',
      payload: id
    })
  }, [])

  // Convenience methods for different notification types
  const showSuccess = useCallback((message, options = {}) => {
    addNotification({
      type: 'success',
      message,
      ...options
    })
  }, [addNotification])

  const showError = useCallback((message, options = {}) => {
    addNotification({
      type: 'error',
      message,
      autoClose: false, // Don't auto-close error messages
      ...options
    })
  }, [addNotification])

  const showWarning = useCallback((message, options = {}) => {
    addNotification({
      type: 'warning',
      message,
      ...options
    })
  }, [addNotification])

  const showInfo = useCallback((message, options = {}) => {
    addNotification({
      type: 'info',
      message,
      ...options
    })
  }, [addNotification])

  const value = {
    notifications: state.notifications,
    addNotification,
    removeNotification,
    clearNotifications,
    markAsRead,
    showSuccess,
    showError,
    showWarning,
    showInfo
  }

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  return context
}