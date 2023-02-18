import styled, { css } from "styled-components";
import { Head } from "./components/Head/Head";
import { RouterConfig } from "./routes/RouterConfig";
import { useLocation } from "react-router-dom";
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
      <BgPicture pagePath={location.pathname}>
        <Head />
        <RouterConfig />
      </BgPicture>
    </>
  );
}

export default App;
