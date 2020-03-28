import axios from "axios";

const request = axios.create({
  baseURL: process.env.URL || "localhost:3000",
  headers: {
    "API-KEY": "577dcb71-7b69-4254-b03b-853a8c6a4dbc"
  }
});

const rows = ["65656565", "212121221122"];
console.log("rows", rows);

export const rowsApi = {
  apiGetRows() {
    return rows;
  },

  apiAddNewRow(rowData) {
    rows.push(rowData.row);

    
   return this.apiGetRows();
  }
};
