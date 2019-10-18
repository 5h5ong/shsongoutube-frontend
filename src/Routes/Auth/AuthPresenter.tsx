import React, { FormEventHandler } from 'react';
import styled from '../../typed-components';

type AuthPresenterTypes = {
  loginAction: string;
  emailInput: any;
  secretInput: any;
  onSubmit: FormEventHandler<HTMLFormElement>;
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.theme.whiteBox};
  min-width: ${props => props.theme.minWidth};
`;
const AuthContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const HeadText = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  ${props => props.theme.basicButton};
`;
const Input = styled.input`
  ${props => props.theme.whiteInput};
  margin-bottom: 20px;
`;

const AuthPresenter = ({
  loginAction,
  emailInput,
  secretInput,
  onSubmit
}: AuthPresenterTypes) => {
  return (
    <Container>
      {loginAction === 'login' && (
        <AuthContainer>
          <HeadText>Login</HeadText>
          <Form onSubmit={onSubmit}>
            <Input
              placeholder='이메일'
              type='email'
              value={emailInput.value}
              onChange={emailInput.handleChange}
              required
            />
            <Button type='submit'>이메일 보내기</Button>
          </Form>
        </AuthContainer>
      )}
      {loginAction === 'signup' && (
        <AuthContainer>
          <HeadText>Signup</HeadText>
        </AuthContainer>
      )}
      {loginAction === 'confirm' && (
        <AuthContainer>
          <HeadText>Confirm</HeadText>
          <Form onSubmit={onSubmit}>
            <Input
              placeholder='Secret Key를 입력하세요'
              value={secretInput.value}
              onChange={secretInput.handleChange}
            />
            <Button>인증</Button>
          </Form>
        </AuthContainer>
      )}
    </Container>
  );
};

export default AuthPresenter;
