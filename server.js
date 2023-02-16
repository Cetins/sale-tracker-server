const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors')

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
.then((client) => {
  const db = client.db('sale_tracker');

  const shopsCollection = db.collection('shops');
  const salesCollection = db.collection('sales');

  const shopRouter = createRouter(shopsCollection);
  const salesRouter = createRouter(salesCollection);

  app.use('/api/shops', shopRouter);
  app.use('/api/sales', salesRouter);
})
.catch(console.error);

app.listen(9000, function () {
  console.log(`Listening Sales Tracker on port ${ this.address().port }`);
});