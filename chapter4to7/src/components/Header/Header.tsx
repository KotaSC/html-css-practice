import styled, { css } from "styled-components";
import { Nav } from "./Nav";
import newsBgImg from "../../assets/images/news-bg.jpg";

type PageTitleProps = {
  isContact: boolean;
};

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
`;

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BgPicture = styled.div`
  background-size: cover;
  background-image: url(${newsBgImg});
  height: 270px;
  margin-bottom: 40px;
`;

const PageTitle = styled.h2<PageTitleProps>`
  font-size: 5rem;
  font-family: "Philosopher", serif;
  text-transform: none;
  font-weight: normal;

  ${(props) =>
    !props.isContact &&
    css`
      text-align: center;
    `}
`;

export const Header = (props: { pagePath: string }) => {
  const isNews = props.pagePath === "/news" ? true : false;
  const isContact = props.pagePath === "/contact" ? true : false;
  return (
    <>
      {!isNews ? (
        <Wrapper>
          <Head>
            <Nav />
          </Head>
          {isContact && <PageTitle isContact={isContact}>CONTACT</PageTitle>}
        </Wrapper>
      ) : (
        <BgPicture>
          <Wrapper>
            <Head>
              <Nav />
            </Head>
            <PageTitle isContact={isContact}>NEWS</PageTitle>
          </Wrapper>
        </BgPicture>
      )}
    </>
  );
};
