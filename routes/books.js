const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const Book = require('../models/Book');

// Protect all book routes with JWT middleware
router.use(authMiddleware);

// Example GET books route
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Other book routes...

module.exports = router;
