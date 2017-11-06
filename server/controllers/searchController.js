const googleAlerts = require('../helpers/googleAlerts');

async function contentByInterest(req, res) {
  const interest = decodeURI(req.query.interest);
  const alert = await googleAlerts.searchByInterest(interest);
  const articles = await googleAlerts.downloadArticles(alert);
  googleAlerts.deleteAllAlerts();

  res.send(articles);
}

module.exports = {
  contentByInterest,
};
