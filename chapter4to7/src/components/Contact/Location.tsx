import styled from "styled-components";

const LocationContainer = styled.section`
  padding: 4% 0;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const LocationInfo = styled.div`
  width: 22%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const LocationInfoText = styled.p`
  padding: 12px 10px;
`;

const SubTitle = styled.h3`
  font-size: 1.375rem;
  padding: 0 8px 8px;
  border-bottom: 2px #0bd solid;
  font-weight: normal;
`;

const LocationMap = styled.div`
  width: 74%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

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
        <LocationMap>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.7303298944646!2d139.7362847984605!3d35.66565761019957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b835eb8d1e9%3A0x2b7a60ac15c8822a!2z44CSMTA2LTAwMzIg5p2x5Lqs6YO95riv5Yy65YWt5pys5pyo77yS5LiB55uu77yU4oiS77yVIOWFreacrOacqETjgrnjgq_jgqjjgqI!5e0!3m2!1sja!2sjp!4v1677580597902!5m2!1sja!2sjp"
            title="Googleマップ"
            height="400"
            style={{ border: "none", width: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </LocationMap>
      </Wrapper>
    </LocationContainer>
  );
};
