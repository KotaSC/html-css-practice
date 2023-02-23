import styled from "styled-components";
import postImg from "../../assets/images/wall.jpg";

const NewsArticle = styled.article`
  width: 74%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const PostInfo = styled.header`
  position: relative;
  padding-top: 4px;
  margin-bottom: 40px;
  @media (max-width: 600px) {
    margin-bottom: 30px;
  }
`;

const PostTitle = styled.h2`
  font-family: "Yu Mincho", "YuMincho", serif;
  font-size: 2rem;
  font-weight: normal;
  margin-left: 120px;
  @media (max-width: 600px) {
    font-size: 1.375rem;
    margin-left: 80px;
  }
`;

const PostDay = styled.p`
  background: #0bd;
  border-radius: 50%;
  color: #fff;
  width: 100px;
  height: 100px;
  font-size: 1.625rem;
  text-align: center;
  position: absolute;
  top: 0;
  padding-top: 10px;
  @media (max-width: 600px) {
    width: 70px;
    height: 65px;
    font-size: 1rem;
  }
`;

const PostYear = styled.span`
  font-size: 1rem;
  border-top: 1px rgba(255, 255, 255, 0.5) solid;
  padding-top: 6px;
  display: block;
  width: 60%;
  margin: 0 auto;
  @media (max-width: 600px) {
    font-size: 0.875rem;
    padding-top: 2px;
  }
`;

const PostImage = styled.img`
  margin-bottom: 20px;
`;

const PostCategory = styled.p`
  margin-left: 120px;
  @media (max-width: 600px) {
    font-size: 0.875rem;
    margin-top: 10px;
    margin-left: 80px;
  }
`;

const ArticleText = styled.p`
  margin-bottom: 1rem;
`;

export const Article = () => {
  return (
    <NewsArticle>
      <PostInfo>
        <PostTitle>店内ギャラリーの絵が新しくなりました</PostTitle>
        <PostDay>
          3/30 <PostYear>2019</PostYear>
        </PostDay>
        <PostCategory>カテゴリー：お店の紹介</PostCategory>
      </PostInfo>
      <PostImage src={postImg} />
      <ArticleText>
        Amet magna sea ea invidunt ut voluptua elitr eos ipsum esse clita labore
        dolores elitr dolor clita at nonumy. Facilisi elitr facer ullamcorper
        diam dolore volutpat lorem est stet accusam magna et. In te delenit duo
        dolore. Dignissim consetetur dolor consequat tempor eos dolore eos ut
        gubergren est amet ea est vero. Dolore elit no diam et accusam molestie
        kasd eros lorem sed est sed ea. Sadipscing kasd delenit voluptua enim
        sit et est consectetuer labore et aliquyam sed facilisi et luptatum erat
        sea. Et magna in ipsum no delenit accusam invidunt consetetur dolores
        vel stet. Elitr erat kasd takimata labore sanctus gubergren magna et at
        lobortis et clita sed feugiat et tation lorem amet. Diam sit sadipscing
        ut stet. Clita vero sed tation lorem elitr lorem.
      </ArticleText>
      <ArticleText>
        Hendrerit dolores diam sed enim velit diam justo vel labore odio
        gubergren voluptua. Tation eirmod erat ipsum tincidunt iusto aliquyam
        eos sanctus ut diam est sed consetetur eos esse. Augue magna kasd diam
        amet facilisis duo magna invidunt no eirmod lorem eirmod lobortis dolor.
        Nulla praesent labore. Ea nonumy dolor stet zzril elit dolore.
        Ullamcorper iriure quis ea est gubergren no sea et dolore consetetur
        nibh aliquyam eos nonumy clita sed. Erat magna vero elitr dolor
        voluptua. Kasd vulputate vero aliquam minim iusto et ea et in in
        aliquyam. Dolore diam autem nostrud dolor ut ut ipsum vel consetetur
        sit. Justo kasd clita nibh diam eu sed dolor elitr consetetur eirmod ea
        eirmod justo gubergren ut erat rebum. Magna et nobis facilisi facer
        lorem erat consetetur feugait lorem blandit dolore kasd invidunt. Diam
        kasd no et eirmod et dolore sea et tempor accumsan sadipscing. Nihil
        volutpat vel at amet veniam sit. Odio eirmod hendrerit sed aliquyam esse
        duo duo sea eum facilisis clita facilisis elitr dolore. In sed at lorem
        facer invidunt lorem. Dolore placerat et sadipscing dolores elitr. Ea
        odio elitr ut accumsan diam consetetur sea. Augue voluptua sea. Kasd ea
        eos liber ea sanctus amet ut dolore sit elit. Dolores lobortis elit sea
        accusam et volutpat wisi ipsum.
      </ArticleText>
    </NewsArticle>
  );
};
