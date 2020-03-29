const rows = [];

const maxRows = process.env.MAX_ROWS;

const getRows = () => rows;


const addRow = (rowData) => {
  if (rows.length <= maxRows) {
    const rowId = rows.length + 1;
    rows.push({ id: rowId, row: rowData });
    return rows;
  }
 // some back-end validation error here
};

module.exports = { getRows, addRow };

