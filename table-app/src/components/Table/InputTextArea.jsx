import React from "react";
import TextField from "@material-ui/core/TextField";

export const InputTextArea = props => {
  return (
    <TextField
      autoComplete="off"
      disabled={props.disabled}
      fullWidth={true}
      label={props.label}
      error={props.meta.touched && !!props.meta.error}
      helperText={props.meta.touched && props.meta.error}
      {...props.input}
    ></TextField>
  );
};
