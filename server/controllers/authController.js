const express = require('express');
const authentication = require('../helpers/authentication');

const router = express.Router();

//
let redirectURL = '';
let success = false;

router.route('/signin')
  // .get(signInGet)
  .post(signInPost);

router.route('/signup')
  // .get(signUpGet)
  .post(signUpPost);

router.get('/signout', signOut);

// function signInGet(req, res) {
//   render = 'signin';
//   res.json(render);
// }

function signInPost(req, res) {
  console.log(req.body);
  authentication.signInWithUsernameAndPassword(req.body)
    .then(() => console.log('work'))
    .catch((errorMessage) => {
      flash: errorMessage
    }
    );
}

// function signUpGet(req, res) {
//   res.render('signup');
// }

function signUpPost(req, res) {
  
  authentication.signupWithUsernameAndPassword(req.body)
    .then(() => {      
      console.log('work');
    })
    .catch(error => {
      res.render('signup', {flash: error});
    });
}

function signOut(req, res) {
  authentication.signOut();
  res.redirect('/signin');
}

module.exports = router;
