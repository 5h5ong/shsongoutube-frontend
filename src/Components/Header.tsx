import React from 'react';
import styled from '../typed-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import FancyLink from './FancyLink';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
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
  padding-left: 30px;
`;
const IconContainer = styled.div`
  padding-right: 30px;
`;

const Header = () => {
  return (
    <Container>
      <FancyLink to='/'>
        <HeaderText>Shsongoutube</HeaderText>
      </FancyLink>
      <IconContainer>
        <FancyLink to='/auth'>
          <FontAwesomeIcon icon={faSignInAlt} size='lg' />
        </FancyLink>
      </IconContainer>
    </Container>
  );
};

export default Header;
