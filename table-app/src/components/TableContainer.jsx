import React, { useEffect } from "react";
import TableForm from "./TableForm";
import classes from "./TableComponent.module.css";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getRows, addNewRow } from "../redux/table-reducer";
import { connect } from "react-redux";
import { Preloader } from "./Preloader";

class TableContainer extends React.Component {
  componentDidMount() {
    this.props.getRows();
  }

  onSubmit = formData => {
    this.props.addNewRow(formData);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <div className={classes.main}>
            <TableForm
              isFetching={this.props.isFetching}
              onSubmit={this.onSubmit}
              rows={this.props.rows}
              disableInput={this.props.disableInput}
            ></TableForm>

            {this.props.error && (
              <div className={classes.error}>{this.props.error}</div>
            )}
          </div>
        )}
      </>
    );
  }
}

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
