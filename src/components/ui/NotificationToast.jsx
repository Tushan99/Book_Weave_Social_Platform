import React, { useEffect } from 'react'
import { FiCheckCircle, FiAlertCircle, FiAlertTriangle, FiInfo, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const NotificationToast = ({ notification, onRemove }) => {
  const { id, type, title, message, autoClose, duration } = notification

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        onRemove(id)
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [id, autoClose, duration, onRemove])

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FiCheckCircle className="w-5 h-5" />
      case 'error':
        return <FiAlertCircle className="w-5 h-5" />
      case 'warning':
        return <FiAlertTriangle className="w-5 h-5" />
      default:
        return <FiInfo className="w-5 h-5" />
    }
  }

  const getColors = () => {
    switch (type) {
      case 'success':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          icon: 'text-green-600',
          title: 'text-green-900',
          message: 'text-green-700'
        }
      case 'error':
        return {
          bg: 'bg-red-50',
          border: 'border-red-200',
          icon: 'text-red-600',
          title: 'text-red-900',
          message: 'text-red-700'
        }
      case 'warning':
        return {
          bg: 'bg-yellow-50',
          border: 'border-yellow-200',
          icon: 'text-yellow-600',
          title: 'text-yellow-900',
          message: 'text-yellow-700'
        }
      default:
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          icon: 'text-blue-600',
          title: 'text-blue-900',
          message: 'text-blue-700'
        }
    }
  }

  const colors = getColors()

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.95 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`
        max-w-sm w-full ${colors.bg} ${colors.border} border rounded-lg shadow-large p-4
      `}
    >
      <div className="flex items-start">
        <div className={`flex-shrink-0 ${colors.icon}`}>
          {getIcon()}
        </div>
        <div className="ml-3 w-0 flex-1">
          {title && (
            <p className={`text-sm font-medium ${colors.title}`}>
              {title}
            </p>
          )}
          <p className={`text-sm ${title ? 'mt-1' : ''} ${colors.message}`}>
            {message}
          </p>
        </div>
        <div className="ml-4 flex-shrink-0 flex">
          <button
            onClick={() => onRemove(id)}
            className={`
              inline-flex ${colors.icon} hover:opacity-75 focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md
            `}
          >
            <span className="sr-only">Close</span>
            <FiX className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

const NotificationContainer = ({ notifications, onRemove }) => {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {notifications.map((notification) => (
          <NotificationToast
            key={notification.id}
            notification={notification}
            onRemove={onRemove}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default NotificationContainer