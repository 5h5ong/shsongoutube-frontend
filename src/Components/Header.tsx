import React from 'react';
import styled from '../typed-components';

const Container = styled.header`
  text-align: center;
  padding: 20px;
`;

const Header = () => {
  return (
    <Container>
      <div>HEADER</div>
    </Container>
  );
};

export default Header;
