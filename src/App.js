import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";
import Triangle from "./components/Triangle";
import Controls from "./components/Controls";
import { compareSides } from "./lib/triangle-utils";

injectGlobal`
  body {
    font-family: helvetica, sans-serif;
    background: #F2F2F0;
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

class App extends Component {
  state = {
    sides: {
      a: 0,
      b: 0,
      c: 0
    },
    type: null
  };
  changeSide = side => {
    const newSides = { ...this.state.sides, ...side };
    this.changeType(newSides);
    this.setState({ sides: newSides });
  };
  changeType = sides => {
    const type = compareSides(...Object.values(sides));
    this.setState({ type });
  };
  render() {
    return (
      <Container>
        <Triangle {...this.state} />
        <Controls sides={this.state.sides} changeSide={this.changeSide} />
      </Container>
    );
  }
}

export default App;
