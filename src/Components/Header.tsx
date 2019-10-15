import React from 'react';
import styled from '../typed-components';

const Container = styled.div`
  background-color: white;
  padding-top: 20px;
  text-align: center;
  width: 100%;
  height: 70px;
  margin-bottom: 50px;
  box-shadow: 0 5px 10px 0 rgba(0, 64, 128, 0.05);
`;
const HeaderText = styled.div`
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
