import React, { useEffect } from "react";
import TableForm from "./TableForm";
import classes from "./TableComponent.module.css";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getRows, addNewRow } from "./table-reducer";
import { connect } from "react-redux";

class TableContainer extends React.Component {

  componentDidMount() {
    this.props.getRows();
  };

  componentDidUpdate(){
    console.log('fvfvfvfvf');
    
  }




  
  onSubmit = formData => {
    this.props.addNewRow(formData)
console.log(formData);
   

  };

  render() {
    return (
      <div className={classes.main}>
        <TableForm onSubmit={this.onSubmit} rows={this.props.rows}></TableForm>
      </div>

    );
  }


};

const mapStateToProps = state => ({
  rows: state.table.rows
});

export default compose(
  withRouter,
  connect(mapStateToProps, { getRows, addNewRow })
)(TableContainer);
