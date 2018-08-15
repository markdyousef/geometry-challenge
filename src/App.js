import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";
import Triangle from "./components/Triangle";
import Controls from "./components/Controls";
import {
  compareSides,
  bordersToSides,
  sidesToBorders
} from "./lib/triangle-utils";

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
      a: 1,
      b: 1,
      c: 1
    },
    type: null,
    borders: {}
  };
  componentDidMount() {
    const { sides } = this.state;
    const borders = sidesToBorders(sides);
    this.changeType(sides);
    this.setState({ borders });
  }
  changeSide = side => {
    const newSides = { ...this.state.sides, ...side };
    const borders = sidesToBorders(newSides);
    this.changeType(newSides);
    this.setState({ sides: newSides, borders });
  };
  changeType = sides => {
    const type = compareSides(sides);
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
