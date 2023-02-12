import React from "react";
import "./App.css";
import styled from "styled-components";

type FlexContainerProps = {
  direction?: string;
};

const Container = styled.div`
  background-color: #f6f0cc;
  padding: 20px;
`;

const FlexContainer = styled.div<FlexContainerProps>`
  padding-bottom: 20px;
  display: flex;
  flex-direction: ${(props) => props.direction || "initial"};
  border-bottom: solid 5px #432c02;
`;

const Item = styled.div`
  background-color: #3aacad;
  color: #fff;
  margin: 20px;
  padding: 10px;
`;

function App() {
  return (
    <>
      <Container>
        <h1>flex-direction: row</h1>
        <FlexContainer direction="row">
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
          <Item>Item 4</Item>
        </FlexContainer>

        <h1>flex-direction: row-reverse</h1>
        <FlexContainer direction="row-reverse">
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
          <Item>Item 4</Item>
        </FlexContainer>
      </Container>
    </>
  );
}

export default App;
