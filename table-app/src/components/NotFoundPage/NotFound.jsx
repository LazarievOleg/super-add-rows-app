import React from "react";
import { makeStyles } from "@material-ui/core";
import NotFoundPic from "./404-Error-Page.jpg";
import { NavLink } from "react-router-dom";
import { beautyText } from "../Table/Table.module.css";
const useStyles = makeStyles({
  root: {
    flexDirection: "column",
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  }
});

const NotFoundPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img alt="notFound" src={NotFoundPic} />
      <NavLink style={{ textDecoration: "none" }} to={"/"}>
        <h3 className={beautyText}>Go back home, friend... go back home...</h3>
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
