require('dotenv').config

const PORT = process.env.PORT || 3000;

const postgresql = require('postgresql');
const express = require('express');
const app = express();

app.use(express.json());

const connection = postgresql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db',
  });

connection.connect();

app.post('/influenceurs', function(req, res) {
    const commerce = req.body;
    const query = connection.query('SELECT commerce, product, gender, audience, price, app FROM influenceurs', function(err, result) {
        if (err) throw err;
        console.log(result);
    });
    res.end('Success');
  });