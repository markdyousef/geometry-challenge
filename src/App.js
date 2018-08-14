import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";
import Triangle from "./components/Triangle";
import Input from "./components/Input";

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

class App extends Component {
  render() {
    return (
      <Container>
        <Triangle type="scalene" />
        <ControlsContainer>
          <Input id="a" />
          <Input id="b" />
          <Input id="c" />
        </ControlsContainer>
      </Container>
    );
  }
}

export default App;
