const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const data = require('./data.json');

app.use(cors()); 
app.get('/products', (req, res) => { 
  res.json(data.products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
