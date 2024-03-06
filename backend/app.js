const express = require('express');
const app = express();
const cors = require('cors');

const loginRoute = require('./routes/loginRoute');
const productsRoute = require('./routes/productsRoute');

app.use(express.json());
app.use(cors());

app.use('/login', loginRoute)
app.use('/products', productsRoute)

module.exports = app;