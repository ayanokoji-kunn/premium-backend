const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();
app.use(bodyParser.json());

// Connect DB
connectDB();

// Routes
app.use('/subscribe', require('./routes/Subscription'));
app.use('/payment-reference', require('./routes/payment'));

app.listen(3000, () => {
  console.log('Backend running on port 3000');
});