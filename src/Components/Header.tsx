import React from 'react';
import styled from '../typed-components';

const Container = styled.header`
  text-align: center;
  padding: 20px;
  background-color: ${props => props.theme.headerColor};
`;
const HeaderText = styled.div`
  background-color: inherit;
  font-size: 50px;
  font-weight: 1000;
`;
const Header = () => {
  return (
    <Container>
      <HeaderText>Shsongoutube</HeaderText>
    </Container>
  );
};

export default Header;
