import styled from "styled-components";
import { Nav } from "./Nav";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Head = () => {
  return (
    <Header>
      <Nav />
    </Header>
  );
};
