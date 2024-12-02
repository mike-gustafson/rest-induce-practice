const methodOverride = require('method-override');
const express = require('express');
const morgan = require('morgan');
const books = require('./data/books.js');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

// I.N.D.U.C.E. routes

// I - Index
app.get('/', (req, res) => {
    //  res.send('Hello World');\
    res.render('home', { title: 'Library' });
})

app.get('/books', (req, res) => {
    res.render('book', { title: "Book List", books: books });
})


app.get('/books/new', (req, res) => {
    res.send('New');
})
app.get('/books/:id', (req, res) => {
    const book = books.find(book => book.id === Number(req.params.id));
    if (book) {
        res.send(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
})

// N - New
app.post('/books/new', (req, res) => {
    const newBook = { id: books.length + 1, title: 'New Book', author: 'New Author' };
    books.push(newBook);
    const response = `New book created: ${newBook.title} by ${newBook.author}`;
    res.send(response);
})

// D - Delete
app.delete('/books/:id', (req, res) => {
    const book = books.find(book => book.id === Number(req.params.id));
    const response = book ? `Deleted ${book.title}` : 'Book not found';
    res.send(response);
})

// U - Update
app.put('/books/:id', (req, res) => {
    const bookId = Number(req.params.id);
    const bookIdx = books.findIndex(book => book.id === bookId);
    
    if (bookIdx !== -1) {
        const book = books[bookIdx];
        const bookUpdates = req.body;
        books[bookIdx] = { ...book, ...bookUpdates };
        const response = `Updated book: ${book.title}`;
        res.send(response);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
})

// C - Create
app.post('/books', (req, res) => {
    const newBook = { 
        id: books.length + 1,
        title: req.params.title, 
        author: req.params.author };
    
    if (newBook.title && newBook.author) {
        books.push(newBook);
        res.send(`Created book: ${newBook.title} by ${newBook.author}`);
    } else {
        res.status(400).json({ message: 'Invalid book' });
    }
})

// E - Edit
app.get('/books/:id/edit', (req, res) => {
    res.send('Edit');
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});