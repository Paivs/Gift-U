const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './db.env') });

// console.log("DB_NAME: " + process.env.DB_NAME);
// console.log("DB_USER: " + process.env.DB_USER);
// console.log("DB_PASS: " + process.env.DB_PASS);

const mongoUri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:27017/${process.env.DB_NAME}?authSource=admin`;

mongoose.connect(mongoUri, { useUnifiedTopology: true })
  .then(() => console.log('MongoDB connection successful'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;

