import styled from "styled-components";
import { Nav } from "./Nav";

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Head = () => {
  return (
    <Wrapper>
      <Header>
        <Nav />
      </Header>
    </Wrapper>
  );
};
