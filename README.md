# BookWeave - Social Platform for Book Lovers

A modern social platform built with React, Tailwind CSS, and Node.js for book enthusiasts to connect, share reviews, and discover new books.

## Features

### Frontend (React + Tailwind CSS)
- **Authentication System**: Login/Register with form validation
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Toggle between themes
- **Social Features**: Friend system, messaging, activity feeds
- **Book Management**: Browse books, add to reading lists, rate and review
- **Dashboard**: Reading statistics and progress tracking
- **Search**: Find books, authors, and users
- **Real-time Notifications**: Toast notifications for user actions

### Backend (Node.js + Express + MongoDB)
- **User Authentication**: JWT-based authentication system
- **Book APIs**: CRUD operations for books and reviews
- **Social Features**: Friend connections and messaging
- **Database**: MongoDB with Mongoose ODM

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **React Hook Form** - Form handling and validation
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Axios** - HTTP client

### Backend (Ready for implementation)
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing
- **Socket.io** - Real-time communication

## Project Structure

```
bookweave/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── layout/        # Layout components (Header, Sidebar)
│   │   └── ui/            # UI components (Loading, Notifications)
│   ├── contexts/          # React contexts (Auth, Theme, Notifications)
│   ├── hooks/             # Custom hooks
│   ├── layouts/           # Layout wrappers
│   ├── pages/             # Page components
│   ├── services/          # API services
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles with Tailwind
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── postcss.config.js      # PostCSS configuration
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features Overview

### Authentication
- User registration and login
- Form validation with error handling
- Protected routes
- JWT token management
- Social login options (Google, Facebook)

### Dashboard
- Reading statistics and goals
- Weekly activity charts
- Monthly progress tracking
- Recent books and friend activity

### Book Management
- Browse and search books
- Add books to reading lists (Want to Read, Currently Reading, Read)
- Rate and review books
- Book recommendations

### Social Features
- Friend system with recommendations
- Activity feeds
- Direct messaging
- Book recommendations and sharing

### User Interface
- Responsive design for all screen sizes
- Dark/light theme toggle
- Modern UI components
- Smooth animations and transitions

## Development Status

### ✅ Completed Features
- Project setup with Vite and React
- Tailwind CSS configuration and design system
- Authentication pages (Login/Register)
- Main layout with Header and Sidebar
- Dashboard page with statistics
- Home page with book recommendations
- Books browsing page
- User profile page
- Friends page
- Messages page
- Search functionality
- Responsive design
- Theme switching
- Notification system
- Form validation
- Mock authentication system

### 🚧 Next Steps
- Backend API implementation
- Real database integration
- Real-time messaging with Socket.io
- External book APIs integration (Google Books, OpenLibrary)
- Image uploads and CDN integration
- Email notifications
- Advanced search and filtering
- Reading challenge system
- Book clubs and groups
- Advanced analytics and insights

## Contributing

This project is currently in development. Feel free to suggest improvements or contribute to the codebase.

## License

This project is licensed under the MIT License.

---

Built with ❤️ for book lovers by MiniMax Agent