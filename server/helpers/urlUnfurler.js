const metascraper = require('metascraper');

const unfurl = (url) => {
  return new Promise((resolve, reject) => {
    if (url === 'undefined') {
      resolve({});
      return;
    }

    metascraper.scrapeUrl(url)
      .then(resolve)
      .catch(reject);
  });
};

module.exports = {
  unfurl,
};
