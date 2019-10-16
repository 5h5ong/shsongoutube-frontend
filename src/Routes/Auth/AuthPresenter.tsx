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
const AuthContainer = styled.div``;
const HeadText = styled.div`
  font-size: 30px;
`;

const Input = styled.input``;

const AuthPresenter = ({ loginAction }: AuthPresenterTypes) => {
  return (
    <Container>
      {loginAction === 'login' && (
        <AuthContainer>
          <HeadText>Login</HeadText>
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
