# Contact Search Feature Documentation

## Overview
The **Contact Search** feature allows users to search and view contact details from a list of contacts. The project includes multiple search filters such as **First Name**, **Last Name**, **Email**, **Phone Number**, and more. It displays results in a table format with pagination, and users can select a contact to view detailed information.

**Live Demo**: [Contact Search Feature - Live Demo](https://contactfinder.netlify.app/)

---

## Project Features
- **Multiple Search Filters**: Users can filter contacts based on:
  - First Name
  - Last Name
  - Date of Birth
  - Email Address
  - Phone Number
  - Street Address
  - City, State, Zip Code
- **Search Results Displayed in a Table**: Filtered contacts are shown in a table with the following columns:
  - Name
  - Date of Birth
  - Address
  - City
  - State
  - Zip Code
  - Email Address
  - Phone Number
- **Pagination**: A pagination component is used to display a limited number of contacts per page and allows easy navigation for large datasets.
- **Single Contact Selection**: Users can click on a contact’s name to select it, which automatically populates the form with the selected contact’s details.
- **User Interface**: The UI is designed for simplicity and usability, with an easy-to-use search bar and a responsive layout.

---

## Technologies Used
- **React**: Used for the front-end to handle UI components and state management.
- **Vite**: The build tool used for fast development and efficient builds.
- **Vitest**: A testing framework for unit and integration tests.
- **React Router**: For handling routing and page navigation.

---

## How the Code Works
1. **SearchForm Component**:
   - **Purpose**: This component contains the form where users input search criteria.
   - **How it Works**: 
     - It listens for changes in the input fields and updates the form data.
     - When the search button is clicked, it filters the `contacts` list based on the user input and updates the `filteredContacts` state.
  
2. **ContactTable Component**:
   - **Purpose**: This component displays the filtered contacts in a table format.
   - **How it Works**: 
     - It maps over the `filteredContacts` state to create rows in the table.
     - Each contact has a checkbox for selection and a clickable link that directs to a detailed view of the contact.

3. **Pagination Component**:
   - **Purpose**: The pagination component handles dividing the contacts into pages.
   - **How it Works**: 
     - Based on the current page and total number of contacts, it calculates the items to be displayed.
     - It allows the user to navigate between pages.

4. **Single Contact Selection**:
   - **Purpose**: This feature allows users to select a contact from the list.
   - **How it Works**: 
     - When a contact is clicked, its data is populated in the form below the table. This happens by setting the selected contact into the form data state.

---

## Getting Started
To run the project locally, follow these steps:

### 1. Clone the Repository
```bash
git clone <repository-url>
2. Install Dependencies
Navigate to the project directory and install dependencies using:

bash
Copy code
npm install
3. Run the Development Server
To start the development server and see the project in action:

bash
Copy code
npm run dev
This will run the project locally at http://localhost:3000.

Testing
Running Tests with Vitest
To run the tests for the project:

Install necessary testing dependencies if not installed:

bash
Copy code
npm install --save-dev vitest @testing-library/react
Run the tests:

bash
Copy code
npx vitest run
For a watch mode (continuous testing as files change):

bash
Copy code
npx vitest --watch
Deployment
The project is deployed on GitHub Pages. If you want to deploy it to your own GitHub Pages:

Build the project:

bash
Copy code
npm run build
Deploy using GitHub Pages (Ensure your repository is set to deploy from the gh-pages branch):

bash
Copy code
npm run deploy