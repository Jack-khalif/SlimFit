# SlimFit - Personalized Fitness Platform

A comprehensive fitness platform that provides personalized meal plans, workout routines, and progress tracking for women over 30.

## Features

- User authentication (register/login)
- Personalized meal planning
- Workout routines and video tutorials
- Progress tracking
- Community support
- Admin dashboard

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB Atlas account or local MongoDB installation

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jack-khalif/SlimFit.git
   cd SlimFit
   ```

2. Install server dependencies:
   ```bash
   npm install
   ```

3. Install client dependencies:
   ```bash
   cd client
   npm install
   cd ..
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add the required environment variables (see `.env.example`)

5. Start the development server:
   ```bash
   # Run both client and server
   npm run dev
   ```

## Project Structure

```
SlimFit/
├── client/                 # Frontend React app
├── server/                 # Backend Express app
│   ├── config/            # Configuration files
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Custom middleware
│   ├── models/            # Mongoose models
│   ├── routes/            # Route definitions
│   └── index.js           # Server entry point
├── .env                   # Environment variables
├── .gitignore
└── package.json
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user profile

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
