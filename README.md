# User Manager


This project is developed with Angular and implements a JWT (JSON Web Token) authentication system. It allows users to log in, create new accounts, and update user information. The project makes use of:

- **HTTP calls** to communicate with an API.
- **Interceptors** to handle JWT token management.
- **Observables and Promises** for asynchronous operations.


## How to Run the Project

### Prerequisites

Before starting, make sure you have installed:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (required for both frontend and backend)
- [Angular CLI](https://angular.io/cli) (for running the Angular application)
- A database configured (if needed)


### 1. Clone repository:

```bash
git clone git@github.com:Phyllipesa/user-manager.git
```

### 2. Backend (user-manager-backend)

1. Navigate to the backend folder:
   ```sh
   cd user-manager/user-manager-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the backend:
   ```sh
   npm run start
   ```
4. The backend will be running at: [http://localhost:3000](http://localhost:3000)


### 3. Frontend (user-manager-frontend)

1. Navigate to the frontend folder:
   ```sh
   cd user-manager/user-manager-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend:
   ```sh
   ng serve
   ```
4. Access the application at: [http://localhost:4200](http://localhost:4200)


## Tecnologies

 ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
 ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)


