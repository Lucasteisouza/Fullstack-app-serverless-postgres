require('dotenv').config();

const config = {
  url: process.env.POSTGRES_URL,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  dialect: 'postgres',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};