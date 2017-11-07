const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const firebase = require('firebase');
// const index = require('./server/routes');
const authentication = require('./server/helpers/authentication');

const app = express();
const port = 3000;


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(
    express.static(path.join(__dirname, 'dist'), {
        etag: false
    })
);

// app.use('/api', index);



function signInPost(req, res) {
  console.log(req.body);
  firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}

function signUpPost(req, res) {
	  console.log(req.body.email);
	  console.log(req.body.password);

  authentication.signupWithUsernameAndPassword('evg-1993@yandex.ru', '123456')
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

app.post('/signup', (async (req, res) => {

	console.log('try to create user');

  await firebase.auth().createUserWithEmailAndPassword("nodeuser@firebaseui.com", "firebase")
    .then(user => console.log(user))
    .catch(error => console.error(error))
}));


app.post('/signin', (req, res) => {

  console.log(req.body);
  firebase.auth().signInWithEmailAndPassword("nodeuser@firebaseui.com", "firebase").then(user => console.log(user)).catch(function(error) {

  	var errorCode = error.code;
  	var errorMessage = error.message;
  // ...
	});
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listen on ${port} port`)
});


