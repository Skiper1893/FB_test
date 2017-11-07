const express = require('express');
const controllers = require('../controllers');
const authMiddleware = require('../middlewares/authentication');

const router = express.Router();

// router.get('/', authMiddleware.verifySignedIn, (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

router.use(controllers.authController);
router.use(controllers.searchController);
router.use('/articles', controllers.articlesController);

module.exports = router;
