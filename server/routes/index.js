const express = require('express');

const auth = require('../helpers/authentication');
const uris = require('../helpers/uris');
const controllers = require('../controllers');

const router = express.Router();


/* Signin */

router.post('/auth/signin', controllers.auth.signInPost);
/* Signup */

router.post('/auth/signup', controllers.auth.signUpPost);
/* Signout */
router.get('/auth/out', controllers.auth.signOut);
/* Search */
router.get(
  '/search',
  // auth.verifySignedIn,
  controllers.search.contentByInterest
);
/* Articles */
router.get(uris.ARTICLE_METADATA, controllers.articlesController.metadata);

module.exports = router;
