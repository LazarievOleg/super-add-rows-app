import React, { useEffect } from "react";
import TableForm from "./TableForm";
import { tableForm } from "./Table.module.css";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getRows, addNewRow, deleteRow } from "../../redux/table-reducer";
import { connect } from "react-redux";
import { Preloader } from "../Preloader/Preloader";

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
        <div className={tableForm}>
          <TableForm
          deleteRow={props.deleteRow}
            isFetching={props.isFetching}
            onSubmit={onSubmit}
            rows={props.rows}
            disableInput={props.disableInput}
            inputError={props.error}
          ></TableForm>
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
  connect(mapStateToProps, { getRows, addNewRow, deleteRow })
)(TableContainer);
