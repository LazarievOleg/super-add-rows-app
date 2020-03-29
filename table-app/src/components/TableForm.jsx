import React, { useState } from "react";
import { reset, Field, reduxForm } from "redux-form";
import TextField from "material-ui/TextField";
import classes from "./TableComponent.module.css";
import { Button, Divider } from "@material-ui/core";
import { MuiThemeProvider } from "material-ui/styles";
import { useEffect } from "react";

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);

const TableHeader = () => {
  return <div className={classes.beautyText}>{"Table with one column"}</div>;
};

const InputTextArea = props => {
  return (
    <TextField
    autoComplete='off'
      disabled={props.disabled}
      fullWidth={true}
      hintText={props.label}
      floatingLabelText={props.label}
      errorText={props.meta.touched && props.meta.error}
      {...props.input}
    ></TextField>
  );
};

const RenderRowsWithData = props => {
  return (
    <div key={props.key} className={classes.table}>
      <TextField
        readOnly={true}
        name={props.value}
                  
        value={props.value}
        fullWidth={true}


      ></TextField>
    </div>
  );
};

const Form = props => {
  console.log("propspprops", props);

  let {
    disableInput,
    rows,
    handleSubmit,
    invalid,
    pristine,
    reset,
    submitting
  } = props;


  return (
    <MuiThemeProvider>
      <TableHeader></TableHeader>
      <Divider></Divider>
      {rows &&
        rows.map(rowData => {
          return (
            <div key={rowData.id}>
              <RenderRowsWithData
                value={rowData.row}
                name={rowData.row}
              ></RenderRowsWithData>
            </div>
          );
        })}

      <form onSubmit={handleSubmit}>
        <div className={classes.table}>
          <Field
            validate={[maxLength15, required]}
            name="row"
            component={InputTextArea}
            label="Add new row"
            disabled={disableInput}
          />
        </div>

        <div className={classes.buttons}>
          <Button
            color="primary"
            type="submit"
            disabled={pristine || submitting || invalid}
          >
            {"Add row"}
          </Button>
          <Button
            color="secondary"
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            {"Clear Input"}
          </Button>
        </div>
      </form>
    </MuiThemeProvider>
  );
};

const afterSubmit = (result, dispatch) => dispatch(reset("TableForm"));

export default reduxForm({
  form: "TableForm", // a unique identifier for this form
  onSubmitSuccess: afterSubmit
})(Form);
