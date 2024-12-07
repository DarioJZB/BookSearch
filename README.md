# Book Search Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Description

This project is a modification of a working Book Search website that originally used a RESTful API. The application has been updated to use **GraphQL** and **Apollo Server** for managing API requests. The project demonstrates the implementation of modern API techniques while maintaining the functionality of the original application.

You can view the live application here: [BookSearch](https://booksearch-4pwu.onrender.com/)

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **GraphQL Integration**: The REST API has been replaced with GraphQL to enhance flexibility and performance.
- **Apollo Server**: Implemented as the backend for handling GraphQL queries and mutations.
- **Book Search Functionality**: Users can search for books and save their favorites.
- **Authentication**: Login and signup functionality for users.
- **Responsive Design**: Optimized for viewing on multiple device sizes.

---

## Technologies Used

- **Frontend**: React, HTML, CSS, TypeScript, Vite
- **Backend**: Node.js, Express.js
- **GraphQL**: Apollo Server, Apollo Client
- **Database**: MongoDB (via Mongoose ODM)
- **Hosting**: Render for live deployment

---

## Installation

1. Clone the repository from GitHub:
   ```bash
   git clone https://github.com/DarioJZB/book-search.git
2. Navigate in the project directory:
    ```bash
    cd book-search
3. Install the necessary dependencies:
    ```bash
    npm install
4. Set up your environment variables:
    - Creave a .env file in the root directory.
    - Add the following variables:
    ```bash
    MONGO_URI=<your MongoDB connection goes here>
    SECRET_KEY=<your JWT secret goes here>
5. In the root directory, build the code:
    ```bash
    npm run build
6. Start the development server:
    ```bash
    npm run start
7. To start the front end, open a terminal from the client folder and run the following:
    ```bash
    npm run dev

---

## Usage
Visit the application with the above link or run the code locally.
In the search bar, you can look for book titles or authors. 
If you create an account, you can make a reading list by logging in and saving books in a wish-read-list. 

---

## Screenshots

#### Sign up page 
![alt text](/readmeimages/signup.png)
### Book search
![alt text](/readmeimages/search.png)
### Saved books
![alt text](/readmeimages/savedbooks.png)

---

## Contributing
Fork the repository and adjust the code to your liking or add any desired features. 

---

## License
This repository follows the MIT License

## Questions
Github profile: [DarioJZB](https://github.com/DarioJZB)<br> 
For additional questions, please email me at <dariojzb87@gmail.com>