const express = require('express')
const app = express()
const port = 3000

const db = require('./db')

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (req, res) => {
  db.getInfluencer()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.get('/:domaine', (req, res) => {
    const product = req.params.product;
    db.select('*')
        .from('influenceurs')
        .where('influenceur_id', '=', product)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.get('/:sexe', (req, res) => {
    const gender = req.params.gender;
    db.select('*')
        .from('influenceurs')
        .where('influenceur_id', '=', gender)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.get('/:public_cible', (req, res) => {
    const audience = req.params.audience;
    db.select('*')
        .from('influenceurs')
        .where('influenceur_id', '=', audience)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.get('/:tarif', (req, res) => {
    const price = req.params.price;
    db.select('*')
        .from('influenceurs')
        .where('influenceur_id', '=', price)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

app.get('/:reseau', (req, res) => {
    const app = req.params.app;
    db.select('*')
        .from('influenceurs')
        .where('influenceur_id', '=', app)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

  app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})