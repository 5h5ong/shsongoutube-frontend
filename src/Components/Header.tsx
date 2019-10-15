import React from 'react';
import styled from '../typed-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  text-align: center;
  width: 100%;
  height: 70px;
  margin-bottom: 50px;
  box-shadow: 0 5px 10px 0 rgba(0, 64, 128, 0.05);
`;
const HeaderText = styled.span`
  background-color: inherit;
  font-size: 35px;
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
