const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  publishedYear: { type: Number },
  description: { type: String },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  coverImageUrl: { type: String } // Optional: For displaying book covers
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
