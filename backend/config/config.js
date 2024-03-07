require('dotenv').config();
const pg = require('pg');

const config = {
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  url: process.env.POSTGRES_URL,
  dialect: 'postgres',
  dialectModule: pg
};

module.exports = {
  development: config,
  test: config,
  production: config,
};