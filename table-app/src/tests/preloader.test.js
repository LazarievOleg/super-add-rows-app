import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Preloader } from "../components/Preloader/Preloader";

configure({ adapter: new Adapter() });

describe("Preloader", () => {
  test("should match snapshot ", () => {
    const component = shallow(<Preloader></Preloader>);
    expect(component).toMatchSnapshot();
  });
});
