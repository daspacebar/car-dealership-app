const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');

//port handling
dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

//log request
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Car dealership application');
})

app.listen('3000', () => {
  console.log(`Server is running on PORT ${3000}`);
})
