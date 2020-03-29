let rows = [];
const maxRows = process.env.MAX_ROWS;

const getRows = () => rows;

const addRow = (rowData) => {
  if (rows.length + 1 <= maxRows) {
    const rowId = rows.length + 1;
    rows.push({ id: rowId, row: rowData });
    return rows;
  } if (rows.length + 1 > maxRows) {
    return { error: 'max rows length exceeded' };
  } return rows;
};

const delRow = (rowId) => {
  rows = rows.filter((el) => el.id !== rowId);
  return rows;
};

module.exports = { getRows, addRow, delRow };
