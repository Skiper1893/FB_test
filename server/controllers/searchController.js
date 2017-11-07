const express = require('express');
const googleAlerts = require('../helpers/googleAlerts');

const router = express.Router();

router.get('/search', contentByInterest);

async function contentByInterest(req, res) {
  const interest = decodeURI(req.query.interest);
  const alert = await googleAlerts.createAlertByInterest(interest);
  const articles = await googleAlerts.downloadArticles(alert);
  googleAlerts.deleteAllAlerts();

  res.json({articles});
}

module.exports = router;
