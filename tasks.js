const axios = require("axios");

// Base URL
const BASE_URL = "http://localhost:5000";

// Task 10: Get all books (async/await)
async function getAllBooks() {
  try {
    const res = await axios.get(`${BASE_URL}/books`);
    console.log("All Books:", res.data);
  } catch (err) {
    console.error(err);
  }
}

// Task 11: Get book by ISBN (Promises)
function getBookByISBN(isbn) {
  axios.get(`${BASE_URL}/books/isbn/${isbn}`)
    .then(res => console.log(`Book with ISBN ${isbn}:`, res.data))
    .catch(err => console.error(err));
}

// Task 12: Get books by Author (async/await)
async function getBooksByAuthor(author) {
  try {
    const res = await axios.get(`${BASE_URL}/books/author/${author}`);
    console.log(`Books by Author ${author}:`, res.data);
  } catch (err) {
    console.error(err);
  }
}

// Task 13: Get books by Title (async/await)
async function getBooksByTitle(title) {
  try {
    const res = await axios.get(`${BASE_URL}/books/title/${title}`);
    console.log(`Books with Title "${title}":`, res.data);
  } catch (err) {
    console.error(err);
  }
}

// Run all tasks
getAllBooks();
getBookByISBN("111");
getBooksByAuthor("Author A");
getBooksByTitle("Book One");
