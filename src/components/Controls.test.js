import React from "react";
import { shallow } from "enzyme";
import Controls from "./Controls";

it("renders Controls", () => {
  const wrapper = shallow(<Controls sides={{ a: 1, b: 1, c: 1 }} />);
  expect(wrapper).toMatchSnapshot();
});
