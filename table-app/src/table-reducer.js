import { rowsApi } from "./api";

const ROWS = "reducer/ROWS";

let initialState = {
  rows: []
};


export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROWS: {
      return {
        ...state,
        rows: action.rows
      };
    }

    default:
      return state;
  }
};

export const setRowsData = rows => ({
  type: ROWS,
  rows
});


export const getRows = () => {
  return async dispatch => {
    const response = await rowsApi.apiGetRows();
    await dispatch(setRowsData(response));
  };
};

export const addNewRow = row => {
  return async dispatch => {
    const response = await rowsApi.apiAddNewRow(row);
    console.log("addNewRowrespons", response);
    await dispatch(setRowsData(response));

  };
};

export default tableReducer;
