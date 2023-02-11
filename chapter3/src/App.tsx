import React from "react";
import "./App.css";
import styled from "styled-components";

const Container = styled.section`
  background-color: #fffeee;
`;

const Text = styled.h1`
  color: #0bd;
`;

const SubText = styled.p`
  font-size: 20px;
`;

function App() {
  return (
    <Container>
      <Text>Text</Text>
      <SubText>SubText</SubText>
    </Container>
  );
}

export default App;
