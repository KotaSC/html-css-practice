import styled from "styled-components";
import { Article } from "./Article";
import { Sidebar } from "./Sidebar";

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
`;

const NewsContents = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const News = () => {
  return (
    <Wrapper>
      <NewsContents>
        <Article />
        <Sidebar />
      </NewsContents>
    </Wrapper>
  );
};
