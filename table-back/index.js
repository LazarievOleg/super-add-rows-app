const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const { getRows, addRow } = require('./rows');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Origin',
    process.env.DOMAIN || 'http://localhost:3000', // update to match the domain you will make the request from
  );
  res.header(
    // allow to use localhost
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.get('/', (req, res) => {
  res.send('Hi there =)');
});

app.get('/get-rows', (req, res) => {
  res.send(getRows());
});

app.post('/add-row', (req, res) => {
  const newRow = req.body.row;
  res.send(addRow(newRow));
});

app.listen(5000);
