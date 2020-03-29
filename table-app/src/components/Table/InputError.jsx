import React from "react";
import {beautyText} from './Table.module.css'

export const InputError = ({ error }) => {
  return <div className={beautyText}>{error}</div>;
};
