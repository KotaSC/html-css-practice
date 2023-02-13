import React from "react";
import "./App.css";
import styled from "styled-components";

type FlexContainerProps = {
  direction?: string;
  justifyContent?: string;
};

const FlexContainer = styled.div<FlexContainerProps>`
  padding-bottom: 60px;
  display: flex;
  flex-direction: ${(props) => props.direction || "initial"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  border-bottom: solid 5px #432c02;
`;

const Container = styled.div`
  background-color: #f6f0cc;
  padding: 20px 30vw;
`;

const ItemList = styled.div`
  background-color: #3aacad;
  color: #fff;
  margin: 20px;
  padding: 10px;
`;

const Items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
const ItemElem = Items.map((Item) => {
  return <ItemList>{Item}</ItemList>;
});

function App() {
  return (
    <>
      <Container>
        <h1>flex-direction: row</h1>
        <FlexContainer direction="row">{ItemElem}</FlexContainer>

        <h1>flex-direction: row-reverse</h1>
        <FlexContainer direction="row-reverse">{ItemElem}</FlexContainer>

        <h1>justify-content: flex-start</h1>
        <FlexContainer>{ItemElem}</FlexContainer>

        <h1>justify-content: flex-end</h1>
        <FlexContainer justifyContent="flex-end">{ItemElem}</FlexContainer>

        <h1>justify-content: center</h1>
        <FlexContainer justifyContent="center">{ItemElem}</FlexContainer>

        <h1>justify-content: space-between</h1>
        <FlexContainer justifyContent="space-between">{ItemElem}</FlexContainer>

        <h1>justify-content: space-around</h1>
        <FlexContainer justifyContent="space-around">{ItemElem}</FlexContainer>
      </Container>
    </>
  );
}

export default App;
