import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
`;

const Form = styled.form``;

const NameFormLabel = styled.label``;
const NameForm = styled.input``;

const EmailFormLabel = styled.label``;
const EmailForm = styled.input``;

const MessageFormLabel = styled.label``;
const MessageForm = styled.textarea``;

export const Contact = () => {
  return (
    <Wrapper>
      <Form action="#">
        <div>
          <NameFormLabel>お名前</NameFormLabel>
          <NameForm type="text" />
        </div>
        <div>
          <EmailFormLabel>メールアドレス</EmailFormLabel>
          <EmailForm type="email" />
        </div>
        <div>
          <MessageFormLabel>メッセージ</MessageFormLabel>
          <MessageForm></MessageForm>
        </div>
      </Form>
    </Wrapper>
  );
};
