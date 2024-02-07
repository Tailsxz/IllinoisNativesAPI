const express = require('express');
const plants = require('./plants');
const { connectDB } = require('./config/db');

require('dotenv').config({ path: './config/.env' });

const app = express();

connectDB();

app.use(express.static('public'));

app.get('/plants/byId/:id', (request, response) => {
  const requestId = Number(request.params?.id)
  if (isNaN(requestId)) {
    return response.status(404).json({error: 'Please only use numbers for the id path'});
  }
  if (plants.some(plant => plant.id === requestId)) {
    response.json(plants[requestId - 1]);
  } else {
    response.status(404).json({error: 'Plant Not Found', message:'Sorry, the requested plant was not found. Please refer to our documentation in our github repo for more information.'})
  }
});

app.get('/plants/byName/:name', (request, response) => {
  //Decoding any spaces within the endpoint the client requested.
  // const requestName = decodeURIComponent(request.params.name.toLowerCase().split(' ').join(''));
  //sanitizing inputs
  const alphas = 'abcdefghijklmnopqrstuvwxyz'
  const requestName = request.params.name.toLowerCase().split('').filter((char) => alphas.includes(char)).join('');
  const plant = plants.find(plant => plant.lowerCaseAndRemoveSpace('commonName') === requestName);

  console.log(requestName, plant);

  if (plant) {
    response.json(plant);
  } else {
    response.status(404).json({error: 'Plant Not Found', message:'Sorry, the requested plant was not found. Please refer to our documentation in our github repo for more information.'})
  }
}) 

app.listen(process.env.PORT || 2277);