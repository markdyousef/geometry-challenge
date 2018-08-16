import React from "react";
import styled from "styled-components";

const LABEL_COLORS = [
  { name: "a", color: "#F0CA4D" },
  { name: "b", color: "#E37B40" },
  { name: "c", color: "#ED3752" }
];

const LabelContainer = styled.div`
  ${props => `color: ${props.color}; border: 2px solid ${props.color}`};
  height: 20px;
  width: 20px;
  background: #fff;
  border-radius: 99em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default class extends React.PureComponent {
  render() {
    const color = LABEL_COLORS.find(d => d.name === this.props.name).color;
    return (
      <LabelContainer {...this.props} color={color}>
        <label htmlFor={this.props.name}>{this.props.name}</label>
      </LabelContainer>
    );
  }
}
