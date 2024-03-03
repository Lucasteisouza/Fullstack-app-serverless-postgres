const config = {
  url: process.env.DB_URL,
  dialect: 'postres',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};