import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Button } from "@material-ui/core";
import { button as classButton } from "./Table.module.css";

export const RowsList = ({ deleteRow, rows }) => {
  return (
    <List>
      {rows &&
        rows.map(({_id: id, rows}) => (
          <div key={id}>
            <ListItem>
              <ListItemText primary={rows} />
              <div className={classButton}>
                <Button
                  onClick={() => {
                    deleteRow(id);
                  }}
                  color="secondary"
                >
                  Delete row
                </Button>
              </div>
            </ListItem>
            <Divider></Divider>
          </div>
        ))}
    </List>
  );
};
