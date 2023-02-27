import styled, { css } from "styled-components";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { RouterConfig } from "./routes/RouterConfig";
import { useLocation } from "react-router-dom";
import { Meta } from "./components/Meta/Meta";
import { MenuItems } from "./components/Menu/MenuItems";
import { Location } from "./components/Contact/Location";
import homeBgImg from "./assets/images/main-bg.jpg";
import menuBgImg from "./assets/images/menu-bg.jpg";
import contactBgImg from "./assets/images/contact-bg.jpg";

type BgPictureProps = {
  pagePath: String;
};

const BgPicture = styled.div<BgPictureProps>`
  min-height: 100vh;

  ${(props) =>
    (props.pagePath === "/menu" &&
      css`
        background-image: url(${menuBgImg});
      `) ||
    (props.pagePath === "/contact" &&
      css`
        background-image: url(${contactBgImg});
      `) ||
    (props.pagePath === "/" &&
      css`
        background-size: cover;
        background-position: center top;
        background-image: url(${homeBgImg});
      `)}
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
      {location.pathname === "/menu" && <MenuItems />}
      {location.pathname === "/contact" && <Location />}
      {location.pathname !== "/" && <Footer />}
    </>
  );
}

export default App;
