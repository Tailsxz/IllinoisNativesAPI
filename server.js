const express = require('express');
const morgan = require('morgan');
const { MongoClient } = require('mongodb');
const plants = require('./plants')

require('dotenv').config({ path: './config/.env' });

const app = express();

const client = new MongoClient(process.env.DB_STRING);
let db, collection;

async function startDB() {
  try {   
    await client.connect();
    console.log('Database connected...');

    await client.db('admin').command({ ping: 1 });
    
    db = client.db('ILNatives');
    collection = db.collection('plants');
  } catch(err) {
    console.error(err);
  }
}
startDB();

app.use(morgan('dev'));
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
    console.log(`Accessing the plants collection`);

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
  //Attempt at input sanitization
  const alphas = 'abcdefghijklmnopqrstuvwxyz'
  const reqName = req.params.name.toLowerCase().split('').filter((char) => alphas.includes(char)).join('');
  
  try {
    const plant = await collection.findOne({ queryName: reqName });
    filterPlant(plant);

    console.log(`Accessing the plants collection`);

    res.json(plant);
  } catch (err) {
    console.error(err);
    res.status(404).json({error: 'Plant Not Found', message:'Sorry, the requested plant was not found. Please refer to our documentation in our github repo for more information.'})
  }
}) 

app.listen(process.env.PORT);