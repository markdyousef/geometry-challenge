import React from "react";
import { shallow } from "enzyme";
import Label from "./Label";

it("renders Label", () => {
  const wrapper = shallow(<Label name="a" />);
  expect(wrapper).toMatchSnapshot();
});
