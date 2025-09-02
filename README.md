# Personalized Workout Generator

A full-stack MERN application that provides personalized workout and nutrition plans with JWT authentication, featuring a modern glassmorphism UI design.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Database Schema](#database-schema)
- [Frontend Components](#frontend-components)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)

## Features

### Core Functionality
- User registration and authentication with JWT
- Personalized workout recommendations based on fitness level and goals
- Custom nutrition plans tailored to user preferences
- Interactive workout library with detailed exercise information
- Favorites system for saving preferred workouts
- Real-time workout timer with session tracking
- BMI calculator and health metrics tracking
- Responsive design optimized for all devices

### User Profile System
- Comprehensive profile creation with health metrics
- Fitness level assessment (Beginner, Intermediate, Advanced)
- Activity level tracking
- Multiple fitness goals selection
- Medical conditions consideration
- Age, height, and weight tracking

### Modern UI Features
- Glassmorphism design with backdrop blur effects
- Animated gradient backgrounds
- Interactive floating elements
- Smooth animations and transitions
- Custom scrollbar styling
- Responsive grid layouts
- Loading states and form validation

## Tech Stack

### Frontend
- **React 18** - JavaScript library for building user interfaces
- **React Router** - Declarative routing for React applications
- **TailwindCSS 3.x** - Utility-first CSS framework
- **Axios** - Promise-based HTTP client for API requests
- **LocalStorage** - Browser storage for favorites and session data

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework for Node.js
- **MongoDB** - NoSQL document database
- **Mongoose** - MongoDB object modeling for Node.js
- **JSON Web Tokens (JWT)** - Secure authentication tokens
- **bcryptjs** - Password hashing library
- **CORS** - Cross-Origin Resource Sharing middleware

### Development Tools
- **Nodemon** - Development server with auto-restart
- **PostCSS** - CSS processing tool
- **Autoprefixer** - CSS vendor prefix automation

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 14.x or higher)
- **npm** (version 6.x or higher)
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git** (for version control)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/personalized-workout-generator.git
cd personalized-workout-generator
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

## Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/workoutapp

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here

# Server Configuration
PORT=5000
NODE_ENV=development

# CORS Configuration
CLIENT_URL=http://localhost:3000
```

### Environment Variables Description

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |
| `JWT_SECRET` | Secret key for JWT token generation | Yes |
| `PORT` | Backend server port | No (default: 5000) |
| `NODE_ENV` | Environment mode | No (default: development) |
| `CLIENT_URL` | Frontend application URL | No (default: http://localhost:3000) |

## Running the Application

### Development Mode

#### 1. Start the Backend Server

```bash
cd backend
npm run dev
```

The backend server will start on `http://localhost:5000`

#### 2. Start the Frontend Development Server

```bash
cd frontend
npm start
```

The frontend application will start on `http://localhost:3000`

### Production Mode

#### 1. Build the Frontend

```bash
cd frontend
npm run build
```

#### 2. Start the Backend Server

```bash
cd backend
npm start
```

## API Documentation

### Authentication Endpoints

#### Register User
- **POST** `/api/auth/register`
- **Body**: User registration data including personal and fitness information
- **Response**: Success message

#### Login User
- **POST** `/api/auth/login`
- **Body**: `{ email, password }`
- **Response**: `{ token, user }`

### Protected Endpoints

#### Get User Profile
- **GET** `/api/auth/profile`
- **Headers**: `Authorization: Bearer <token>`
- **Response**: User profile data

#### Get Personalized Plans
- **GET** `/api/plans`
- **Headers**: `Authorization: Bearer <token>`
- **Response**: `{ workout: [], nutrition: [] }`

### Request/Response Examples

#### Registration Request
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword",
  "name": "John Doe",
  "age": 25,
  "height": 175,
  "weight": 70,
  "fitnessLevel": "Intermediate",
  "fitnessGoals": ["Weight Loss", "Muscle Building"],
  "activityLevel": "Moderately Active",
  "medicalConditions": ""
}
```

#### Login Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "60d5ecb74b24c8b5f8f5e5d1",
    "username": "johndoe",
    "email": "john@example.com",
    "name": "John Doe",
    "fitnessLevel": "Intermediate",
    "fitnessGoals": ["Weight Loss", "Muscle Building"]
  }
}
```

## Project Structure

```
personalized-workout-generator/
├── backend/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── plans.js
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Dashboard.js
│   │   │   ├── Workouts.js
│   │   │   ├── Favorites.js
│   │   │   └── workouts/
│   │   │       ├── BeginnerFullBody.js
│   │   │       ├── HIITCardioBlast.js
│   │   │       ├── UpperBodyStrength.js
│   │   │       ├── YogaFlow.js
│   │   │       ├── CoreDestroyer.js
│   │   │       └── LowerBodyPower.js
│   │   ├── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md
```

## Database Schema

### User Model

```javascript
{
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  fitnessLevel: { 
    type: String, 
    required: true,
    enum: ['Beginner', 'Intermediate', 'Advanced']
  },
  fitnessGoals: [{ type: String }],
  medicalConditions: { type: String },
  activityLevel: { 
    type: String, 
    required: true,
    enum: ['Sedentary', 'Lightly Active', 'Moderately Active', 'Very Active']
  },
  createdAt: { type: Date, default: Date.now }
}
```

## Frontend Components

### Page Components

| Component | Route | Description |
|-----------|-------|-------------|
| `Home` | `/` | Landing page with app introduction |
| `Login` | `/login` | User authentication form |
| `Register` | `/register` | User registration with health metrics |
| `Dashboard` | `/dashboard` | User profile and personalized plans |
| `Workouts` | `/workouts` | Workout library with recommendations |
| `Favorites` | `/favorites` | Saved workout routines |

### Workout Detail Components

| Component | Route | Description |
|-----------|-------|-------------|
| `BeginnerFullBody` | `/workouts/beginner-full-body` | 30-minute full body routine |
| `HIITCardioBlast` | `/workouts/hiit-cardio-blast` | 20-minute high-intensity cardio |
| `UpperBodyStrength` | `/workouts/upper-body-strength` | 45-minute upper body workout |
| `YogaFlow` | `/workouts/yoga-flow` | 60-minute yoga session |
| `CoreDestroyer` | `/workouts/core-destroyer` | 15-minute core workout |
| `LowerBodyPower` | `/workouts/lower-body-power` | 40-minute lower body routine |

### Key Features per Component

#### Dashboard Features
- BMI calculation and health metrics display
- Personalized workout and nutrition plans
- Fitness profile overview
- Quick action buttons

#### Workouts Features
- Personalized recommendations based on user profile
- Difficulty-based filtering
- Favorites management
- Interactive workout cards

#### Individual Workout Features
- Step-by-step exercise instructions
- Integrated timer functionality
- Rest period management
- Favorites toggle
- Progress tracking

## Authentication

The application uses JWT (JSON Web Tokens) for authentication:

### Token Structure
- **Header**: Algorithm and token type
- **Payload**: User ID and expiration time
- **Signature**: HMAC SHA256 signature

### Security Features
- Password hashing with bcryptjs
- Protected routes with middleware
- Token expiration handling
- CORS configuration for secure cross-origin requests

### Authentication Flow
1. User registers with personal and fitness information
2. User logs in with email and password
3. Server validates credentials and returns JWT token
4. Client stores token in localStorage
5. Client includes token in Authorization header for protected requests
6. Server validates token and processes requests

## Contributing

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test your changes thoroughly**
5. **Commit your changes**
   ```bash
   git commit -m "Add your descriptive commit message"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

### Code Style Guidelines

- Use ES6+ JavaScript features
- Follow React functional component patterns
- Use TailwindCSS for styling
- Implement proper error handling
- Write descriptive commit messages
- Add comments for complex logic

### Testing

Before submitting a pull request:
- Test all authentication flows
- Verify responsive design on multiple screen sizes
- Test API endpoints with various data inputs
- Ensure proper error handling and validation

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

**Built with ❤️ by PVB Adithya using the MERN Stack**

For questions or support, please open an issue on GitHub.
