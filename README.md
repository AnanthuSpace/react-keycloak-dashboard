# react-keycloak-dashboard

## Overview

This project demonstrates how to integrate Keycloak authentication into a React application, manage user sessions using local storage, and implement protected routes to secure access to certain parts of the application.

## Prerequisites

Before you begin, ensure you have the following installed:

* Node.js (version 16.19.1 or higher)
* npm (version 8.19.3 or higher)

## Installation

1. Clone this repository:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Keycloak Configuration

1. Set up a Keycloak server and access the admin console.
2. Create a new realm and a new client within that realm for your React application.
3. Configure the client with the following settings:

   * Client Protocol: `openid-connect`
   * Access Type: `public`
   * Valid Redirect URIs: `http://localhost:3000/*`
   * Web Origins: `*`
4. Obtain the Keycloak server URL, realm name, and client ID for use in your React application.

## React Application Setup

1. Install the Keycloak JavaScript adapter:

   ```bash
   npm install keycloak-js
   ```

2. Configure Keycloak in your project (see example configuration in `keycloak.js`).

3. Initialize Keycloak in your app entry point and render your app conditionally based on authentication.

## Protected Routes

To secure specific routes in your application:

1. Create a `ProtectedRoute` component to check Keycloak authentication.
2. Wrap your protected components or routes with `ProtectedRoute`.

## Session Management

* Store the Keycloak token in local storage upon successful authentication.
* Retrieve the token from local storage when needed.
* Clear the token from local storage upon logout.

## Logout Functionality

Implement a logout function that clears the session and redirects the user to the Keycloak logout page.

## Usage

1. Start your Keycloak server.

2. Run your React application:

   ```bash
   npm start
   ```

3. Access your application at [http://localhost:3000](http://localhost:3000).

4. Navigate to protected routes to be redirected to the Keycloak login page if not authenticated.

## Development

To contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## Deployment

For deployment, consider using services like Vercel, Netlify, or AWS Amplify. Ensure that your Keycloak server is accessible from the deployed application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or fixes.

