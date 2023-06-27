const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000; // or any other port number you prefer

// Add middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up routes for user registration and login

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
