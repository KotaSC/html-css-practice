import styled from "styled-components";
import { Nav } from "./Nav";

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
`;

const Head = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Header = () => {
  return (
    <Wrapper>
      <Head>
        <Nav />
      </Head>
    </Wrapper>
  );
};
