const Book = require('../models/book');

// Index - display data
exports.index = async (req, res) => {
    try {
        const books = await Book.find({});
        res.render('book', { title: "Book List", books });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.show = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book) {
            res.render('book/show', { title: book.title, book });
        } else {
            res.status(404).render('404/notFound', { title: 'Book Not Found' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// New - display form to create new data
exports.addNew = (req, res) => {
    res.render('book/new', { title: 'New Book' });
};

// Destroy - delete data
exports.delete = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (book) {
            res.status(200).redirect('/books');
        } else {
            res.status(404).render('404/notFound', { title: 'Book Not Found' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update - update data in the database
exports.update = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (book) {
            res.status(200).redirect('/books');
        } else {
            res.status(404).render('404/notFound', { title: 'Book Not Found' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Create - create new data in the database
exports.create = async (req, res) => {
    try {
        const newBook = new Book({
            title: req.body.title,
            author: req.body.author,
            published: req.body.published,
            description: req.body.description,
        });
        await newBook.save();
        res.status(201).redirect('/books');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Edit - display form to edit data
exports.edit = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book) {
            res.render('book/edit', { title: 'Edit Book', book });
        } else {
            res.status(404).render('404/notFound', { title: 'Book Not Found' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}