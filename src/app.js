const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const config = require('./config/config');

const app = express();
app.use(express.json());

mongoose.connect(config.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/users', userRoutes);

module.exports = app;