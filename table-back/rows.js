const rows = [];
const getRows = () => rows;

const maxRows = process.env.MAX_ROWS;

const addRow = (rowData) => {
  if (rows.length <= maxRows) {
    const rowId = rows.length + 1;
    rows.push({ id: rowId, row: rowData });
    return rows;
  }
  return { error: `can't add more then ${maxRows} rows` };
};

module.exports = { getRows, addRow };
