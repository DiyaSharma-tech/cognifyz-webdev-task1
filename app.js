// Import Express framework
const express = require("express");

// Import path module to work with folder paths
const path = require("path");

// Create Express application
const app = express();

// Set server port number
const PORT = 3000;

// Middleware to read form data from HTML forms
app.use(express.urlencoded({ extended: true }));

// Set EJS as template/view engine
app.set("view engine", "ejs");

// Make public folder accessible for CSS, images, etc.
app.use(express.static(path.join(__dirname, "public")));

// Route for home page
app.get("/", (req, res) => {

    // Render index.ejs page
    res.render("index");
});

// Route to handle form submission
app.post("/submit", (req, res) => {

    // Get name and email from form data
    const { name, email } = req.body;

    // Render result.ejs and send data to it
    res.render("result", {

        // Send name value
        name,

        // Send email value
        email
    });
});

// Start server and listen on port 3000
app.listen(PORT, () => {

    // Show message when server starts
    console.log(`Server running on http://localhost:${PORT}`);
});