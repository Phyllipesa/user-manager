# User Manager - Frontend

## Description
This is the frontend for the **User Manager** project, built with **Angular**. It provides an interface for user authentication, account creation, and profile updates, integrating with the backend for data processing.

## Features
- **User Authentication:** Login using JWT authentication.
- **Token Management:** Handles JWT storage and validation.
- **User Management:** Create new users and update existing user information.
- **HTTP Requests:** Communicates with the backend using Angular services.
- **Interceptors:** Automatically attaches JWT tokens to HTTP requests.
- **Observables & Promises:** Implements reactive programming for efficient data handling.

## How to Run

1. Navigate to the frontend folder:
   ```sh
   cd user-manager-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the application:
   ```sh
   ng serve
   ```
4. Access the app at [http://localhost:4200](http://localhost:4200)

## Notes
- Requires the backend (`user-manager-backend`) to be running for full functionality.
- Uses Angular Material for UI components.
- Implements JWT authentication and API integration with the backend.

