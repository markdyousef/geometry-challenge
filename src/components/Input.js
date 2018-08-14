import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

const Input = styled.input`
  padding: 10px 8px;
  width: 40px;
  border-radius: 3px;
  border: 1px solid #ddd;
  font-size: 15px;
  outline: none;
  text-align: center;
`;

export default class extends React.Component {
  state = {
    value: 0
  };
  handleChange = event => {
    const input = event.target.value;
    const value = input > -1 ? input : 0;
    this.setState({ value });
  };
  render() {
    return (
      <InputContainer>
        <label htmlFor={`input_${this.props.id}`}>{this.props.id}</label>
        <Input
          id={`input_${this.props.id}`}
          value={this.state.value}
          onChange={this.handleChange}
          type="number"
          minLength={1}
          maxLength={1000}
        />
      </InputContainer>
    );
  }
}
