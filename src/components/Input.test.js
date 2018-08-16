import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";

it("renders Input", () => {
  const wrapper = shallow(<Input id="a" value={5} onChange={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});
