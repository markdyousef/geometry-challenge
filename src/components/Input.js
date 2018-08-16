import React from "react";
import styled from "styled-components";
import Label from "./Label";

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
  margin: 5px;
`;

export default class extends React.PureComponent {
  render() {
    return (
      <InputContainer>
        <Label name={this.props.id} />
        <Input
          id={this.props.id}
          value={this.props.value}
          onChange={this.props.handleChange}
          type="number"
          minLength={1}
          maxLength={1000}
        />
      </InputContainer>
    );
  }
}
