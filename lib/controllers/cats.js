const { Router } = require('express');
const { cats } = require('../cats-data');

module.exports = Router()
  .get('/:id', (req, res) => {
    const match = cats.find((cat) => cat.id === req.params.id);
    console.log(match);
    return res.json(match);
  })
  .get('/', (req, res) => {
    const filteredCats = cats.map((cat) => ({ id: cat.id, name: cat.name }));
    return res.json(filteredCats);
  });
