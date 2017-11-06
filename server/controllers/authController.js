const authentication = require('../helpers/authentication');
const uris = require('../helpers/uris');
let redirect = '';

function signInGet(req, res) {
  redirect = 'uris.SIGN_IN';
  res.send(redirect)
}

function signInPost(req, res) {
  authentication.signInWithUsernameAndPassword(req.body.user)
    .then(() => console.log('Ok'))
    .catch((errorMessage) => { 
      console.log('no ok');
    });
}

function signOut(req, res) {
  authentication.singOut();
  redirect = 'uris.SIGN_IN';
  res.send(redirect);
}

function signUpGet(req, res) {
  redirect = 'uris.SIGN_UP';
  res.send(redirect)
}

function signUpPost(req, res) {
  authentication.signupWithUsernameAndPassword(req.body.user)
    .then(() => {
    redirect = 'uris.ROOT';
    res.send(redirect) 
    })
    .catch(error => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(`Error: ${error.code}`);
      console.log(`Error: ${error.message}`);
    });
}

function signOut(req, res) {
  authentication.signOut();
  redirect = 'uris.SIGN_IN';
  res.send(redirect);
}

module.exports = {
  signInGet,
  signInPost,
  signUpGet,
  signUpPost,
  signOut,
};
00101000