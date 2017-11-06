const firebase = require('firebase');

const config = {
  apiKey: 'AIzaSyCYaKEb7My9ToX9xcS59x4qRkKOBhGEyV0',
  authDomain: 'nectar-5d0bf.firebaseapp.com',
  databaseURL: 'https://nectar-5d0bf.firebaseio.com',
  projectId: 'nectar-5d0bf',
  storageBucket: 'nectar-5d0bf.appspot.com',
  messagingSenderId: '1013364943564',
};

firebase.initializeApp(config);

module.exports = {
  getSignedInUser,
  signInWithUsernameAndPassword: signInWithEmailAndPassword,
  signupWithUsernameAndPassword: signupWithEmailAndPassword,
  signOut,
};

function getSignedInUser() {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        // const displayName = user.displayName;
        // const email = user.email;
        // const emailVerified = user.emailVerified;
        // const photoURL = user.photoURL;
        // const isAnonymous = user.isAnonymous;
        // const uid = user.uid;
        // const providerData = user.providerData;

        resolve(user);
      } else {
        resolve(null);
      }
    });
  });
};

function signInWithEmailAndPassword(email, password) {
  return new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(resolve)
      .catch(error => reject(error.message));
  });
}

function signupWithEmailAndPassword(email, password) {
  return new Promise((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(resolve)
      .catch(error => reject(error.message));
  });
}

function signOut() {
  firebase.auth().signOut();
}
