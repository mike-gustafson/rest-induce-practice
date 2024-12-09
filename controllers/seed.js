const Book = require('../models/book');
const books = require('../data/books');

async function seed(req, res) {
    try {
        await Book.insertMany(books);
        res.status(201).send('Database seeded');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

exports.seed = (async (req, res) => {
    seed(req, res);
})
