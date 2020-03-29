import React from "react";
import { reset, reduxForm } from "redux-form";
import { mainContainer } from "./Table.module.css";
import { Divider } from "@material-ui/core";
import { MuiThemeProvider, getMuiTheme } from "material-ui/styles";
import { RowsList } from "./RowsList";
import { InputForm } from "./InputForm";
import { InputError } from "./InputError";
import { TableHeader } from "./TableHeader";

const TableForm = props => {
  let {
    inputError,
    disableInput,
    rows,
    handleSubmit,
    invalid,
    pristine,
    reset,
    submitting
  } = props;

  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className={mainContainer}>
        <TableHeader></TableHeader>
        <Divider></Divider>
        <RowsList rows={rows}></RowsList>
        <InputForm
          disableInput={disableInput}
          handleSubmit={handleSubmit}
          invalid={invalid}
          pristine={pristine}
          reset={reset}
          submitting={submitting}
        ></InputForm>
        {inputError && <InputError error={inputError}></InputError>}
      </div>
    </MuiThemeProvider>
  );
};

const afterSubmit = (result, dispatch) => dispatch(reset("TableForm")); // clear input after adding a row

export default reduxForm({
  form: "TableForm", // a unique identifier for this form
  onSubmitSuccess: afterSubmit
})(TableForm);
