import styled from "styled-components";

const Foot = styled.footer`
  background: #432;
  text-align: center;
  padding: 26px 0;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
`;

const FootText = styled.p`
  color: #fff;
  font-size: 0.875rem;
`;

export const Footer = () => {
  return (
    <Foot>
      <Wrapper>
        <FootText>
          <small>&copy; 2019 Manabox</small>
        </FootText>
      </Wrapper>
    </Foot>
  );
};
