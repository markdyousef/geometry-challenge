import React, { Component } from "react";
import styled from "styled-components";
import Triangle from "./Triangle";

const Container = styled.section`
  display: flex;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Triangle type="equilateral" />
        <Triangle type="isosceles" />
        <Triangle type="scalene" />
      </Container>
    );
  }
}

export default App;
