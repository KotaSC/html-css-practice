import styled from "styled-components";

const LocationContainer = styled.section``;

const Wrapper = styled.div``;

const LocationInfo = styled.div``;
const LocationInfoText = styled.p``;

const SubTitle = styled.h3``;

const LocationMap = styled.div``;

export const Location = () => {
  return (
    <LocationContainer>
      <Wrapper>
        <LocationInfo>
          <SubTitle>カフェ東駅前</SubTitle>
          <LocationInfoText>
            住所：東京都〇〇区
            <br />
            〇〇〇〇〇〇 000-22-1
            <br />
            〇〇〇〇
            <br />
            電話：03-1111-1111
            <br />
            営業時間：10:00 ~ 20:00
            <br />
            休日：水曜
          </LocationInfoText>
        </LocationInfo>
        <LocationMap></LocationMap>
      </Wrapper>
    </LocationContainer>
  );
};
