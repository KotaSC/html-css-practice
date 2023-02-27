import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
`;

const FormContainer = styled.form``;
const FormDiv = styled.div`
  margin-bottom: 14px;
`;
const FormLabel = styled.label`
  font-size: 1.125rem;
  margin-bottom: 10px;
  display: block;
`;
const InputForm = styled.input`
  background: rgba(255, 255, 255, 0.5);
  border: 1px #fff solid;
  border-radius: 5px;
  padding: 10px;
  font-size: 1rem;
  width: 100%;
  &#name,
  &#email {
    max-width: 240px;
    @media (max-width: 600px) {
      max-width: 95%;
    }
  }
`;
const MessageForm = styled(InputForm)`
  max-width: 480px;
  height: 6rem;
  @media (max-width: 600px) {
    max-width: 95%;
  }
`;

const SubmitBtn = styled.input`
  font-size: 1.375rem;
  background: #0bd;
  color: #fff;
  border-radius: 5px;
  padding: 18px 32px;
  border: none;
  cursor: pointer;
  line-height: 1;
  &:hover {
    background: #0090aa;
  }
`;

export const Contact = () => {
  return (
    <Wrapper>
      <FormContainer action="#">
        <FormDiv>
          <FormLabel htmlFor="name">お名前</FormLabel>
          <InputForm type="text" id="name" name="your-name" />
        </FormDiv>
        <FormDiv>
          <FormLabel htmlFor="email">メールアドレス</FormLabel>
          <InputForm type="email" id="email" name="your-email" />
        </FormDiv>
        <FormDiv>
          <FormLabel htmlFor="message">メッセージ</FormLabel>
          <MessageForm
            as="textarea"
            id="message"
            name="your-message"
          ></MessageForm>
        </FormDiv>
        <SubmitBtn type="submit" value="送信" />
      </FormContainer>
    </Wrapper>
  );
};
