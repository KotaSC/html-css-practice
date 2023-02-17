import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

const Image = styled.image``;

export const Logo = () => {
  return (
    <Image>
      <h1>
        <img src={logo} alt="WCBカフェ ホーム"></img>
      </h1>
    </Image>
  );
};
