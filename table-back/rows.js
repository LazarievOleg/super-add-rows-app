const rows = [];
const getRows = () => {
  return rows;
};

const maxRows = process.env.MAX_ROWS;

const addRow = rowData => {
  if (rows.length <= maxRows) {
    let rowId = rows.length + 1;
    rows.push({ id: rowId, row: rowData });
    return rows;
  } else {
    return { error: `can't add more then ${maxRows} rows` };
  }
};

module.exports = { getRows, addRow };
