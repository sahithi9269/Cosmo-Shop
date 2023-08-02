
const data      = require('./data');
const express = require("express");
const hostname  = 'localhost';
const port      = 3035;
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get('/search-products', (req, res) => {
    const {search} = req.query;
    const filteredData = data.filter(item => item.name.toLowerCase().includes(search) || item.name.toLowerCase().includes(search) || item.tags.some(o => o.includes(search)));
    res.json(filteredData);
})

app.listen(port, () => {
console.log(`[Server running on ${hostname}:${port}]`);
  });
