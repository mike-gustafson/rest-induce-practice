const User = require('../models/user');
const bcrypt = require('bcrypt');

// router.get('/', ensureAuthenticated, usersController.index);
exports.index = (req, res) => {
    res.render('account/', { title: 'Users', user: req.session.user });
};


// router.get('/:id/edit', ensureAuthenticated, usersController.edit);
exports.edit = (req, res) => {
    res.render('account/edit', { title: 'Edit User', user: req.session.user });
};

// router.get('/:id/delete', ensureAuthenticated, usersController.confirmDelete);  
exports.confirmDelete = (req, res) => {
    res.render('account/confirmDelete', { title: 'Delete User', user: req.session.user });
};

// router.delete('/:id', ensureAuthenticated, usersController.delete);
exports.delete = async (req, res) => {
    console.log('delete user');
    try {
        const id = req.session.user._id;
        const user = await User.findByIdAndDelete(id);
        if (user) {
            res.redirect('/auth/logout')
        } else {
            res.status(404).render('404/notFound', { title: 'User Not Found' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// router.put('/:id', ensureAuthenticated, usersController.update);
exports.update = async (req, res) => {
    try {
        const id = req.session.user._id;
        const updatedPassword = await bcrypt.hash(req.body.password, 10);
        const updatedUser = {
            username: req.body.username,
            email: req.body.email,
            password: updatedPassword || req.session.user.password, 
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            location: req.body.location
        }
        const user = await User.findByIdAndUpdate(id, updatedUser);
        if (user) {
            res.render('account/', { title: 'User Updated', user });
        } else {
            res.status(404).render('404/notFound', { title: 'User Not Found' });
        }
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

exports.changePassword = (req, res) => {
    res.render('account/changePassword', { title: 'Change Password' });
}