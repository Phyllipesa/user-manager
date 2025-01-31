
# User Manager - Backend

## Description

This is the backend for the User Manager project, built with **Node.js** and **Express**. It provides authentication and user management features, simulating a database with a local array containing pre-registered user accounts.

## Endpoints

- `POST /login` - Authenticates a user and returns a JWT token.
- `GET /validate-token` - Validates an existing JWT token.
- `PUT /update-user` - Updates user information.
- `POST /create-user` - Creates a new user.

## Dependencies

The project uses the following dependencies:

```json
"dependencies": {
  "body-parser": "^1.20.3",
  "cors": "^2.8.5",
  "express": "^4.21.2",
  "jsonwebtoken": "^9.0.2",
  "nodemon": "^3.1.9"
}
```

## How to Run

1. Navigate to the backend folder:
   ```sh
   cd user-manager-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm run dev
   ```
4. The backend will run at [http://localhost:3000](http://localhost:3000)

## Notes

- The "database" is simulated using a local JavaScript array.
- Users are pre-registered in this array for testing purposes.
- JWT is used for authentication and token validation.

