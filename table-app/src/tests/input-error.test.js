import React from "react";
import { InputError } from "../components/Table/InputComponents/InputError";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Input tests", () => {
  test("Input error ", () => {
    const propsErrorText = "error text";
    const component = mount(<InputError error={propsErrorText}></InputError>);
    expect(component.props().error).toEqual(propsErrorText);
    expect(component.find("div")).toHaveLength(1);
    expect(component).toMatchSnapshot();
  });
});
