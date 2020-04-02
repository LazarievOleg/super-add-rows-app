import tableReducer, {
  setRowsData,
  setIsFetching,
  setError
} from "../redux/table-reducer";

const initialState = {
  rows: [],
  isFetching: false,
  error: null,
  disableInput: false
};

describe("Reducer tests", () => {
  test("New row should be added to state", () => {
    const rowData = [{ id: 5, row: "added row" }];
    const action = setRowsData(rowData);
    const newState = tableReducer(initialState, action);
    expect(newState.rows).toBe(rowData);
  });

  test("IsFetching should set to true", () => {
    const isFetching = true;
    const action = setIsFetching(isFetching);
    const newState = tableReducer(initialState, action);
    expect(newState.isFetching).toBe(isFetching);
  });

  test("setError should set error text and disable input", () => {
    const addedError = { error: "error text", disableInput: true };
    const action = setError(addedError);
    const newState = tableReducer(initialState, action);
    expect(newState.disableInput).toBe(addedError.disableInput);
    expect(newState.error).toBe(addedError.error);
  });
});
