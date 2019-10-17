import React from 'react';
import styled from '../../typed-components';

type AuthPresenterTypes = {
  loginAction: string;
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
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 8px;
  padding: 10px;
  background-color: ${props => props.theme.btnColor};
  color: white;
  font-size: 16px;
  font-weight: 400;
  &:hover {
    background-color: #003eaa;
  }
`;
const Input = styled.input`
  ${props => props.theme.whiteInput};
  margin-bottom: 20px;
`;

const AuthPresenter = ({ loginAction }: AuthPresenterTypes) => {
  return (
    <Container>
      {loginAction === 'login' && (
        <AuthContainer>
          <HeadText>Login</HeadText>
          <Form>
            <Input placeholder='이메일' type='email' required />
            <Button type='submit'>이메일 보내기</Button>
          </Form>
        </AuthContainer>
      )}
      {loginAction === 'signup' && (
        <AuthContainer>
          <div>Signup</div>
        </AuthContainer>
      )}
    </Container>
  );
};

export default AuthPresenter;
