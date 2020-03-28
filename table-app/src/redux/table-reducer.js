import { rowsApi } from "../api";

const SET_ROWS = "reducer/SET_ROWS";
const SET_IS_FETCHING = "reducer/SET_IS_FETCHING";
const SET_ERROR = "reducer/SET_ERROR";

let initialState = {
  rows: [],
  isFetching: false,
  error: null,
  disableInput: false
};

const maxRows = 10;
const error = `can't add more then 10 rows`;

export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROWS: {
      return {
        ...state,
        rows: action.rows
      };
    }

    case SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.error,
        disableInput: true
      };
    }

    default:
      return state;
  }
};

export const setRowsData = rows => ({
  type: SET_ROWS,
  rows
});

export const setIsFetching = isFetching => ({
  type: SET_IS_FETCHING,
  isFetching
});

export const setError = error => ({
  type: SET_ERROR,
  error
});

export const getRows = () => {
  return async dispatch => {
    await dispatch(setIsFetching(true));
    const response = await rowsApi.apiGetRows();
    await dispatch(setIsFetching(false));
    await dispatch(setRowsData(response));
  };
};

export const addNewRow = row => {
  return async dispatch => {
    await dispatch(setIsFetching(true));
    const response = await rowsApi.apiAddNewRow(row);

    if (response.length >= maxRows) {
      await dispatch(setIsFetching(false));
      await dispatch(setRowsData(response));
      await dispatch(setError(error));
    } else {
      await dispatch(setIsFetching(false));
      await dispatch(setRowsData(response));
    }
  };
};

export default tableReducer;
