let uris = {};

uris.ROOT = '/';
/* Signin/Signup/Signout */
uris.AUTH = `${uris.ROOT}auth`;
uris.SIGN_IN = `${uris.AUTH}/signin`;
uris.SIGN_UP = `${uris.AUTH}/signup`;
uris.SIGN_OUT = `${uris.AUTH}/signout`;
/* Search */
uris.SEARCH = `${uris.ROOT}search`;
/* Articles */
uris.ARTICLE_METADATA = `${uris.ROOT}articles/metadata`;

module.exports = uris;
