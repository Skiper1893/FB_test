const rssParser = require('rss-parser');

const parseURL = (feedURL) => {
  return new Promise((resolve, reject) => {
    rssParser.parseURL(feedURL, (error, parsed) => {
      error ? resolve([]) : resolve(parsed.feed.entries);
    });
  });
};

module.exports = {
  parseURL,
};
