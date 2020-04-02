import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { TableHeader } from "../components/Table/TableHeader";

configure({ adapter: new Adapter() });

describe("Header", () => {
  test("should match snapshot ", () => {
    const component = shallow(<TableHeader />);
    expect(component).toMatchSnapshot();
  });
});
