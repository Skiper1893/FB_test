const uris = require('./uris');
const authenticationStrategy = require('./firebaseAuthentication');

// function verifySignedIn(req, res, next) {
//   authenticationStrategy.getSignedInUser().then(user => {
//     if (user != null) {
//       next();
//     } else {
//       res.redirect(uris.SIGN_IN);
//     }
//   });
// }

function signInWithUsernameAndPassword({username, password}) {
  return authenticationStrategy.signInWithUsernameAndPassword(
    username,
    password
  );
}

function signupWithUsernameAndPassword({username, password}) {
  return authenticationStrategy.signupWithUsernameAndPassword(
    username,
    password
  );
}

function signOut() {
  authenticationStrategy.signOut();
}

module.exports = {
  // verifySignedIn,
  signInWithUsernameAndPassword,
  signupWithUsernameAndPassword,
  signOut,
};
