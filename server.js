require('dotenv').config();
const morgan = require('morgan');
const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');

const PORT = process.env.PORT;

const app = express();

require('./config/database');

app.use(express.json());
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { 
            maxAge: 60000 
        },
    })
);

app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

app.use('/auth', require('./routes/auth'));
app.use('/seed', require('./routes/seed'));
app.use('/books', require('./routes/books'));
app.use('/users', require('./routes/users'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    const username = req.session.user ? req.session.user.username : '';
    res.render('home', { title: 'Library', username });
})

app.use((req, res) => {
    res.status(404).render('404/notFound', { title: 'Page Not Found' });
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('Press Ctrl-C to terminate or type "rs" and press <enter> to restart"...');
});