import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { gql } from 'apollo-boost';
import styled from '../typed-components';
import FancyLink from './FancyLink';
import { useMutation } from 'react-apollo-hooks';

interface HeaderProps {
  isLoggedIn: boolean;
}

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
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 30px;
  flex-direction: row;
`;
const Button = styled.div`
  ${props => props.theme.basicButton};
  margin-right: 20px;
  width: 100px;
  height: 35px;
  font-size: 15px;
  text-align: center;
`;

const LOCAL_LOGOUT = gql`
  mutation {
    localLogout @client
  }
`;

const Header = ({ isLoggedIn }: HeaderProps) => {
  const [localLogoutMutation] = useMutation(LOCAL_LOGOUT);
  const onClick = async () => {
    // logout
    await localLogoutMutation();
  };
  return (
    <Container>
      <FancyLink to='/'>
        <HeaderText>Shsongoutube</HeaderText>
      </FancyLink>
      <IconContainer>
        {isLoggedIn && (
          <>
            <Button onClick={onClick}>Logout</Button>
            <FancyLink to='/profile'>
              <FontAwesomeIcon icon={faUser} size='lg' />
            </FancyLink>
          </>
        )}
        {!isLoggedIn && (
          <FancyLink to='/auth'>
            <FontAwesomeIcon icon={faSignInAlt} size='lg' />
          </FancyLink>
        )}
      </IconContainer>
    </Container>
  );
};

export default Header;
