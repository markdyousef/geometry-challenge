import React from "react";
import styled from "styled-components";
import types from "../constants/triangle-types";
import Label from "./Label";
import { sidesToBorders } from "../lib/triangle-utils";

const MAX_WIDTH = 800;
const MAX_HEIGHT = 500;
const SCALE = 8;

const COLORS = [
  { type: types.EQUILATERAL, color: "#324D5C" },
  { type: types.ISOSCELES, color: "#9DC1DA" },
  { type: types.SCALENE, color: "#56A690" }
];

const Box = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  width: ${MAX_WIDTH}px;
  height: ${MAX_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TriangleContainer = styled.div`
  position: relative;
`;
const Title = styled.h2`
  font-weight: 200;
  text-transform: lowercase;
`;
const NoTriangle = styled.div``;
const Triangle = styled.div`
  width: 0;
  height: 0;
  ${props => `
    border-left: ${props.left * SCALE}px solid transparent;
    border-bottom: ${props.height * SCALE}px solid ${props.color};
    border-right: ${props.right * SCALE}px solid transparent;
  `};
`;

// helper function to scale sides to fit inside box
const scale = sides => {
  const total = Object.values(sides).reduce((acc, curr) => acc + curr);
  const scaledSides = {
    a: (sides.a / total) * 100,
    b: (sides.b / total) * 100,
    c: (sides.c / total) * 100
  };
  const borders = sidesToBorders(scaledSides);
  return borders;
};
export default class extends React.PureComponent {
  createLabels = borders => {
    const aLabel = (
      <Label
        name="a"
        style={{
          left: `${(borders.left * SCALE) / 2 - 10}px`,
          top: `${(borders.height * SCALE) / 2}px`,
          position: "absolute"
        }}
        key="a_label"
      />
    );

    const cLabel = (
      <Label
        name="c"
        style={{
          right: `${(borders.right * SCALE) / 2 - 10}px`,
          top: `${(borders.height * SCALE) / 2}px`,
          position: "absolute"
        }}
        key="c_label"
      />
    );

    const bLabel = (
      <Label
        name="b"
        style={{
          bottom: "-15px",
          left: `${((borders.right + borders.left) * SCALE) / 2 - 10}px`,
          position: "absolute"
        }}
        key="b_label"
      />
    );
    return [aLabel, bLabel, cLabel];
  };
  renderTriangle = () => {
    const { type, sides, withLabels } = this.props;
    const borders = scale(sides);

    if (type) {
      const labels = withLabels ? this.createLabels(borders) : null;
      const color = COLORS.find(d => d.type === type).color;
      return (
        <TriangleContainer>
          {labels}
          <Triangle {...borders} color={color} />
        </TriangleContainer>
      );
    }
    return (
      <NoTriangle>
        <h5>Can't draw this shape...</h5>
      </NoTriangle>
    );
  };
  render() {
    return (
      <Box>
        <Title>{this.props.type}</Title>
        {this.renderTriangle()}
      </Box>
    );
  }
}
