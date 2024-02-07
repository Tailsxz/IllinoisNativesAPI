const express = require('express');
const morgan = require('morgan');
const { MongoClient } = require('mongodb');
const plants = require('./plants');

plants.forEach(plant => {
  const queryName = plant.lowerCaseAndRemoveSpace('commonName');
  plant.queryName = queryName;
});

require('dotenv').config({ path: './config/.env' });

const app = express();

const client = new MongoClient(process.env.DB_STRING);
let db, collection;

async function startDB() {
  try {   
    await client.connect();

    await client.db('admin').command({ ping: 1 });
    console.log('Database connected...');
    
    db = client.db('ILNatives');
    collection = db.collection('plants');
  } catch(err) {
    console.error(err);
  }
}
startDB();

app.use(morgan('tiny'));
app.use(express.static('public'));

function filterPlant(plant) {
  delete plant.queryName;
  delete plant._id;
  delete plant.id;
}

app.get('/plants/byId/:id', async (req, res) => {
  const id = Number(req.params?.id)
  if (isNaN(id)) {
    return res.status(404).json({error: 'Please only use numbers for the id path'});
  }
  try {
    const plant = await collection.findOne({ id });
    filterPlant(plant);

    res.json(plant);
    
  } catch (err) {
    console.error(err);
  }
  // if (plants.some(plant => plant.id === reqId)) {
  //   res.json(plants[reqId - 1]);
  // } else {
  //   res.status(404).json({error: 'Plant Not Found', message:'Sorry, the reqed plant was not found. Please refer to our documentation in our github repo for more information.'})
  // }
});

app.get('/plants/byName/:name', async (req, res) => {
  //Decoding any spaces within the endpoint the client reqed.
  // const reqName = decodeURIComponent(req.params.name.toLowerCase().split(' ').join(''));
  //sanitizing inputs
  const alphas = 'abcdefghijklmnopqrstuvwxyz'
  const reqName = req.params.name.toLowerCase().split('').filter((char) => alphas.includes(char)).join('');
  
  try {
    const plant = await collection.findOne({ queryName: reqName });
    filterPlant(plant);

    if (plant) {
      res.json(plant);
    } else {
      res.status(404).json({error: 'Plant Not Found', message:'Sorry, the requested plant was not found. Please refer to our documentation in our github repo for more information.'})
    }

  } catch (err) {
    console.error(err);
  }
  // if (plant) {
  //   res.json(plant);
  // } else {
  //   
  // }
}) 

app.listen(process.env.PORT);