import React from 'react';
import styled from '../../typed-components';

type AuthPresenterTypes = {
  loginAction: string;
};

const Container = styled.div`
  ${props => props.theme.whiteBox};
`;

const Input = styled.input``;

const AuthPresenter = ({ loginAction }: AuthPresenterTypes) => {
  return (
    <>
      {loginAction === 'login' && (
        <Container>
          <div>Login</div>
        </Container>
      )}
      {loginAction === 'signup' && (
        <Container>
          <div>Signup</div>
        </Container>
      )}
    </>
  );
};

export default AuthPresenter;
