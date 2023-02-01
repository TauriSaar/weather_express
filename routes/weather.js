const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
require('dotenv').config();

router.get('/', (req, res) => {
  res.render('index', {
    city: '',
    description: '',
    icon: '',
    temperature: ''
  });
});

router.post('/', async (req, res) => {
  const city = req.body.city;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.message === 'city not found') {
      res.render('index', {
        city: data.message,
        description: '',
        icon: '',
        temperature: ''
      });
    } else {
      res.render('index', {
        city: data.name,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        temperature: Math.round(data.main.temp)
      });
    }
  } catch (error) {
    res.render('index', {
      city: 'something went wrong',
      description: '',
      icon: '',
      temperature: ''
    });
  }
});

module.exports = router;
