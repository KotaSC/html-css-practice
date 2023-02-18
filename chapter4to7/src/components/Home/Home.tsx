import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
  text-align: center;
  margin-top: 10%;
`;

const PageTitle = styled.h2`
  font-size: 5rem;
  font-family: "Philosopher", serif;
  text-transform: none;
  font-weight: normal;
`;

const HomeText = styled.p`
  font-size: 1.25rem;
  margin: 10px 0 42px;
`;

const MenuBtn = styled.a`
  font-size: 1.375rem;
  background: #0bd;
  color: #fff;
  border-radius: 5px;
  padding: 18px 32px;
  &:hover {
    background: #0090aa;
  }
`;

export const Home = () => {
  return (
    <Wrapper>
      <PageTitle>We'll Make Your Day</PageTitle>
      <HomeText>
        おしゃれなカフェで癒されてみませんか？無添加の食材で体の中からリフレッシュ．
      </HomeText>
      <MenuBtn href="/menu">メニューを見る</MenuBtn>
    </Wrapper>
  );
};
