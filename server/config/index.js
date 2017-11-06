let DEVELOPMENT = 'development';
let PRODUCTION = 'production';

const config = {
  DEVELOPMENT: {
    mode: DEVELOPMENT,
    port: 3000,
  },
  PRODUCTION: {
    mode: PRODUCTION,
    port: process.env.PORT,
  },
};

module.exports = function(mode) {
  const environment =
    mode || process.argv[2] || process.env.NODE_ENV || DEVELOPMENT;

  return config[environment] || config.DEVELOPMENT;
};
