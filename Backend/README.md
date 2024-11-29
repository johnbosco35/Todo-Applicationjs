Backend To-Do Application

Table of Contents

Overview
Features
Technologies Used
Installation
Usage
API Endpoints
Contributing
License

Overview

This Backend To-Do Application is a powerful, RESTful API built with modern tools to help manage tasks effectively. It features robust authentication, secure data storage, and seamless API communication. Designed to work efficiently with any front-end framework, it leverages Node.js and Express.js for scalable backend architecture.

Features

User Authentication: Registration, login, and token-based authentication using JWT.

Task Management: Create, update, delete, and retrieve tasks.

Data Security: Password hashing with Bcrypt.
Logging: Request logging with Morgan.
Cross-Origin Support: Enabled via CORS.
Database Operations: Efficient handling of task and user data with Mongoose and MongoDB.
Technologies Used
Backend Framework: Node.js and Express.js
Database: MongoDB with Mongoose ORM
Authentication: Bcrypt for password hashing and JSON Web Token (JWT) for secure token-based authentication
Middleware:
CORS for handling cross-origin requests
Morgan for HTTP request logging
Installation
Prerequisites
Node.js (>= 14.x)
MongoDB (local or cloud-based, e.g., MongoDB Atlas)
Steps
Clone the repository:
bash
Copy code
git clone https://github.com/johnbosco35/backend-todo-app.git
Navigate to the project directory:
bash
Copy code
cd backend-todo-app
Install dependencies:
bash
Copy code
npm install
Set up environment variables:
Create a .env file in the project root and define:
makefile
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Start the application:
bash
Copy code
npm start
Usage
Run the server:
bash
Copy code
npm start
Access the API at http://localhost:5000 or your configured port.
API Endpoints
Authentication
POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in and receive a JWT.
Task Management
GET /api/tasks: Get all tasks for the logged-in user.
POST /api/tasks: Create a new task.
PUT /api/tasks/:id: Update an existing task.
DELETE /api/tasks/:id: Delete a task.
Example Task Object
json
Copy code
{
"title": "Finish project",
"description": "Complete the Node.js project by Friday",
"status": "pending",
"userId": "userIdString"
}
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature-name
Commit changes:
bash
Copy code
git commit -m "Add feature-name"
Push to the branch:
bash
Copy code
git push origin feature-name
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.
