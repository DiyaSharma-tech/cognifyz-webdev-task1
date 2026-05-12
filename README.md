\# Cognifyz Web Development Internship - Task 1



\## HTML Structure and Basic Server Interaction



\---



\# Project Overview



This project was developed as part of the Cognifyz Web Development Internship Program.



The objective of this task was to understand and implement the fundamentals of server-side web development using Node.js, Express.js, and EJS templating.



The application collects user information through an HTML form and processes the submitted data on the server side. The entered information is then dynamically displayed using EJS server-side rendering.



\---



\# Objectives of the Task



\- Create an HTML structure with forms for user input

\- Set up a Node.js server using Express.js

\- Handle form submissions using server-side routes

\- Implement dynamic HTML generation using EJS

\- Understand the basics of server-side rendering



\---



\# Technologies Used



| Technology | Purpose |

|------------|---------|

| HTML5 | Structure of web pages |

| Node.js | JavaScript runtime environment |

| Express.js | Backend framework for routing and server handling |

| EJS | Template engine for server-side rendering |



\---



\# Features



\- User-friendly HTML form

\- Form validation using HTML required fields

\- Server-side handling of form data

\- Dynamic rendering of submitted information

\- Clean and simple project structure

\- Basic Express.js routing implementation



\---



\# Project Structure



```bash id="fw9mkc"

cognifyz-webdev-task1/

│

├── views/

│   ├── index.ejs

│   └── result.ejs

│

├── public/

│

├── app.js

├── package.json

└── README.md

```



\---



\# Working of the Application



\## Step 1: Home Page

The user opens the application in the browser.



\## Step 2: Form Submission

The user enters:

\- Name

\- Email Address



and submits the form.



\## Step 3: Server Processing

The form data is sent to the Express.js server using a POST request.



\## Step 4: Dynamic Rendering

The server processes the data and renders the `result.ejs` page dynamically using EJS templating.



\---



\# Code Explanation



\## app.js



The `app.js` file:

\- Creates the Express server

\- Configures middleware

\- Handles routes

\- Processes form submissions

\- Renders EJS pages dynamically



\### Main Functionalities

\- Express server setup

\- Middleware configuration

\- Static file handling

\- GET and POST routes

\- EJS rendering



\---



\## index.ejs



The `index.ejs` file contains:

\- HTML form structure

\- Name input field

\- Email input field

\- Submit button



This page acts as the main user interface.



\---



\## result.ejs



The `result.ejs` file:

\- Receives user data from the server

\- Displays submitted information dynamically using EJS syntax



Example:

```ejs id="1b7ncd"

<%= name %>

<%= email %>

```



\---



\# Installation and Setup



\## Step 1: Clone the Repository



```bash id="n0u3tr"

git clone <repository-link>

```



\---



\## Step 2: Navigate to Project Folder



```bash id="x7kz0f"

cd cognifyz-webdev-task1

```



\---



\## Step 3: Install Dependencies



```bash id="2g9ylu"

npm install

```



\---



\## Step 4: Run the Application



```bash id="v1m8ep"

node app.js

```



\---



\## Step 5: Open in Browser



```bash id="7p2sld"

http://localhost:3000

```



\---



\# Output



\## User Form Page

The homepage displays a form where users can enter their:

\- Name

\- Email



\## Result Page

After submission, the application dynamically displays the entered information.



\---



\# Learning Outcomes



Through this project, the following concepts were understood and implemented:



\- Basics of server-side development

\- Express.js routing

\- Handling HTTP GET and POST requests

\- Form data processing

\- Middleware usage

\- Server-side rendering using EJS

\- Dynamic content generation



\---



\# Future Improvements



Possible enhancements for the project:

\- Add CSS styling for better UI

\- Implement database integration

\- Add user authentication

\- Add error handling

\- Improve responsiveness



\---



\# Author



\*\*Diya Sharma\*\*



Web Development Internship Project Submission  

Cognifyz Technologies



\---



\# Internship Information



This project was completed as part of the Cognifyz Web Development Internship Program under Task 1:

\*\*HTML Structure and Basic Server Interaction\*\*



\---

