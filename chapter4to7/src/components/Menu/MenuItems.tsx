import styled from "styled-components";
import menuImg1 from "../../assets/images/menu1.jpg";
import menuImg2 from "../../assets/images/menu2.jpg";
import menuImg3 from "../../assets/images/menu3.jpg";
import menuImg4 from "../../assets/images/menu4.jpg";
import menuImg5 from "../../assets/images/menu5.jpg";
import menuImg6 from "../../assets/images/menu6.jpg";
import menuImg7 from "../../assets/images/menu7.jpg";
import menuImg8 from "../../assets/images/menu8.jpg";

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
  margin-top: 10%;
`;

const Grid = styled.div`
  display: grid;
  gap: 26px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  margin-top: 6%;
  margin-bottom: 50px;
`;

const MenuItem = styled.div``;

const MenuImg = styled.img``;

const MenuCaption = styled.p``;

export const MenuItems = () => {
  return (
    <Wrapper>
      <Grid>
        <MenuItem>
          <MenuImg src={menuImg1} alt="" />
          <MenuCaption>Caption</MenuCaption>
        </MenuItem>
        <MenuItem>
          <MenuImg src={menuImg2} alt="" />
          <MenuCaption>Caption</MenuCaption>
        </MenuItem>
        <MenuItem>
          <MenuImg src={menuImg3} alt="" />
          <MenuCaption>Caption</MenuCaption>
        </MenuItem>
        <MenuItem>
          <MenuImg src={menuImg4} alt="" />
          <MenuCaption>Caption</MenuCaption>
        </MenuItem>
        <MenuItem>
          <MenuImg src={menuImg5} alt="" />
          <MenuCaption>Caption</MenuCaption>
        </MenuItem>
        <MenuItem>
          <MenuImg src={menuImg6} alt="" />
          <MenuCaption>Caption</MenuCaption>
        </MenuItem>
        <MenuItem>
          <MenuImg src={menuImg7} alt="" />
          <MenuCaption>Caption</MenuCaption>
        </MenuItem>
        <MenuItem>
          <MenuImg src={menuImg8} alt="" />
          <MenuCaption>Caption</MenuCaption>
        </MenuItem>
      </Grid>
    </Wrapper>
  );
};
