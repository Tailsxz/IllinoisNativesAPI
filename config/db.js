const { MongoClient } = require('mongodb');

module.exports = {
  connectDB: async function() {
    const client = new MongoClient(process.env.DB_STRING);
    try {
      
      await client.connect();

      await client.db('admin').command({ ping: 1 });
      console.log('Database connected...');
      
    } finally {
      await client.close();
    }
  },
}