import React from "react";
import styled from "styled-components";
import Input from "./Input";

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 340px;
  background: #fff;
  padding: 40px 30px;
  margin: 20px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export default class extends React.PureComponent {
  handleChange = event => {
    const { id, value } = event.target;
    // ensure non-negative number
    const length = value > -1 ? Number(value) : 0;
    const side = { [id]: length };
    this.props.changeSide(side);
  };
  render() {
    // [["a", 1], ["b", 2], ["c", 3]]
    const sides = Object.entries(this.props.sides);
    return (
      <ControlsContainer>
        {sides.map(side => (
          <Input
            id={side[0]}
            value={side[1]}
            key={`input_${side[0]}`}
            handleChange={this.handleChange}
          />
        ))}
      </ControlsContainer>
    );
  }
}
