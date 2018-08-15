import React from "react";
import styled from "styled-components";
import types from "../constants/triangle-types";

const MAX_WIDTH = 700;
const MAX_HEIGHT = 400;
const PAD_HEIGHT = 150;
const SCALE = 100;

const COLORS = [
  { type: types.EQUILATERAL, color: "#324D5C" },
  { type: types.ISOSCELES, color: "#F0CA4D" },
  { type: types.SCALENE, color: "#ED3752" }
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

const Label = styled.span`
  position: absolute;
`;
const NoTriangle = styled.div``;

// TODO: fix scale values
const Triangle = styled.div`
  width: 0;
  height: 0;
  ${props => `
    border-left: ${Math.min(
      props.left * SCALE,
      MAX_WIDTH / 2
    )}px solid transparent;

    border-bottom: ${Math.min(
      props.height * SCALE,
      MAX_HEIGHT - PAD_HEIGHT
    )}px solid ${props.color};

    border-right: ${Math.min(
      props.right * SCALE,
      MAX_WIDTH / 2
    )}px solid transparent;
  `};
`;

export default class extends React.PureComponent {
  renderLabels = () => {
    const { borders } = this.props;
    const aLabel = (
      <Label
        style={{
          left: `${(borders.left * SCALE) / 3}px`,
          top: `${(borders.height * SCALE) / 3}px`
        }}
        key="a_label"
      >
        a
      </Label>
    );

    const cLabel = (
      <Label
        style={{
          right: `${(borders.right * SCALE) / 3}px`,
          top: `${(borders.height * SCALE) / 3}px`
        }}
        key="c_label"
      >
        c
      </Label>
    );

    const bLabel = (
      <Label
        style={{
          bottom: "-25px",
          left: `${((borders.right + borders.left) * SCALE) / 2}px`
        }}
        key="b_label"
      >
        b
      </Label>
    );
    return [aLabel, bLabel, cLabel];
  };
  renderTriangle = withLabels => {
    const { type, borders } = this.props;
    // only display if all sides has a length > 0
    const valid =
      Object.values(borders).filter(border => border > 0).length === 3;
    if (valid) {
      const labels = withLabels ? this.renderLabels() : null;
      const color = COLORS.find(d => d.type === type).color;
      return [
        <Title key="triangle_title">{type}</Title>,
        <TriangleContainer key="triangle_container">
          {labels}
          <Triangle {...borders} color={color} />
        </TriangleContainer>
      ];
    }
    return (
      <NoTriangle>
        <h5>Invalid triangle...</h5>
      </NoTriangle>
    );
  };
  render() {
    return <Box>{this.renderTriangle(true)}</Box>;
  }
}
