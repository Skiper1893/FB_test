const auth = require('../helpers/authentication');

function verifySignedIn(req, res, next) {
  auth.getSignedInUser().then(user => {
    if (user != null) {
      next();
    } else {
      res.redirect('/signin');
    }
  });
}

module.exports = {
  verifySignedIn,
};
