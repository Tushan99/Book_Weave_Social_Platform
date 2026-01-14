import React from 'react'
import { useNotification } from '../contexts/NotificationContext'
import NotificationToast from './ui/NotificationToast'

const NotificationWrapper = () => {
  const { notifications, removeNotification } = useNotification()

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <NotificationToast
          key={notification.id}
          notification={notification}
          onRemove={removeNotification}
        />
      ))}
    </div>
  )
}

export default NotificationWrapper