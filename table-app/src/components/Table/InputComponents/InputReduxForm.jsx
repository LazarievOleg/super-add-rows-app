import React from "react";
import { Field } from "redux-form";
import {form, table, button} from "../Table.module.css";
import { Button } from "@material-ui/core";
import {maxLength, required} from '../../Validation/validation-form'
import {InputTextArea} from './InputTextArea'

const maxLength15 = maxLength(15);

export const InputForm = props => {
  let {
    disableInput,
    handleSubmit,
    invalid,
    pristine,
    reset,
    submitting
  } = props;

  return (
      <form className={form} onSubmit={handleSubmit}>
        <div className={table}>
          <Field
            validate={[maxLength15, required]}
            name="row"
            component={InputTextArea}
            label="Add new row"
            disabled={disableInput}
          />
        </div>
        <div className={button}>
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
  );
};

