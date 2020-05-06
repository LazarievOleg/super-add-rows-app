const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');
const { getRows, addRow, delRow } = require('./rows-controller');

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

async function start() {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    app.listen(5000);
  } catch (e) {
  }
}

app.get('/', (req, res) => {
  res.send('Hi there =)');
});

app.get('/get-rows', async (req, res) => {
  const rows = await getRows();
  rows.length ? res.send(rows) : res.send([]);
});

app.post('/add-row', async (req, res) => {
  const newRow = req.body.row;
  const rowsData = await addRow(newRow);

  rowsData.error
    ? res.status(200).send({ error: rowsData.error })
    : res.send(rowsData);
});

app.post('/del-row', async (req, res) => {
  const { rowId } = req.body;
  await res.send(await delRow(rowId));
});

start();
