import React, { useEffect } from "react";
import TableForm from "./TableForm";
import classes from "./TableComponent.module.css";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getRows, addNewRow } from "../redux/table-reducer";
import { connect } from "react-redux";
import { Preloader } from "./Preloader";

const TableContainer = React.memo(props => {
  useEffect(() => {
    props.getRows();
  }, []);

  const onSubmit = formData => {
    props.addNewRow(formData);
  };

  return (
    <>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <div className={classes.main}>
          <TableForm
            isFetching={props.isFetching}
            onSubmit={onSubmit}
            rows={props.rows}
            disableInput={props.disableInput}
          ></TableForm>

          {props.error && (
            <div className={classes.beautyText}>{props.error}</div>
          )}
        </div>
      )}
    </>
  );
});

const mapStateToProps = state => ({
  isFetching: state.table.isFetching,
  rows: state.table.rows,
  error: state.table.error,
  disableInput: state.table.disableInput
});

export default compose(
  withRouter,
  connect(mapStateToProps, { getRows, addNewRow })
)(TableContainer);
