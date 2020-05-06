const { Schema, model } = require('mongoose');

const schema = new Schema({
  rows: {
    type: String,
    required: true,
  },
});

module.exports = model('Rows', schema);
