import styled from "styled-components";
import { Nav } from "./Nav";
import newsBgImg from "../../assets/images/news-bg.jpg";

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
`;

const Head = styled.header`
  display: flex;
  justify-content: space-between;
`;

const BgPicture = styled.div`
  background-size: cover;
  background-image: url(${newsBgImg});
  height: 270px;
  margin-bottom: 40px;
`;

const PageTitle = styled.h2`
  font-size: 5rem;
  font-family: "Philosopher", serif;
  text-transform: none;
  font-weight: normal;
  text-align: center;
`;

export const Header = (props: { pagePath: string }) => {
  const isNews = props.pagePath !== "/news" ? true : false;
  return (
    <>
      {isNews ? (
        <Wrapper>
          <Head>
            <Nav />
          </Head>
        </Wrapper>
      ) : (
        <BgPicture>
          <Wrapper>
            <Head>
              <Nav />
            </Head>
            <PageTitle>NEWS</PageTitle>
          </Wrapper>
        </BgPicture>
      )}
    </>
  );
};
