# User Service

This is a user service built with Node.js and MongoDB. It provides endpoints for user registration and login.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file and add your MongoDB URI and JWT secret

### Running the Service

- Development: `npm run dev`
- Production: `npm start`

### API Endpoints

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login an existing user