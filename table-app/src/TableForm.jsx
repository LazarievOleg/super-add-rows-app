import React from "react";
import { reset, Field, reduxForm } from "redux-form";
import TextField from "material-ui/TextField";
import classes from "./TableComponent.module.css";
import { Button, Divider } from "@material-ui/core";
import { MuiThemeProvider } from 'material-ui/styles';



const validate = values => {
  const errors = {};
  const requiredFields = ["row"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  return errors;
};

const renderTextField = props => {
  return (
    <TextField
    
      fullWidth={true}
      hintText={props.label}
      floatingLabelText={props.label}
      errorText={props.meta.touched && props.meta.error}
      {...props.input}
    ></TextField>
  );
};

const renderWithTextField = props => {
  console.log('renderWithTextField', props);
  
  return (
    <TextField
    disableUnderline={true}
    readOnly={true}
    name={props.value}
      value={props.value}
      fullWidth={true}
      hintText={props.label}
      floatingLabelText={props.label}
      errorText={props.meta.touched && props.meta.error}
      {...props.value}
    ></TextField>
  );
};

const Form = props => {
  console.log('zazazazaz', props);
  
  const {rows, handleSubmit, pristine, reset, submitting } = props;
  return (
    <MuiThemeProvider >
      <div className={classes.header}>{'Table with one column'}</div>
      <Divider></Divider>
      {rows &&
        rows.map(value => {
          return (
            <div key={value} className={classes.table}>
              <Field
                props={{ value: value }}
                name="value"
                component={renderWithTextField}
                key={value}
              />
            </div>
          );
        })}

      <div>
        <form onSubmit={handleSubmit}>
          <div className={classes.table}>
            <Field name="row" component={renderTextField} label="Add new row" />
          </div>

          
          <div className={classes.buttons} >
            <Button color="primary" type="submit" disabled={pristine || submitting}>
              Add row
            </Button>
            <Button color="secondary"
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
            >
              Clear Input
            </Button>
          </div>
        </form>
      </div>
    </MuiThemeProvider>
  );
};



const afterSubmit = (result, dispatch) =>
  dispatch(reset('TableForm'));


export default reduxForm({
  form: "TableForm", // a unique identifier for this form
  onSubmitSuccess: afterSubmit,
  validate
})(Form);

