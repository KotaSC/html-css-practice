import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
  margin-top: 10%;
  @media (max-width: 600px) {
    margin-top: 30%;
  }
`;

const MenuContents = styled.div`
  max-width: 560px;
  margin: 10% auto 0;
  @media (max-width: 600px) {
    margin-top: 20%;
  }
`;

const PageTitle = styled.h2`
  text-align: center;
  font-size: 5rem;
  font-family: "Philosopher", serif;
  text-transform: none;
  font-weight: normal;
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

const Introduction = styled.p`
  font-size: 1.125rem;
  margin: 10px 0 0;
`;

export const Menu = () => {
  return (
    <Wrapper>
      <MenuContents>
        <PageTitle>Menu</PageTitle>
        <Introduction>
          Exerci diam voluptua lobortis dolor sit augue sed est dolores ipsum
          sed erat. Voluptua justo dolore stet. Sit lorem vel ut iusto ut tempor
          rebum tempor ipsum laoreet amet feugait. Duis magna eirmod ea elit
          exerci. Magna sed et dolore dolor ipsum est duo. Ut eum dolore dolore
          sea dolores eos clita eirmod aliquyam tincidunt eirmod lorem et lorem.
          Stet in lorem at eirmod. Tempor clita eros clita sea. Elitr sadipscing
          ut lorem aliquyam et te consetetur sit diam rebum. Elitr no dolore
          eleifend et elit dolore duo lorem te ut labore diam elitr takimata.
        </Introduction>
      </MenuContents>
    </Wrapper>
  );
};
