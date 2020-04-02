import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotFoundPage from "../components/NotFoundPage/NotFound";
configure({ adapter: new Adapter() });

describe("Not Found Page", () => {
  test("should match snapshot ", () => {
    const component = shallow(<NotFoundPage></NotFoundPage>);
    expect(component).toMatchSnapshot();
  });
});
