import React from "react";
import { shallow } from "enzyme";
import Triangle from "./Triangle";

it("renders Triangle", () => {
  const wrapper = shallow(
    <Triangle type="EQUILATERAL" withLabels sides={{ a: 1, b: 1, c: 1 }} />
  );
  expect(wrapper).toMatchSnapshot();
});
