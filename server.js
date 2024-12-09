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

app.use('/seed', require('./routes/seed'));
app.use('/books', require('./routes/books'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home', { title: 'Library' });
})


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});