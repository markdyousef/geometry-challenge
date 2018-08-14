import React from "react";
import styled from "styled-components";
import { bordersToSides, sidesToBorders } from "../lib/triangle-utils";

const MAX_WIDTH = 700;
const MAX_HEIGHT = 400;
const TITLE_HEIGHT = 80;
const SIDE_SCALE = 100;

const TriangleContainer = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  width: ${MAX_WIDTH}px;
  height: ${MAX_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const Title = styled.h2`
  height: ${TITLE_HEIGHT};
  font-weight: 200;
`;

const Label = side => {
  return (
    <div>
      <span>{side.name}</span>
    </div>
  );
};

const NoTriangle = styled.div``;

// TODO: fix scale values
const Triangle = styled.span`
  width: 0;
  height: 0;
  ${props => `
    border-left: ${Math.min(
      props.left * SIDE_SCALE,
      MAX_WIDTH / 2
    )}px solid transparent;
    border-bottom: ${Math.min(
      props.height * SIDE_SCALE,
      MAX_HEIGHT - TITLE_HEIGHT
    )}px solid #000;
    border-right: ${Math.min(
      props.right * SIDE_SCALE,
      MAX_WIDTH / 2
    )}px solid transparent;
  `};
`;

export default class extends React.PureComponent {
  renderTriangle = () => {
    const { type, sides, borders } = this.props;
    // only display if all sides has a length > 0
    const valid = Object.values(sides).filter(side => side <= 0).length === 0;
    // const borders = sidesToBorders(...sides);
    // console.log(borders);
    // console.log(bordersToSides(...Object.values(sides)));

    if (valid) {
      // const labels = Object.entries(sides).map(side => (
      //   <Label key={side[0]} name={side[0]} value={side[1]} />
      // ));
      return [
        // labels,
        // <Title key={`title_${type}`}>{type}</Title>,
        <Triangle {...borders} key={`triangle_${type}`} />
      ];
    }
    return (
      <NoTriangle>
        <h5>Try to change the values below...</h5>
      </NoTriangle>
    );
  };
  render() {
    return <TriangleContainer>{this.renderTriangle()}</TriangleContainer>;
  }
}
