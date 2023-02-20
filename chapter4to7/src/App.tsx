import styled, { css } from "styled-components";
import { Header } from "./components/Header/Header";
import { RouterConfig } from "./routes/RouterConfig";
import { useLocation } from "react-router-dom";
import { Meta } from "./components/Meta/Meta";
import homeBgImg from "./assets/images/main-bg.jpg";

type BgPictureProps = {
  pagePath: String;
};

const BgPicture = styled.div<BgPictureProps>`
  background-size: cover;
  background-position: center top;
  ${(props) =>
    props.pagePath === "/" &&
    css`
      background-image: url(${homeBgImg});
    `}

  min-height: 100vh;
`;

function App() {
  const location = useLocation();

  return (
    <>
      <Meta pagePath={location.pathname} />
      <BgPicture pagePath={location.pathname}>
        <Header pagePath={location.pathname} />
        <RouterConfig />
      </BgPicture>
    </>
  );
}

export default App;
