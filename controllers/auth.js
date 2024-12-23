const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.login = (req, res) => {
    res.render('auth/sign-in', { title: 'Login' });
}

exports.authenticate = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username });
        if (user) {
            const valid = await bcrypt.compare(password, user.password);
            if (valid) {
                req.session.user = user;
                res.redirect('/books');
            } else {
                console.log('Invalid username or password');
                res.render('auth/sign-in', { title: 'Login', error: 'Invalid username or password' });
            }
        } else {
            res.render('auth/sign-in', { title: 'Login', error: 'Invalid username or password' });
        }
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

exports.register = (req, res) => {
    res.render('auth/register', { title: 'Register' });
}

exports.createUser = async (req, res) => {
    const { username, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
        res.render('auth/register', { title: 'Register', error: 'Passwords do not match' });
    }
    const doesUserExist = await User.findOne({ username: username });
    if (doesUserExist) {
        res.render('auth/register', { title: 'Register', error: 'User already exists' });
    } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        res.redirect('login');
    } 
}

exports.editUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.render('auth/edit', { title: 'Edit User', user });
    } 
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        res.redirect('/books');
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

exports.logout = (req, res) => {
    req.session.destroy();
    console.log('Session destroyed');
    console.log(req.session)
    res.redirect('/');
}

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.redirect('/');
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}