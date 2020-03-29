import axios from 'axios';

const request = axios.create({
  baseURL: process.env.URL || 'http://localhost:5000/',
});

export const rowsApi = {
  apiGetRows() {
    return request.get('get-rows').then((response) => response.data);
  },

  apiAddNewRow(rowData) {
    return request.post('add-row', rowData).then((response) => response.data);
  },
};
