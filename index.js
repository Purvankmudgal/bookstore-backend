const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

require('dotenv').config();

const app = express();
connectDB();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));
app.use(express.json());

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/books', require('./routes/books'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
