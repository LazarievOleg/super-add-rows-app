import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Header } from "../components/ToolBar/Toolbar";

configure({ adapter: new Adapter() });

describe("Toolbar", () => {
  test("should match snapshot ", () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
