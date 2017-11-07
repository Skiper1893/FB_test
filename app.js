const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const firebase = require('firebase');
// const index = require('./server/routes');
const authentication = require('./server/helpers/authentication');
const googleAlerts = require('./server/helpers/googleAlerts');


const app = express();
const port = 3000;

const router = express.Router();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(
    express.static(path.join(__dirname, 'dist'), {
        etag: false
    })
);


app.post('/search', (async (req, res) => {
  let interest = req.body.interest;
  const alert = await googleAlerts.createAlertByInterest(interest);
  const articles = await googleAlerts.downloadArticles(alert);//.then(result => { return result});
  googleAlerts.deleteAllAlerts();
  console.log(articles);
  res.send(articles);
}));


app.post('/signup',(req, res) => {

  let email = req.body.email;
	let password = req.body.password;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => console.log(`User : ${user}`))
    .catch(error => {
      console.log(`Error : ${error}`);
      return error;
  })
});

app.post('/signin', (req, res) => {

  let email = req.body.email;
  let password = req.body.password;

  firebase.auth().signInWithEmailAndPassword(email, password).then(user => console.log(user)).catch(function(error) {

  	var errorCode = error.code;
  	var errorMessage = error.message;

	});
});


app.get('/check', (req, res) => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(function(user) {
       console.log(user);
      if (user) {
        // User is signed in.
        // const displayName = user.displayName;
        // const email = user.email;
        // const emailVerified = user.emailVerified;
        // const photoURL = user.photoURL;
        // const isAnonymous = user.isAnonymous;
        // const uid = user.uid;
        // const providerData = user.providerData;
        console.log(user);
        // resolve(user);
      } else {
        resolve(null);
      }
    });
  });
});

// {
// firebase.auth().currentUser.getIdToken(true).then( idToken => {
  
//   console.log('Есть токен');
//   console.log(idToken);

//   }).catch(function(error) {
//   console.log(error);
//   });
// });


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listen on ${port} port`)
});


