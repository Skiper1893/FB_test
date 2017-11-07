const authenticationStrategy = require('./firebaseAuthentication');

function getSignedInUser() {
  return authenticationStrategy.getSignedInUser();
}

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
  getSignedInUser,
  signInWithUsernameAndPassword,
  signupWithUsernameAndPassword,
  signOut,
};
