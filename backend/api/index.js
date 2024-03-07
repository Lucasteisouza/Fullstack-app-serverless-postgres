
const express = require('express');
const app = express();
const cors = require('cors');

const loginRoute = require('../routes/loginRoute');
const productsRoute = require('../routes/productsRoute');

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use('/', (req, res) => res.send('Express API running on Vercel'));
app.use('/login', loginRoute)
app.use('/products', productsRoute)


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;