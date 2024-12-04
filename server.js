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
    console.log(books);
    const response = `New book created: ${newBook.title} by ${newBook.author}`;
    res.send(response);
})

// D - Delete
app.delete('/books/:id', (req, res) => {
    const bookIdx = books.findIndex(book => book.id === Number(req.params.id));
    const book = books[bookIdx];
    if (book) {
        books.splice(bookIdx, 1);
    }
    res.redirect('/books');
})

// U - Update
app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(book => book.id === bookId)
    if (bookIndex !== -1) {
        books[bookIndex] = { ...books[bookIndex], ...req.body }
        res.status(200).redirect(`/books`)
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
    res.send('Edit');
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});