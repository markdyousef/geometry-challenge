import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";
import Triangle from "./components/Triangle";
import Controls from "./components/Controls";

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
    this.setState({ sides: newSides });
  };
  render() {
    return (
      <Container>
        <Triangle type="scalene" />
        <Controls {...this.state} changeSide={this.changeSide} />
      </Container>
    );
  }
}

export default App;
