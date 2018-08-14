import React from "react";
import styled from "styled-components";
import types from "../constants/triangle-types";

const TriangleContainer = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * Equilateral Triangle
 * - all 3 sides of equal length
 */
const Equilateral = styled.span`
  width: 0;
  height: 0;
  border-right: 80px solid transparent;
  border-bottom: 130px solid #444;
  border-left: 80px solid transparent;
`;

/**
 * Isosceles Triangle
 * - exactly 2 sides of equal lenght
 */
const Isosceles = styled.span`
  width: 0;
  height: 0;
  border-right: 80px solid transparent;
  border-bottom: 80px solid #000;
  border-left: 80px solid transparent;
`;

/**
 * Scalene Triangle
 * - no sides of equal length
 */
const Scalene = styled.span`
  width: 0;
  height: 0;
  border-right: 40px solid transparent;
  border-bottom: 100px solid #888;
  border-left: 150px solid transparent;
`;

export default class extends React.PureComponent {
  renderTriangle = type => {
    switch (type) {
      case types.EQUILATERAL:
        return <Equilateral />;
      case types.ISOSCELES:
        return <Isosceles />;
      case types.SCALENE:
        return <Scalene />;
      default:
        return null;
    }
  };
  render() {
    return (
      <TriangleContainer>
        {this.renderTriangle(this.props.type)}
      </TriangleContainer>
    );
  }
}
