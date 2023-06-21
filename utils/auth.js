const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/userLogin');
    } else {
        next();
    }
};

module.exports = withAuth;
