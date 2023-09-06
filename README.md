# User Registration and Address Submission

This is a web application that allows users to register and submit their address information. It's built using Node.js, Express.js, and MongoDB on the backend, and HTML, CSS, and JavaScript on the frontend.

## Table of Contents
- [Usage](#usage)
- [Backend](#backend)
  - [Technologies Used](#technologies-used)
  - [API Endpoints](#api-endpoints)
- [Frontend](#frontend)
  - [HTML Structure](#html-structure)
  - [JavaScript](#javascript)
### Installation
* Clone the repository:
```
git clone <repository-url>
````
#### Install the dependencies for the backend:

```
cd ../backend
npm install
```
### Usage 
> Start the backend server:
```
cd backend
nodemon index.js
```
- Access the application by opening a web browser and navigating to http://localhost:5000.

- Fill out the registration form with your name, email, password, phone, and address details.

- Click the "Submit" button to register and submit your address information.

# Backend
### Technologies Used
- Node.js and Express.js for the server.
- MongoDB for the database.
- Mongoose as the ODM (Object-Document Mapping) library.
- CORS for enabling Cross-Origin Resource Sharing.
### API Endpoints
- POST /api/createUserAndAddress: Create a new user and associated address.
# Frontend
### HTML Structure
- The HTML structure is organized with a registration form that collects user and address information.
### JavaScript
- JavaScript is used to handle form submission, make API requests to the backend, and display alerts for success or error messages.

