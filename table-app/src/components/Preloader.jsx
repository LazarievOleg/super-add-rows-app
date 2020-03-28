import React from "react";
import PreloaderPicture from "./loads.svg";
import classes from "./TableComponent.module.css";

export const Preloader = () => {
  return (
    <div className={classes.preloader} >
      <img src={PreloaderPicture} />;
    </div>
  );
};
