import React from 'react';
import styled from '../../typed-components';

const Container = styled.div`
  ${props => props.theme.whiteBox};
  padding: 40px;
`;

const AuthPresenter = () => {
  return (
    <Container>
      <div>Auth</div>
    </Container>
  );
};

export default AuthPresenter;
