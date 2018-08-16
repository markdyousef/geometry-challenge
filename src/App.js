import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";
import Triangle from "./components/Triangle";
import Controls from "./components/Controls";
import { compareSides, sidesToBorders } from "./lib/triangle-utils";

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

const Error = styled.div`
  background: #ed3752;
  padding: 10px 30px;
  border: 2px solid #ed3752;
  color: #fff;
  font-weight: 200;
  border-radius: 0.5em;
`;

class App extends Component {
  state = {
    sides: {
      a: 1,
      b: 1,
      c: 1
    },
    type: null,
    color: null,
    borders: {},
    error: null
  };
  componentDidMount() {
    const { sides } = this.state;
    this.changeType(sides);
    // calculate borders
    const borders = sidesToBorders(sides);
    this.setState({ borders });
  }
  changeSide = side => {
    const newSides = { ...this.state.sides, ...side };
    this.changeType(newSides);

    const borders = sidesToBorders(newSides);
    this.setState({ sides: newSides, borders });
  };
  changeType = sides => {
    try {
      const type = compareSides(sides);
      this.setState({ type, error: null });
    } catch (error) {
      this.setState({ error: error.message, type: null });
    }
  };
  render() {
    return (
      <Container>
        <Triangle {...this.state} />
        <Controls sides={this.state.sides} changeSide={this.changeSide} />
        {this.state.error && <Error>{this.state.error}</Error>}
      </Container>
    );
  }
}

export default App;
