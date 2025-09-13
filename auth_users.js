const express = require("express");
const router = express.Router();

// Users database
let users = [];

// Check if username is valid (not already registered)
const isValid = (username) => {
  return !users.some(user => user.username === username);
};

// Authenticate user
const authenticated = (username, password) => {
  return users.some(user => user.username === username && user.password === password);
};

// Register new user
router.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (username && password && isValid(username)) {
    users.push({ username, password });
    return res.json({ message: "User registered successfully" });
  }
  res.status(400).json({ message: "Invalid or existing user" });
});

// Login user
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (authenticated(username, password)) {
    return res.json({ message: "Login successful" });
  }
  res.status(401).json({ message: "Invalid credentials" });
});

module.exports = { router, users, authenticated };
