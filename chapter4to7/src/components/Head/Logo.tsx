import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

const Image = styled.h1`
  width: 210px;
  margin-top: 14px;
`;

export const Logo = () => {
  return (
    <Image>
      <img src={logo} alt="WCBカフェ ホーム" />
    </Image>
  );
};
