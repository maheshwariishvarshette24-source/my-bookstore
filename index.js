const express = require("express");
const bodyParser = require("body-parser");

const books = require("./booksdb.js");
const { authenticated, users } = require("./auth_users.js");

const app = express();
app.use(bodyParser.json());

// Task 1: Get book list
app.get("/books", (req, res) => {
  res.json(books);
});

// Task 2: Get book by ISBN
app.get("/books/isbn/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  res.json(books[isbn]);
});

// Task 3: Get books by author
app.get("/books/author/:author", (req, res) => {
  const author = req.params.author;
  let results = [];
  for (let key in books) {
    if (books[key].author === author) {
      results.push(books[key]);
    }
  }
  res.json(results);
});

// Task 4: Get books by title
app.get("/books/title/:title", (req, res) => {
  const title = req.params.title;
  let results = [];
  for (let key in books) {
    if (books[key].title === title) {
      results.push(books[key]);
    }
  }
  res.json(results);
});

// Task 5: Get book reviews
app.get("/books/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  res.json(books[isbn].reviews);
});

// Import user routes
const regd_users = require("./auth_users.js").router;
app.use("/customer", regd_users);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
