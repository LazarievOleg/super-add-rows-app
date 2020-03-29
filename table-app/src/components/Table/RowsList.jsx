import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Divider } from "material-ui";

export const RowsList = props => {
  const rows = props.rows;
  return (
    <List>
      {rows &&
        rows.map(rowData => (
          <div key={rowData.id}>
            <ListItem>
              <ListItemText primary={rowData.row} />
            </ListItem>
            <Divider></Divider>
          </div>
        ))}
    </List>
  );
};
