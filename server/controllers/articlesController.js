const urlUnfurler = require('../helpers/urlUnfurler');

async function metadata(req, res) {
  const articleUrl = decodeURI(req.query.articleUrl);
  const articleMetadata = await unfurl(articleUrl);
  res.json(articleMetadata);
}

async function unfurl(url) {
  return await urlUnfurler.unfurl(url);
}

module.exports = {
  metadata,
};
