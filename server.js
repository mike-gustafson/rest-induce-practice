require('dotenv').config();
const morgan = require('morgan');
const express = require('express');
const methodOverride = require('method-override');

const PORT = process.env.PORT;

const app = express();

require('./config/database');

app.use(express.json());
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/seed', require('./routes/seed'));
app.use('/books', require('./routes/books'));

app.set('view engine', 'ejs');
app.set('views', './views');

// set home route
app.get('/', (req, res) => {
    res.render('home', { title: 'Library' });
})

// setup 404 page
app.use((req, res) => {
    res.status(404).render('404/notFound', { title: 'Page Not Found' });
})

// listen on port XXXX
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});