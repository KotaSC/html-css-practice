import styled from "styled-components";

const Aside = styled.aside`
  width: 22%;
`;

const SubTitle = styled.h3`
  font-size: 1.375rem;
  padding: 0 8px 8px;
  border-bottom: 2px #0bd solid;
  font-weight: normal;
`;

const SubMenu = styled.ul`
  margin-bottom: 60px;
`;

const SubMenuList = styled.li`
  border-bottom: 1px #ddd solid;
`;

const SubMenuItem = styled.a`
  color: #432;
  padding: 10px;
  display: block;
  &:hover {
    color: #0bd;
  }
`;

const SubMenuText = styled.p`
  padding: 12px 10px;
`;

export const Sidebar = () => {
  return (
    <Aside>
      <SubTitle>カテゴリー</SubTitle>
      <SubMenu>
        <SubMenuList>
          <SubMenuItem href="#">お店の紹介</SubMenuItem>
        </SubMenuList>
        <SubMenuList>
          <SubMenuItem href="#">期間限定メニュー</SubMenuItem>
        </SubMenuList>
        <SubMenuList>
          <SubMenuItem href="#">イベント</SubMenuItem>
        </SubMenuList>
        <SubMenuList>
          <SubMenuItem href="#">お客様との会話</SubMenuItem>
        </SubMenuList>
      </SubMenu>

      <SubTitle>このお店について</SubTitle>
      <SubMenuText>
        Dolor possim sit. Lobortis imperdiet ut dolore ea elitr dolore sit.
        Voluptua elit takimata stet stet est takimata ipsum. Et et ipsum ut amet
        gubergren accusam magna. Nihil sit sit invidunt vulputate sed dolore et
        autem rebum eirmod ipsum vel. Adipiscing consequat accusam sadipscing
        tempor duo in nulla diam ut labore wisi dolor vero magna ut. Gubergren
        labore accumsan dolore ipsum ipsum eos consetetur ut et sadipscing diam.
        Dolor duo eos nobis no hendrerit ut. Vel rebum sea est vel et accusam
        accusam et consequat suscipit elitr sea et enim. Amet et duis et duis
        nonumy magna eleifend ea ipsum kasd et imperdiet et et et erat takimata
        consetetur.
      </SubMenuText>
    </Aside>
  );
};
