import React from "react";
import ReactDOM from "react-dom";
import TableApp from "../App";

describe("Render Table App component", () => {
  test("should render ", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TableApp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
