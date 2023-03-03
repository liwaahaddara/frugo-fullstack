import express from 'express';
import data from './data.js';

const app = express();

app.use('./images', express.static('images'));

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 4999;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
