const express = require('express');
const app = express();
const cors = require('cors');

const loginRoute = require('./routes/loginRoute');

app.use(express.json());
app.use(cors());

app.use('/login', loginRoute)
// app.use(apiCredentials);

module.exports = app;