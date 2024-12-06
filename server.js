require('dotenv').config();

const morgan = require('morgan');
const express = require('express');
const methodOverride = require('method-override');

const books = require('./data/books.js');
const PORT = process.env.PORT;
const Book = require('./models/book');
const app = express();

// configure mongoose
require('./config/database');

app.use(morgan('dev'));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

// I.N.D.U.C.E. routes

// I - Index
app.get('/', (req, res) => {
    res.render('home', { title: 'Library' });
})

app.get('/books', (req, res) => {
    res.render('book', { title: "Book List", books: books });
})

app.get('/books/new', (req, res) => {
    res.render('book/new.ejs', { title: 'New Book' });
})

app.get('/books/:id', (req, res) => {
    const book = books.find(book => book.id === Number(req.params.id));
    if (book) {
        res.render('book/show', { title: book.title, book: book });
    } else {
        res.status(404).render('404/notFound', { title: 'Book Not Found' });
    }
})

// N - New
app.post('/books/new', (req, res) => {
    const newBook = { id: books.length + 1, title: 'New Book', author: 'New Author' };
    books.push(newBook);
    const response = `New book created: ${newBook.title} by ${newBook.author}`;
    res.send(response);
})

app.post('/seed', async (req, res) => {
    try {
        await Book.insertMany(books);
        res.send('Database seeded');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

// D - Delete
app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIdx = books.findIndex(book => book.id === bookId);
    if (bookIdx !== -1) {
        books.splice(bookIdx, 1);
    } else {
        res.status(404).render('404/notFound', { title: 'Book Not Found' });
    }
    res.status(200).redirect('/books');
})

// U - Update
app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(book => book.id === bookId)
    console.log(bookIndex)
    if (bookIndex !== -1) {
        for (const key in req.body) {
            books[bookIndex][key] = req.body[key];
        }
        res.status(200).redirect('/books')
    } else {
        res.status(404).render('404/notFound', { title: 'Book Not Found' })
    }
})

// C - Create
app.post('/books', (req, res) => {
    const newBook = { 
        id: books.length + 1,
        title: req.body.title, 
        author: req.body.author,
        published: req.body.published || '',
        description: req.body.description || '',
    };
    if (newBook.title && newBook.author) {
        books.push(newBook);
        res.status(201).redirect('/books');
    } else {
        res.status(400).json({ message: 'Invalid book' });
    }
})

// E - Edit
app.get('/books/:id/edit', (req, res) => {
    const book = books.find(book => book.id === Number(req.params.id));
    if (book) {
        res.render('book/edit', { title: 'Edit Book', book: book });
    } else {
        res.status(404).render('404/notFound', { title: 'Book Not Found' });
    }
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});