const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    published: { type: String},
    description: { type: String},
    coverImage: { type: String},
    
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
