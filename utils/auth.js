const withAuth = (req, res, next) => {
  // TODO: Add a comment describing the functionality of this if statement
  if (!req.session.logged_in) {
    res.redirect('/characters');
  } else {
    next();
  }
};

module.exports = withAuth;
