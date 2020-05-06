const MongoRows = require('../models/Rows');

const maxRows = process.env.MAX_ROWS;

const getRows = async () => {
  const allRows = await MongoRows.find({});
  return allRows;
};

const addRow = async (rowData) => {
  const allRows = await MongoRows.find({});

  if (allRows.length + 1 <= maxRows) {
    const newRow = await new MongoRows({
      rows: rowData,
    });
    await newRow.save();
    const rows = await MongoRows.find({});
    return rows;
  }
  if (allRows.length + 1 > maxRows) {
    return { error: 'max rows length exceeded' };
  }
  return allRows;
};

const delRow = async (rowId) => {
  await MongoRows.findByIdAndDelete(rowId, async (e) => {
    if (e) {
      return { error: 'error with db' };
    }
    return 'ok';
  });

  const allRows = await MongoRows.find({});
  return allRows;
};

module.exports = { getRows, addRow, delRow };
