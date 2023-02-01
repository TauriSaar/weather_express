const express = require('express');
const index = express();
const path = require('path')

// Middleware
index.use(express.static('public'));
index.use(express.urlencoded({ extended: true }))

// Import Route
const weatherRoute = require('./routes/weather');

// Use View Engine
index.set('view engine', 'ejs');
index.set('views', path.join(__dirname, 'views'))

// Middleware route
index.use('/', weatherRoute);

const PORT = process.env.PORT || 10000;

index.listen(PORT, () => console.log(`Server starting at port ${PORT}`));