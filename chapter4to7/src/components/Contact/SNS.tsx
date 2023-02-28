import styled from "styled-components";
import { Timeline } from "react-twitter-widgets";

const SNSContainer = styled.section`
  background: #faf7f0;
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

const SNSBox = styled.div`
  width: 30%;
  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const SubTitle = styled.h3`
  font-size: 1.375rem;
  padding: 0 8px 8px;
  border-bottom: 2px #0bd solid;
  font-weight: normal;
  margin-bottom: 30px;
`;

export const SNS = () => {
  return (
    <SNSContainer>
      <Wrapper>
        <SNSBox>
          <SubTitle>Facebook</SubTitle>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=315&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            title="facebook"
            width="340"
            height="315"
            style={{ border: "none", overflow: "hidden" }}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </SNSBox>

        <SNSBox>
          <SubTitle>Twitter</SubTitle>
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "TwitterDev",
            }}
            options={{
              width: "340",
              height: "315",
            }}
          />
        </SNSBox>

        <SNSBox>
          <SubTitle>Youtube</SubTitle>
          <iframe
            width="340"
            height="315"
            src="https://www.youtube.com/embed/R6LZWkL2vYE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </SNSBox>
      </Wrapper>
    </SNSContainer>
  );
};
