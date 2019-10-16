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
const HeadText = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  display: flex;
  ${props => props.theme.whiteInput};
  margin-bottom: 20px;
`;

const AuthPresenter = ({ loginAction }: AuthPresenterTypes) => {
  return (
    <Container>
      {loginAction === 'login' && (
        <AuthContainer>
          <HeadText>Login</HeadText>
          <Input placeholder='이메일' />
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
