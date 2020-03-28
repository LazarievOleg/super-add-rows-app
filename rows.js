const rows = [];

const getRows = () => {
  return rows;
};

const addRow = rowData => {
  if (rows.length <= 1) {
    let rowId =+ rows.length;
    rows.push({ id: rowId, row: rowData });
    console.log(rows);
    
    return rows;

  } else {
    return { error: `can't add more then 2 rows` };
  }
};

module.exports = { getRows, addRow };
