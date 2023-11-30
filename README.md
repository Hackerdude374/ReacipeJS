# React Recipe Finder

A delightful recipe website where you can add, view, and explore delicious recipes.

## Demo
https://streamable.com/ny18nx

## 🛠 Technologies Used

- **CSS**: For styling and layout.
- **React**: Utilized for building the user interface components.
- **Vite**: An improved build tool for faster and leaner development.
- **Tailwind CSS**: Utility-first CSS framework for rapidly building custom user interfaces.
- **Json Server**: Emulated a backend server for the mock API, ensuring persistent data storage.




## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
4. [Usage](#usage)
5. [Async Functions](#async-functions)
6. [State Management](#state-management)
7. [Search Functionality](#search-functionality)
8. [Styling](#styling)
9. [Backend Setup](#backend-setup)
10. [Contributing](#contributing)
11. [License](#license)

## Introduction
React Recipe Finder is a user-friendly web application that allows you to manage and explore a collection of your favorite recipes. With features like adding new recipes, browsing, and searching, it's the perfect tool for food enthusiasts.

## ✨ Features

- **State Management**: Leveraged React's useState hook for dynamic recipe list display.
- **Seamless Navigation**: Integrated React Router for fluid navigation and improved search capabilities, enhancing the overall user experience.
- **Recipe Submission**: Built a Form component for users to submit their recipes. This feature ensures data persistence via the mock API.
- **CRUD Operations**: Enabled the ability to update and delete recipes, ensuring full flexibility and control over the recipe data with backend support.

## Getting Started
To get started with React Recipe Finder, follow these steps:

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/react-recipe-finder.git

# Change into the project directory
cd react-recipe-finder

# Install dependencies
npm install
```


## Usage
```bash
# Run the backend server for data management
npm start

# Run the frontend for visualization

```
Visit http://localhost:3000 in your browser for the frontend visualization.

Make sure to run the backend server to enable data management and ensure the saving of new recipes on the website even after a refresh.
```bash
json-server --watch db.json --port 3001
```

## Async Functions

### Fetching Recipes (`fetchRecipes` Function)

The following asynchronous function, `fetchRecipes`, demonstrates the use of the `async/await` pattern to fetch recipe data from a server. This function utilizes the modern `fetch` API to make a network request.

```javascript
async function fetchRecipes() {
  try {
    // Asynchronously fetch recipe data from the server
    const response = await fetch('https://api.example.com/recipes');
    
    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`Failed to fetch recipes. Status: ${response.status}`);
    }

    // Parse the response as JSON
    const recipes = await response.json();

    // Process the fetched recipes as needed
    console.log('Fetched Recipes:', recipes);
    
    return recipes;
  } catch (error) {
    // Handle errors during the asynchronous operation
    console.error('Error fetching recipes:', error.message);
    throw error;
  }
}
```
**Technical Explanation:**

- The `async` keyword indicates that the function will perform asynchronous operations, allowing the use of `await`.
- The `await` keyword is used to pause the execution of the function until the asynchronous operation (e.g., fetching data) is complete.
- The `try/catch` block is employed to handle potential errors during the asynchronous operation.
- The `fetch` API is utilized to make an asynchronous network request to the specified URL.
- The response status is checked, and if it's not okay, an error is thrown.
- The response is then parsed as JSON using `response.json()`.
- The fetched recipes are logged and returned.

This asynchronous function showcases modern JavaScript's clean and concise syntax for handling asynchronous operations, providing a robust mechanism for fetching and processing data from a remote server.

Feel free to customize the function name, URL, and error handling based on your specific project requirements.
